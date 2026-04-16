import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personal } from '@/data/resume'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

// Replace 'YOUR_FORM_ID' with your Formspree endpoint ID from formspree.io (free)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdayegod'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

function InputField({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-slate-600 dark:text-slate-400">
        {label}
        {required && <span className="text-indigo-500 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={[
          'w-full px-4 py-2.5 rounded-xl text-sm',
          'bg-white/60 dark:bg-white/[0.04]',
          'border border-slate-200/60 dark:border-white/[0.08]',
          'text-slate-900 dark:text-slate-100',
          'placeholder:text-slate-400 dark:placeholder:text-slate-600',
          'focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50',
          'transition-all duration-200',
          'backdrop-blur-sm',
        ].join(' ')}
      />
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const set = (field: keyof FormData) => (v: string) => setForm(f => ({ ...f, [field]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // If no Formspree ID configured, simulate success for demo
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      await new Promise(r => setTimeout(r, 1200))
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      return
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: 'Best way to reach me',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'marcomontilla',
      href: personal.github,
      description: 'Code and projects',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'marcomontilla',
      href: personal.linkedin,
      description: 'Professional network',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: undefined,
      description: 'Open to remote',
    },
  ]

  return (
    <section id="contact" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-dark-surface/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gradient-radial from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="section-inner">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build"
          titleAccent="something solid."
          centered
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 max-w-5xl mx-auto">
          {/* Left: info */}
          <AnimatedSection delay={0} className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href, description }, i) => (
              <AnimatedSection key={label} delay={i * 60}>
                <GlassCard className="p-4 group" hover={!!href}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors duration-200">
                      <Icon size={16} className="text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 dark:text-slate-500">{label} · {description}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{value}</span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}

            {/* Availability note */}
            <AnimatedSection delay={300}>
              <GlassCard className="p-5">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {personal.availabilityNote}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Particularly interested in senior or lead backend engineering roles where system design and reliability matter.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={150} direction="left">
            <GlassCard className="p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Message sent!</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      I'll get back to you within 24–48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Name"
                      id="name"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your name"
                      required
                    />
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <InputField
                    label="Subject"
                    id="subject"
                    value={form.subject}
                    onChange={set('subject')}
                    placeholder="What's this about?"
                    required
                  />

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                      Message<span className="text-indigo-500 ml-0.5">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => set('message')(e.target.value)}
                      placeholder="Tell me about the project, role, or problem you're working through..."
                      className={[
                        'w-full px-4 py-2.5 rounded-xl text-sm resize-none',
                        'bg-white/60 dark:bg-white/[0.04]',
                        'border border-slate-200/60 dark:border-white/[0.08]',
                        'text-slate-900 dark:text-slate-100',
                        'placeholder:text-slate-400 dark:placeholder:text-slate-600',
                        'focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50',
                        'transition-all duration-200 backdrop-blur-sm',
                      ].join(' ')}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 px-4 py-3 rounded-xl border border-red-200 dark:border-red-500/20">
                      <AlertCircle size={14} />
                      Something went wrong. Try emailing me directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                    Or email directly:{' '}
                    <a href={`mailto:${personal.email}`} className="text-indigo-500 dark:text-indigo-400 hover:underline">
                      {personal.email}
                    </a>
                  </p>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
