import { Code2, Server, Database, Cpu, Monitor, GitBranch } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { skills } from '@/data/resume'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Server,
  Database,
  Cpu,
  Monitor,
  GitBranch,
}

const categoryColors: Record<string, { icon: string; tag: string; glow: string }> = {
  Languages: {
    icon: 'text-blue-500 dark:text-blue-400',
    tag: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    glow: 'group-hover:shadow-blue-500/10',
  },
  'Backend & APIs': {
    icon: 'text-indigo-500 dark:text-indigo-400',
    tag: 'bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  'Databases & Data': {
    icon: 'text-violet-500 dark:text-violet-400',
    tag: 'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20',
    glow: 'group-hover:shadow-violet-500/10',
  },
  'Systems & Infrastructure': {
    icon: 'text-cyan-500 dark:text-cyan-400',
    tag: 'bg-cyan-50 text-cyan-700 border-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  'Frontend (Supporting)': {
    icon: 'text-emerald-500 dark:text-emerald-400',
    tag: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  'Engineering Practices': {
    icon: 'text-amber-500 dark:text-amber-400',
    tag: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20',
    glow: 'group-hover:shadow-amber-500/10',
  },
}

export function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />

      <div className="section-inner">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I reach for"
          titleAccent="in production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code2
            const colors = categoryColors[skill.category] ?? categoryColors['Languages']

            return (
              <AnimatedSection key={skill.category} delay={i * 80} direction="up" className="flex flex-col">
                <GlassCard
                  hover
                  outerClassName="flex-1"
                  className={`p-6 h-full group transition-all duration-300 hover:shadow-glass-lg ${colors.glow}`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-xl bg-slate-100/80 dark:bg-white/[0.06] ${colors.icon} flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">
                        {skill.category}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map(item => (
                      <span
                        key={item}
                        className={`inline-flex items-center px-2.5 py-1 text-xs font-medium font-mono rounded-lg border transition-transform duration-150 hover:scale-105 ${colors.tag}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
