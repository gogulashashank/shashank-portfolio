import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldAlert, Activity, MapPin, FileText } from 'lucide-react'

export default function SampleInvestigation() {
  return (
    <div className="w-full min-h-screen bg-ink pt-28 pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-acid transition-colors mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-acid block mb-3">
            // Forensic Casework Drill-Down
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Investigation Sample
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl font-normal leading-relaxed">
            A fully anonymised, simulated Alert Review demonstrating risk rationale, disposition, and escalation workflows.
          </p>
        </div>

        {/* The Alert Review Dossier */}
        <div className="rounded-3xl border border-white/15 bg-white/[0.02] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header Banner */}
          <div className="bg-rose-500/20 border-b border-rose-500/30 px-6 sm:px-8 py-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-rose-300">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <span>ALERT ID: #TXN-99482-AML</span>
            </div>
            <div className="font-mono text-xs font-bold uppercase tracking-widest bg-rose-500/30 text-rose-200 border border-rose-400/30 px-3 py-1 rounded-full">
              High Priority Escalation
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* 1. Alert Triggers */}
            <section>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/40 pb-3 border-b border-white/10 mb-4">
                1. Alert Triggers
              </h2>
              <ul className="space-y-3 font-normal text-sm sm:text-base text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold mt-0.5 shrink-0">→</span>
                  <span>
                    <strong className="text-white">Velocity Anomaly:</strong> 5 transactions initiated within 12 minutes, totaling £45,000.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold mt-0.5 shrink-0">→</span>
                  <span>
                    <strong className="text-white">Jurisdiction:</strong> Beneficiary bank located in known high-risk jurisdiction (Jurisdiction X).
                  </span>
                </li>
              </ul>
            </section>

            {/* 2. Contextual Signals */}
            <section>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/40 pb-3 border-b border-white/10 mb-4">
                2. Contextual Signals (SQL / OSINT)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center gap-2 font-bold text-white text-sm mb-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Account History</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    Account tenure is 4 years. Historical monthly velocity is £2,000. Current volume represents a 2,000% deviation from baseline.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center gap-2 font-bold text-white text-sm mb-2">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>Device Geolocation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    Login originated from a new Device ID. IP address resolves to a commercial hosting provider (Datacenter IP), heavily indicative of proxy/VPN usage.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Investigator Rationale & Disposition */}
            <section className="rounded-2xl border border-white/10 bg-[#0c0e14] p-6 sm:p-8">
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid mb-3">
                3. Investigator Rationale
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-8">
                Review of the account indicates a sudden, extreme deviation from established behavioral baselines. The combination of a new Device ID, an anonymizing proxy IP, and rapid, high-value outbound transfers to an offshore jurisdiction strongly points to Account Takeover (ATO) followed by immediate layering of funds. Attempted to contact the customer via verified mobile number; call went directly to voicemail.
              </p>

              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid mb-4">
                4. Disposition
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-xl font-mono text-xs font-bold">
                  Action: Suspend Outbound Transfers
                </div>
                <div className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-4 py-2 rounded-xl font-mono text-xs font-bold flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Escalate for SAR Filing (POCA Part 7)</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
