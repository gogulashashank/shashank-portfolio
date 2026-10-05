import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Bloom, ChromaticAberration, EffectComposer, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import type { MotionValue } from 'framer-motion'

/* ------------------------------------------------------------------ */
/* Deterministic graph generation                                       */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Graph = {
  positions: THREE.Vector3[]
  edges: [number, number][]
  flagged: Set<number>
  hubs: Set<number>
}

export const GRAPH_STATS = { nodes: 0, edges: 0, flagged: 0 }

function buildGraph(): Graph {
  const rand = mulberry32(1998)
  const gauss = () => {
    const u = 1 - rand()
    const v = rand()
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
  }

  const positions: THREE.Vector3[] = [new THREE.Vector3(0, 0, 0)] // target organisation
  const hubs = new Set<number>([0])
  const edges: [number, number][] = []
  const clusters = 8
  const perCluster = 22
  const clusterCenters: number[] = []

  for (let c = 0; c < clusters; c++) {
    // Fibonacci sphere distribution for cluster centres
    const y = 1 - (c / (clusters - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = c * 2.399963
    const center = new THREE.Vector3(Math.cos(theta) * r, y * 0.75, Math.sin(theta) * r).multiplyScalar(2.6)
    const ci = positions.length
    positions.push(center)
    hubs.add(ci)
    clusterCenters.push(ci)
    edges.push([0, ci])

    const members: number[] = [ci]
    for (let i = 0; i < perCluster; i++) {
      const p = center.clone().add(new THREE.Vector3(gauss(), gauss(), gauss()).multiplyScalar(0.62))
      const idx = positions.length
      positions.push(p)
      // connect to the nearest existing member (tree-like ownership chain)
      let best = members[0]
      let bestD = Infinity
      for (const m of members) {
        const d = positions[m].distanceToSquared(p)
        if (d < bestD) {
          bestD = d
          best = m
        }
      }
      edges.push([best, idx])
      if (rand() < 0.28) edges.push([members[Math.floor(rand() * members.length)], idx])
      members.push(idx)
    }
  }

  // Cross-cluster "layering" links
  for (let i = 0; i < 26; i++) {
    const a = 1 + Math.floor(rand() * (positions.length - 1))
    const b = 1 + Math.floor(rand() * (positions.length - 1))
    if (a !== b) edges.push([a, b])
  }
  for (let i = 0; i < clusterCenters.length; i++) {
    edges.push([clusterCenters[i], clusterCenters[(i + 3) % clusterCenters.length]])
  }

  const flagged = new Set<number>()
  while (flagged.size < 11) {
    const f = 1 + Math.floor(rand() * (positions.length - 1))
    if (!hubs.has(f)) flagged.add(f)
  }

  GRAPH_STATS.nodes = positions.length
  GRAPH_STATS.edges = edges.length
  GRAPH_STATS.flagged = flagged.size
  return { positions, edges, flagged, hubs }
}

const ACID = new THREE.Color('#34f5a4')
const ALERT = new THREE.Color('#ff3b5c')
const WHITE = new THREE.Color('#ffffff')
const DIM = new THREE.Color('#1d6b52')

/* ------------------------------------------------------------------ */
/* Scene pieces                                                         */
/* ------------------------------------------------------------------ */

function Nodes({ graph }: { graph: Graph }) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const base = useMemo(
    () =>
      graph.positions.map((_, i) =>
        i === 0 ? 0.16 : graph.hubs.has(i) ? 0.085 : graph.flagged.has(i) ? 0.06 : 0.022 + ((i * 37) % 10) / 400,
      ),
    [graph],
  )

  useEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    graph.positions.forEach((p, i) => {
      const c = i === 0 ? WHITE : graph.flagged.has(i) ? ALERT : graph.hubs.has(i) ? ACID : i % 3 === 0 ? DIM : ACID
      mesh.setColorAt(i, c.clone().multiplyScalar(graph.flagged.has(i) ? 2.2 : i === 0 ? 2.5 : 1.2))
      dummy.position.copy(p)
      dummy.scale.setScalar(base[i])
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [graph, base, dummy])

  useFrame(({ clock }) => {
    const mesh = ref.current
    if (!mesh) return
    const t = clock.elapsedTime
    graph.flagged.forEach((i) => {
      const s = base[i] * (1 + 0.55 * Math.max(0, Math.sin(t * 3 + i)))
      dummy.position.copy(graph.positions[i])
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    dummy.position.set(0, 0, 0)
    dummy.scale.setScalar(base[0] * (1 + 0.12 * Math.sin(t * 1.6)))
    dummy.updateMatrix()
    mesh.setMatrixAt(0, dummy.matrix)
    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, graph.positions.length]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  )
}

function Edges({ graph }: { graph: Graph }) {
  const geometry = useMemo(() => {
    const pos = new Float32Array(graph.edges.length * 6)
    const col = new Float32Array(graph.edges.length * 6)
    graph.edges.forEach(([a, b], i) => {
      const pa = graph.positions[a]
      const pb = graph.positions[b]
      pos.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], i * 6)
      const hot = graph.flagged.has(a) || graph.flagged.has(b)
      const c = hot ? ALERT.clone().multiplyScalar(0.9) : ACID.clone().multiplyScalar(0.38)
      col.set([c.r, c.g, c.b, c.r, c.g, c.b], i * 6)
    })
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('color', new THREE.BufferAttribute(col, 3))
    return g
  }, [graph])

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.55} toneMapped={false} depthWrite={false} />
    </lineSegments>
  )
}

