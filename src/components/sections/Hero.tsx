import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BorderGlowCard } from '@/components/ui/BorderGlowCard'
import { StarField } from '@/components/ui/StarField'
import { useCounter } from '@/hooks/useCounter'
import { personal, stats } from '@/data/resume'

function StatPill({
  label, value, suffix, prefix = '', delay,
}: {
  label: string; value: number; suffix: string; prefix?: string; delay: number
}) {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(value, 1400, started)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-2xl font-bold font-mono text-gradient tabular-nums leading-none">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center leading-tight">{label}</span>
    </div>
  )
}

function ProfilePhoto() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ambient glow */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)',
        }}
      />

      {/* Orbit ring — decorative */}
      <div
        className="absolute rounded-full border border-indigo-500/15 pointer-events-none"
        style={{ width: 310, height: 310 }}
      >
        {/* Orbit dot */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-indigo-400/60 -top-1.5 left-1/2 -translate-x-1/2 animate-orbit"
          style={{ transformOrigin: '50% 155px' }}
        />
      </div>

      <div
        className="absolute rounded-full border border-indigo-400/8 pointer-events-none"
        style={{ width: 360, height: 360 }}
      />

      {/* Photo with gradient ring */}
      <div
        className="relative rounded-full p-[3px] animate-float"
        style={{
          background: 'conic-gradient(from 180deg, #6366f1, #3b82f6, #8b5cf6, #6366f1)',
          width: 240,
          height: 240,
          boxShadow: '0 0 0 1px rgba(99,102,241,0.2), 0 20px 60px rgba(0,0,0,0.45)',
        }}
      >
        {/* Inner border spacing */}
        <div className="w-full h-full rounded-full p-[2px] bg-dark-base/80">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Marco Montilla"
            className="w-full h-full rounded-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>

      {/* Floating name tag */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2 whitespace-nowrap"
        style={{ animation: 'float 7s ease-in-out 1s infinite' }}
      >
        <p className="text-xs font-mono text-slate-600 dark:text-slate-300 text-center">
          <span className="text-indigo-500 dark:text-indigo-400">@</span>marcomontilla
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">

      {/* ── Background layers ── */}
      {/* Deep space gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.08) 0%, transparent 50%)',
        }}
      />
      {/* Star field */}
      <StarField count={100} />
      {/* Star map grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60 dark:opacity-40" />
      {/* Nebula orbs */}
      <div className="orb w-[480px] h-[480px] -top-32 -left-24 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', opacity: 1 }} />
      <div className="orb w-[380px] h-[380px] -bottom-24 -right-16 animate-float-delayed"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)', opacity: 1 }} />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text content */}
          <div className="order-2 lg:order-1">

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-7
                bg-emerald-50 text-emerald-700 border border-emerald-200
                dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
              style={{ opacity: 0, animation: 'fadeIn 0.6s ease 0.1s forwards' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {personal.availabilityNote}
            </div>

            {/* Headline */}
            <div style={{ opacity: 0, animation: 'fadeIn 0.65s ease 0.25s forwards' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tight text-slate-900 dark:text-white leading-[0.95]">
                Marco
                <br />
                <span className="text-gradient">Montilla</span>
              </h1>
            </div>

            {/* Role */}
            <div style={{ opacity: 0, animation: 'fadeIn 0.65s ease 0.4s forwards' }}>
              <p className="mt-4 text-base font-mono font-medium text-slate-500 dark:text-slate-400">
                {personal.titleHighlight}{' '}
                <span className="text-indigo-500 dark:text-indigo-400">{personal.title}</span>
              </p>
            </div>

            {/* Tagline */}
            <div style={{ opacity: 0, animation: 'fadeIn 0.65s ease 0.52s forwards' }}>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                {personal.tagline}
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3 mt-8"
              style={{ opacity: 0, animation: 'fadeIn 0.65s ease 0.65s forwards' }}
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View my work
              </Button>

              <a
                href={`${import.meta.env.BASE_URL}Marco_Resume.pdf`}
                download="Marco_Resume.pdf"
                className={[
                  'inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-xl',
                  'bg-white/10 dark:bg-white/[0.06]',
                  'hover:bg-white/20 dark:hover:bg-white/[0.1]',
                  'text-slate-800 dark:text-slate-200',
                  'border border-slate-200/60 dark:border-white/[0.1]',
                  'backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5',
                ].join(' ')}
              >
                <Download size={15} />
                Download CV
              </a>
            </div>

            {/* Social + location */}
            <div
              className="flex items-center gap-2 mt-7"
              style={{ opacity: 0, animation: 'fadeIn 0.65s ease 0.78s forwards' }}
            >
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center glass text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
              <div className="h-5 w-px bg-slate-200 dark:bg-white/[0.08] mx-1" />
              <span className="text-xs text-slate-400 font-mono">{personal.location}</span>
            </div>
          </div>

          {/* Right — Profile photo */}
          <div
            className="order-1 lg:order-2 flex justify-center"
            style={{ opacity: 0, animation: 'fadeIn 0.9s ease 0.35s forwards' }}
          >
            <ProfilePhoto />
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3"
          style={{ opacity: 0, animation: 'fadeIn 0.7s ease 0.9s forwards' }}
        >
          {stats.map((stat, i) => (
            <BorderGlowCard
              key={stat.label}
              borderRadius={16}
              glowRadius={28}
              innerClassName="px-4 py-4 text-center"
            >
              <StatPill
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                delay={1000 + i * 120}
              />
            </BorderGlowCard>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
        style={{ opacity: 0, animation: 'fadeIn 0.6s ease 1.4s forwards' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={15} className="animate-bounce" />
      </button>
    </section>
  )
}
