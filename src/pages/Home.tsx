import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import WorkSection from '../components/WorkSection'
import SystemsSection from '../components/SystemsSection'
import WireSection from '../components/WireSection'
import ExperienceSection from '../components/ExperienceSection'
import ToolkitSection from '../components/ToolkitSection'
import DispatchesSection from '../components/DispatchesSection'

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Marquee />
      <WorkSection />
      <SystemsSection />
      <WireSection />
      <ExperienceSection />
      <ToolkitSection />
      <DispatchesSection />
    </div>
  )
}
