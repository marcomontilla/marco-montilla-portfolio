import { MapPin, BookOpen, Download } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personal } from '@/data/resume'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="section bg-slate-50/50 dark:bg-dark-surface/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-zulia-400/5 to-transparent pointer-events-none" />

      <div className="section-inner">
        <SectionHeader
          eyebrow={a.eyebrow}
          title={a.title}
          titleAccent={a.titleAccent}
        />

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">

          {/* Main bio card */}
          <AnimatedSection className="lg:col-span-2 flex flex-col" delay={80}>
            <GlassCard outerClassName="flex-1" className="p-7 flex flex-col">

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {a.bio}
              </p>

              {/* Achievement bullets */}
              <ul className="mt-6 space-y-3">
                {a.achievements.map(({ metric, detail }) => (
                  <li key={metric} className="flex items-start gap-3">
                    <span className="font-mono font-bold text-sm text-zulia-400 dark:text-zulia-300 w-16 flex-shrink-0 pt-0.5 tabular-nums">
                      {metric}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Footer row */}
              <div className="mt-auto pt-5 border-t border-slate-200/50 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin size={12} className="text-zulia-400" />
                    {personal.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <BookOpen size={12} className="text-zulia-400" />
                    {a.education.degree}
                  </div>
                </div>

                <a
                  href={`${import.meta.env.BASE_URL}Marco_Resume.pdf`}
                  download="Marco_Resume.pdf"
                  className={[
                    'ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium',
                    'bg-zulia-50 text-zulia-600 border border-zulia-200',
                    'dark:bg-zulia-400/10 dark:text-zulia-200 dark:border-zulia-400/20',
                    'hover:bg-zulia-100 dark:hover:bg-zulia-400/20',
                    'transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0',
                  ].join(' ')}
                >
                  <Download size={12} />
                  {a.downloadResume}
                </a>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection className="flex flex-col gap-4 h-full" delay={160} direction="left">

            {/* Quick facts */}
            <GlassCard outerClassName="flex-1" className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                {a.quickFactsLabel}
              </h3>
              <div className="space-y-2.5">
                {a.quickFacts.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-2">
                    <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">{label}</span>
                    <Badge variant="mono" size="sm">{value}</Badge>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Strengths */}
            <GlassCard outerClassName="shrink-0" className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                {a.strengthsLabel}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {a.strengths.map(s => (
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
