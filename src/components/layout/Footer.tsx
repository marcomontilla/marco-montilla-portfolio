import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '@/data/resume'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/50 dark:border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-mono">M</span>
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Marco Montilla
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1">
            {[
              { href: personal.github, icon: Github, label: 'GitHub' },
              { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {year} Marco Montilla. Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}
