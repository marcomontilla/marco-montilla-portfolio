import { BorderGlowCard } from './BorderGlowCard'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /** Applied to the outer .border-glow-card wrapper (e.g. "h-full", "flex-1") */
  outerClassName?: string
  hover?: boolean   // kept for API compat — BorderGlowCard handles hover natively
  glow?: boolean    // kept for API compat
  onClick?: () => void
  animated?: boolean
}

/**
 * GlassCard — wraps BorderGlowCard with site-palette defaults.
 * className goes to .border-glow-inner (the content container).
 * outerClassName goes to the outer .border-glow-card wrapper.
 * backgroundColor is resolved per-render from the current theme class on <html>.
 */
export function GlassCard({ children, className = '', outerClassName = '', onClick, animated = false }: GlassCardProps) {
  const isDark = typeof document !== 'undefined'
    && document.documentElement.classList.contains('dark')

  return (
    <BorderGlowCard
      backgroundColor={isDark ? '#0d1426' : '#f0f2f9'}
      className={outerClassName}
      innerClassName={`${className}${onClick ? ' cursor-pointer' : ''}`}
      animated={animated}
    >
      {onClick
        ? <div onClick={onClick} className="contents">{children}</div>
        : children
      }
    </BorderGlowCard>
  )
}

export function GlassCardStrong({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const isDark = typeof document !== 'undefined'
    && document.documentElement.classList.contains('dark')

  return (
    <BorderGlowCard
      backgroundColor={isDark ? '#0d1426' : '#f0f2f9'}
      innerClassName={className}
      glowIntensity={1.2}
      fillOpacity={0.55}
    >
      {children}
    </BorderGlowCard>
  )
}
