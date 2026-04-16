import { Construction, Lock, Wrench, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const plannedProjects = [
  {
    title: 'Telecom Observability Platform',
    description: 'Internal monitoring dashboard for distributed batch automation. FastAPI backend, React frontend, MSSQL/Postgres.',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Python'],
    status: 'Proprietary',
  },
  {
    title: 'Billing Pipeline Engine',
    description: 'Redesigned billing automation for multi-brand telecom. 70% runtime reduction, unattended production execution.',
    tags: ['PHP', 'SQL Server', 'Laravel'],
    status: 'Proprietary',
  },
  {
    title: 'Portfolio — This Site',
    description: 'Modern personal portfolio. React + Vite + TypeScript + Tailwind. What you\'re looking at right now.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    status: 'Live',
    live: true,
  },
  {
    title: 'Coming Soon',
    description: 'Open-source projects, tooling, and case studies are being documented and prepared for public release.',
    tags: [],
    status: 'Planned',
    placeholder: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-radial from-violet-500/6 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-radial from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="section-inner">
        <SectionHeader
          eyebrow="Projects"
          title="Work in"
          titleAccent="progress."
          centered
        />

        {/* Under construction banner */}
        <AnimatedSection delay={0} className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative glass-strong rounded-2xl p-8 text-center overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

              {/* Construction icon */}
              <div className="relative inline-flex">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25 mb-6 mx-auto">
                  <Construction size={28} className="text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 animate-pulse-slow" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Under Construction
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto text-sm">
                Most of my production work lives behind enterprise firewalls — telecom billing systems and internal platforms can't be open-sourced. I'm preparing case studies and open-source tooling for public release.
              </p>

              <div className="flex items-center justify-center gap-2 mt-6">
                <Badge variant="indigo">
                  <Wrench size={11} />
                  Preparing case studies
                </Badge>
                <Badge variant="violet">
                  <ArrowRight size={11} />
                  Coming Q2 2025
                </Badge>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project preview grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {plannedProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 80 + 100} className="flex flex-col">
              <GlassCard
                outerClassName="flex-1"
                className={`p-6 flex flex-col min-h-[200px] relative overflow-hidden ${project.placeholder ? 'border-dashed' : ''}`}
              >
                {/* Lock overlay for proprietary */}
                {project.status === 'Proprietary' && (
                  <div className="absolute top-4 right-4">
                    <div className="w-7 h-7 rounded-lg bg-slate-100/80 dark:bg-white/[0.06] flex items-center justify-center">
                      <Lock size={12} className="text-slate-400 dark:text-slate-500" />
                    </div>
                  </div>
                )}

                {/* Status badge */}
                <div className="mb-3">
                  <Badge
                    variant={
                      project.status === 'Live' ? 'success' :
                      project.status === 'Planned' ? 'default' :
                      'indigo'
                    }
                    size="sm"
                  >
                    {project.status === 'Live' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {project.status}
                  </Badge>
                </div>

                <h3 className={`font-semibold text-slate-900 dark:text-white mb-2 ${project.placeholder ? 'text-slate-400 dark:text-slate-600' : ''}`}>
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="mono" size="sm">{tag}</Badge>
                    ))}
                  </div>
                )}

                {project.placeholder && (
                  <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none">
                    <Construction size={40} className="text-slate-200 dark:text-slate-800" />
                  </div>
                )}
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={400} className="text-center mt-10">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Follow{' '}
            <a
              href="https://github.com/marcomontilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              @marcomontilla
            </a>
            {' '}on GitHub for updates.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
