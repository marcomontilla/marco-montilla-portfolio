import { MapPin, BookOpen, Download } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personal, education, strengths } from '@/data/resume'

const achievements = [
  { metric: '70%', detail: 'billing pipeline runtime cut — 8h → 2.5h, fully unattended' },
  { metric: '500k+', detail: 'telecom subscribers on systems I own and maintain' },
  { metric: '40+', detail: 'institutional applications modernized at Emory University' },
  { metric: 'PHP 5→8', detail: 'multi-brand legacy platform modernization in production' },
]

export function About() {
  return (
    <section id="about" className="section bg-slate-50/50 dark:bg-dark-surface/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="section-inner">
        <SectionHeader
          eyebrow="About"
          title="Engineering systems that"
          titleAccent="actually hold up."
        />

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">

          {/* ── Main bio card ── */}
          <AnimatedSection className="lg:col-span-2 flex flex-col" delay={80}>
            <GlassCard outerClassName="flex-1" className="p-7 flex flex-col">

              {/* Short bio */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Lead-level Backend & Systems Engineer with 9+ years turning complex, fragile platforms into reliable production infrastructure.
                Based in <span className="text-slate-900 dark:text-white font-medium">Atlanta, GA</span> — currently at{' '}
                <span className="text-slate-900 dark:text-white font-medium">Telrite</span>, owning backend and monitoring architecture for a multi-brand telecom platform.
              </p>

              {/* Achievement bullets */}
              <ul className="mt-6 space-y-3">
                {achievements.map(({ metric, detail }) => (
                  <li key={metric} className="flex items-start gap-3">
                    <span className="font-mono font-bold text-sm text-indigo-500 dark:text-indigo-400 w-16 flex-shrink-0 pt-0.5 tabular-nums">
                      {metric}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Footer row — pinned to bottom */}
              <div className="mt-auto pt-5 border-t border-slate-200/50 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin size={12} className="text-indigo-500" />
                    {personal.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <BookOpen size={12} className="text-indigo-500" />
                    {education.degree}
                  </div>
                </div>

                {/* CV download */}
                <a
                  href="/Marco_Resume.pdf"
                  download="Marco_Resume.pdf"
                  className={[
                    'ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium',
                    'bg-indigo-50 text-indigo-700 border border-indigo-200',
                    'dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20',
                    'hover:bg-indigo-100 dark:hover:bg-indigo-500/20',
                    'transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0',
                  ].join(' ')}
                >
                  <Download size={12} />
                  Download Resume
                </a>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* ── Sidebar ── */}
          <AnimatedSection className="flex flex-col gap-4 h-full" delay={160} direction="left">

            {/* Quick facts */}
            <GlassCard outerClassName="flex-1" className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-2.5">
                {[
                  { label: 'Focus', value: 'Backend & Systems' },
                  { label: 'Core Stack', value: 'PHP · Python · SQL' },
                  { label: 'Databases', value: 'MSSQL · PostgreSQL' },
                  { label: 'Experience', value: '9+ years' },
                  { label: 'Domain', value: 'Telecom & Enterprise' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-2">
                    <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">{label}</span>
                    <Badge variant="mono" size="sm">{value}</Badge>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Strengths as badges */}
            <GlassCard outerClassName="shrink-0" className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                Strengths
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {strengths.map(s => (
                  <Badge key={s} variant="indigo" size="sm">{s}</Badge>
                ))}
              </div>
            </GlassCard>

          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