/** Particles travelling along edges: the "money trail". */
function Pulses({ graph, count = 320 }: { graph: Graph; count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const state = useMemo(() => {
    const rand = mulberry32(42)
    return Array.from({ length: count }, () => ({
      edge: Math.floor(rand() * graph.edges.length),
      t: rand(),
      speed: 0.15 + rand() * 0.5,
      dir: rand() > 0.5 ? 1 : -1,
    }))
  }, [graph, count])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    state.forEach((p, i) => {
      const [a, b] = graph.edges[p.edge]
      const hot = graph.flagged.has(a) || graph.flagged.has(b)
      const c = (hot ? ALERT : ACID).clone().multiplyScalar(2)
      col.set([c.r, c.g, c.b], i * 3)
    })
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('color', new THREE.BufferAttribute(col, 3))
    return g
  }, [state, graph, count])

  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame((_, dt) => {
    const attr = geometry.getAttribute('position') as THREE.BufferAttribute
    const colAttr = geometry.getAttribute('color') as THREE.BufferAttribute
    const delta = Math.min(dt, 0.05)
    state.forEach((p, i) => {
      p.t += p.speed * delta
      if (p.t > 1) {
        // hop to a connected edge so trails look like they flow through the network
        const [, end] = graph.edges[p.edge]
        const next = graph.edges.findIndex(([a], idx) => a === end && idx !== p.edge)
        p.edge = next >= 0 && Math.random() > 0.2 ? next : Math.floor(Math.random() * graph.edges.length)
        p.t = 0
        const [a, b] = graph.edges[p.edge]
        const hot = graph.flagged.has(a) || graph.flagged.has(b)
        const c = (hot ? ALERT : ACID).clone().multiplyScalar(2)
        colAttr.setXYZ(i, c.r, c.g, c.b)
        colAttr.needsUpdate = true
      }
      const [a, b] = graph.edges[p.edge]
      tmp.lerpVectors(graph.positions[a], graph.positions[b], p.t)
      attr.setXYZ(i, tmp.x, tmp.y, tmp.z)
    })
    attr.needsUpdate = true
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
        sizeAttenuation
      />
    </points>
  )
}

function ScanRings() {
  const a = useRef<THREE.Mesh>(null)
  const b = useRef<THREE.Mesh>(null)
  useFrame((_, dt) => {
    if (a.current) a.current.rotation.z += dt * 0.25
    if (b.current) b.current.rotation.z -= dt * 0.15
  })
  return (
    <group>
      <mesh ref={a} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[3.9, 0.004, 8, 200]} />
        <meshBasicMaterial color={ACID} transparent opacity={0.5} toneMapped={false} />
      </mesh>
      <mesh ref={b} rotation={[Math.PI / 1.7, 0.4, 0]}>
        <torusGeometry args={[4.4, 0.003, 8, 200, Math.PI * 1.4]} />
        <meshBasicMaterial color={ALERT} transparent opacity={0.35} toneMapped={false} />
      </mesh>
    </group>
  )
}

function Rig({ progress, children }: { progress?: MotionValue<number>; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { camera, pointer } = useThree()
  const spin = useRef(0)

  useFrame((_, dt) => {
    const g = group.current
    if (!g) return
    const p = progress?.get() ?? 0
    spin.current += Math.min(dt, 0.05) * (0.06 + p * 0.5)
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, spin.current + pointer.x * 0.45, 0.06)
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -pointer.y * 0.25 + p * 0.6, 0.06)
    // Fly into the graph as the user scrolls
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.6 - p * 5.2, 0.08)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, p * 0.6, 0.08)
    camera.lookAt(0, 0, 0)
  })

  return <group ref={group}>{children}</group>
}

export default function HeroScene({
  progress,
  active = true,
}: {
  progress?: MotionValue<number>
  active?: boolean
}) {
  const graph = useMemo(buildGraph, [])
  const isSmall = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, isSmall ? 1.5 : 1.8]}
      camera={{ position: [0, 0, 7.6], fov: 50, near: 0.1, far: 100 }}
      gl={{ antialias: false, powerPreference: 'high-performance', alpha: false }}
      onCreated={({ gl }) => gl.setClearColor('#050607')}
    >
      <fog attach="fog" args={['#050607', 6, 16]} />
      <Rig progress={progress}>
        <group position={[isSmall ? 0 : 1.6, isSmall ? 0.8 : 0, 0]}>
          <Edges graph={graph} />
          <Nodes graph={graph} />
          <Pulses graph={graph} count={isSmall ? 160 : 320} />
          <ScanRings />
        </group>
      </Rig>
      <Stars radius={40} depth={30} count={isSmall ? 900 : 2200} factor={2.4} saturation={0} fade speed={0.6} />
      <EffectComposer multisampling={0}>
        <Bloom intensity={1.35} luminanceThreshold={0.15} luminanceSmoothing={0.3} mipmapBlur radius={0.75} />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new THREE.Vector2(0.0006, 0.0009)}
          radialModulation={false}
          modulationOffset={0}
        />
        <Vignette eskil={false} offset={0.2} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  )
}
