interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'indigo' | 'violet' | 'mono'
  size?: 'sm' | 'md'
  className?: string
}

const variants = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60',
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20',
  indigo: 'bg-zulia-50 text-zulia-600 dark:bg-zulia-400/10 dark:text-zulia-200 border border-zulia-100 dark:border-zulia-400/20',
  violet: 'bg-gold-50 text-gold-700 dark:bg-gold-400/10 dark:text-gold-300 border border-gold-100 dark:border-gold-400/20',
  mono: 'bg-slate-900/5 text-slate-800 dark:bg-white/[0.06] dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] font-mono',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
}

export function Badge({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-lg ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}
