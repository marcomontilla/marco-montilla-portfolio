import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { navLinks, personal } from '@/data/resume'

export function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  const sectionIds = navLinks.map(l => l.href.replace('#', ''))
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setHidden(y > lastY + 5 && y > 80)
      if (y < lastY - 5 || y < 80) setHidden(false)
      setLastY(y)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass border-b border-slate-200/50 dark:border-white/[0.06]' : 'bg-transparent',
          hidden ? '-translate-y-full' : 'translate-y-0',
        ].join(' ')}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-200">
              <span className="text-white font-bold text-sm font-mono">M</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white text-sm hidden sm:block">
              Marco<span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    className={[
                      'nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                        : 'hover:bg-slate-100 dark:hover:bg-white/[0.06]',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={[
                'w-9 h-9 rounded-xl flex items-center justify-center',
                'text-slate-500 dark:text-slate-400',
                'hover:text-slate-900 dark:hover:text-white',
                'hover:bg-slate-100 dark:hover:bg-white/[0.08]',
                'transition-all duration-200',
              ].join(' ')}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Download CV */}
            <a
              href={`${import.meta.env.BASE_URL}Marco_Resume.pdf`}
              download="Marco_Resume.pdf"
              className={[
                'hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium',
                'text-slate-600 dark:text-slate-300',
                'border border-slate-200/80 dark:border-white/[0.1]',
                'hover:border-indigo-300 dark:hover:border-indigo-500/40',
                'hover:text-indigo-600 dark:hover:text-indigo-400',
                'hover:bg-indigo-50 dark:hover:bg-indigo-500/10',
                'transition-all duration-200',
              ].join(' ')}
            >
              <Download size={13} />
              CV
            </a>

            {/* Hire me CTA */}
            <a
              href={`mailto:${personal.email}`}
              className={[
                'hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium',
                'bg-gradient-to-r from-indigo-500 to-violet-600 text-white',
                'hover:from-indigo-600 hover:to-violet-700',
                'shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30',
                'transition-all duration-200 hover:-translate-y-0.5',
              ].join(' ')}
            >
              Hire me
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="absolute top-16 left-4 right-4 glass-strong rounded-2xl p-4 animate-slide-down"
            onClick={e => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const isActive = active === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                      className={[
                        'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.06]',
                      ].join(' ')}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-200/50 dark:border-white/[0.06] flex flex-col gap-2">
              <a
                href="/Marco_Resume.pdf"
                download="Marco_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
