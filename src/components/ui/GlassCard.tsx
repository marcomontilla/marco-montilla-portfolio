import { useState, useEffect } from 'react'
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

function useIsDark() {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  return isDark
}

/**
 * GlassCard — wraps BorderGlowCard with site-palette defaults.
 * className goes to .border-glow-inner (the content container).
 * outerClassName goes to the outer .border-glow-card wrapper.
 * Theme is reactive — updates when the dark class changes on <html>.
 */
export function GlassCard({ children, className = '', outerClassName = '', onClick, animated = false }: GlassCardProps) {
  const isDark = useIsDark()

  return (
    <BorderGlowCard
      backgroundColor={isDark ? '#0d1426' : '#ffffff'}
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
  const isDark = useIsDark()

  return (
    <BorderGlowCard
      backgroundColor={isDark ? '#0d1426' : '#ffffff'}
      innerClassName={className}
      glowIntensity={1.2}
      fillOpacity={0.55}
    >
      {children}
    </BorderGlowCard>
  )
}
