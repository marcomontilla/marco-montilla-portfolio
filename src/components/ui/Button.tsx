import { forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  as?: 'a'
  href?: string
  target?: string
  rel?: string
}

const variants: Record<Variant, string> = {
  primary: [
    'bg-gradient-to-r from-zulia-400 to-zulia-600',
    'hover:from-zulia-500 hover:to-zulia-700',
    'text-white shadow-lg shadow-zulia-400/25',
    'hover:shadow-xl hover:shadow-zulia-400/30',
    'hover:-translate-y-0.5',
  ].join(' '),

  secondary: [
    'bg-white/10 dark:bg-white/[0.06]',
    'hover:bg-white/20 dark:hover:bg-white/[0.1]',
    'text-slate-800 dark:text-slate-200',
    'border border-slate-200/60 dark:border-white/[0.1]',
    'backdrop-blur-sm',
    'hover:-translate-y-0.5',
  ].join(' '),

  ghost: [
    'text-slate-600 dark:text-slate-400',
    'hover:text-slate-900 dark:hover:text-white',
    'hover:bg-slate-100 dark:hover:bg-white/[0.06]',
  ].join(' '),

  outline: [
    'border border-zulia-400/50 dark:border-zulia-300/40',
    'text-zulia-500 dark:text-zulia-300',
    'hover:bg-zulia-50 dark:hover:bg-zulia-400/10',
    'hover:border-zulia-400 dark:hover:border-zulia-300',
    'hover:-translate-y-0.5',
  ].join(' '),
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', as: Tag, href, target, rel, children, ...props }, ref) => {
    const base = [
      'inline-flex items-center justify-center font-medium rounded-xl',
      'transition-all duration-200 cursor-pointer select-none',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zulia-400 focus-visible:ring-offset-2',
      'dark:focus-visible:ring-offset-dark-base',
      variants[variant],
      sizes[size],
      className,
    ].join(' ')

    if (Tag === 'a' && href) {
      return (
        <a href={href} target={target} rel={rel} className={base}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={base} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
