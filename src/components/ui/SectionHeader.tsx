import { AnimatedSection } from './AnimatedSection'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  titleAccent?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, titleAccent, description, centered = false }: SectionHeaderProps) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-8 bg-gradient-to-r from-zulia-400 to-zulia-600" />
        <span className="text-xs font-mono font-medium tracking-widest uppercase text-zulia-400 dark:text-zulia-300">
          {eyebrow}
        </span>
        <div className="h-px w-8 bg-gradient-to-r from-gold-400 to-transparent" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}{' '}
        {titleAccent && (
          <span className="text-gradient">{titleAccent}</span>
        )}
      </h2>

      {description && (
        <p className={`mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}
