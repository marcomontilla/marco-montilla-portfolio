import { useState } from 'react'
import { MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { experience, education } from '@/data/resume'

function ExperienceCard({ item, index }: { item: typeof experience[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <AnimatedSection delay={index * 100} direction="up">
      <GlassCard className="p-0">
        <div
          className="p-6 cursor-pointer select-none"
          onClick={() => setExpanded(v => !v)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Company + current badge */}
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {item.company}
                </span>
                {item.current && (
                  <Badge variant="success" size="sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Current
                  </Badge>
                )}
              </div>

              {/* Role */}
              <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">
                {item.title}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Expand toggle */}
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-200 flex-shrink-0 mt-0.5"
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Description always visible */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Expandable content */}
        <div
          className="overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: expanded ? '2000px' : '0' }}
        >
          <div className="px-6 pb-6 border-t border-slate-200/50 dark:border-white/[0.05]">
            {/* Highlights */}
            <ul className="mt-5 space-y-3">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200/40 dark:border-white/[0.04]">
              {item.tags.map(tag => (
                <Badge key={tag} variant="mono" size="sm">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </AnimatedSection>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section bg-slate-50/50 dark:bg-dark-surface/30 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-radial from-indigo-500/5 to-transparent pointer-events-none -translate-y-1/2" />

      <div className="section-inner">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've built"
          titleAccent="real systems."
        />

        {/* Highlight row */}
        <AnimatedSection delay={80} className="grid sm:grid-cols-3 gap-4 mb-8">
          <GlassCard className="p-5">
            <div className="text-xs font-mono font-medium tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">
              Education
            </div>
            <p className="font-semibold text-slate-900 dark:text-white text-sm">
              {education.degree}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {education.institution}
            </p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="text-xs font-mono font-medium tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">
              Career focus
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Legacy modernization, data-intensive pipelines, and systems where reliability is non-negotiable.
            </p>
          </GlassCard>

          <a
            href="https://github.com/marcomontilla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 glass rounded-2xl hover:shadow-glass-lg hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div>
              <div className="text-xs font-mono font-medium tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">
                GitHub
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                marcomontilla
              </span>
            </div>
            <ExternalLink size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
          </a>
        </AnimatedSection>

        {/* Timeline */}
        <div className="space-y-4">
          {experience.map((item, i) => (
            <ExperienceCard key={item.company + item.period} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
