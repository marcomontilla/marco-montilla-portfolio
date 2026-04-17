import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personal } from '@/data/resume'
import { useLanguage } from '@/contexts/LanguageContext'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdayegod'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

function InputField({
  label, id, value, onChange, type = 'text', placeholder, required, asterisk,
}: {
  label: string; id: string; value: string
  onChange: (v: string) => void; type?: string
  placeholder?: string; required?: boolean; asterisk?: string
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-slate-600 dark:text-slate-400">
        {label}
        {required && <span className="text-zulia-400 ml-0.5">{asterisk ?? '*'}</span>}
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
          'focus:outline-none focus:ring-2 focus:ring-zulia-400/40 focus:border-zulia-400/50',
          'transition-all duration-200 backdrop-blur-sm',
        ].join(' ')}
      />
    </div>
  )
}

export function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const set = (field: keyof FormData) => (v: string) => setForm(f => ({ ...f, [field]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

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
      description: c.contactLabels.bestWay,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'marcomontilla',
      href: personal.github,
      description: c.contactLabels.code,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'marcomontilla',
      href: personal.linkedin,
      description: c.contactLabels.network,
    },
    {
      icon: MapPin,
      label: c.contactLabels.remote.includes('Disponible') ? 'Ubicación' : 'Location',
      value: personal.location,
      href: undefined,
      description: c.contactLabels.remote,
    },
  ]

  return (
    <section id="contact" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-dark-surface/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gradient-radial from-zulia-400/5 to-transparent pointer-events-none" />

      <div className="section-inner">
        <SectionHeader
          eyebrow={c.eyebrow}
          title={c.title}
          titleAccent={c.titleAccent}
          centered
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 max-w-5xl mx-auto">
          {/* Left: info */}
          <AnimatedSection delay={0} className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href, description }, i) => (
              <AnimatedSection key={label} delay={i * 60}>
                <GlassCard className="p-4 group" hover={!!href}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zulia-50 dark:bg-zulia-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-zulia-100 dark:group-hover:bg-zulia-400/20 transition-colors duration-200">
                      <Icon size={16} className="text-zulia-400 dark:text-zulia-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 dark:text-slate-500">{label} · {description}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-zulia-500 dark:hover:text-zulia-300 transition-colors truncate block"
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
                      {t.hero.personal.availabilityNote}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {c.availabilityNote2}
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
                    <h3 className="font-semibold text-slate-900 dark:text-white">{c.successTitle}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{c.successDesc}</p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-zulia-400 dark:text-zulia-300 hover:underline"
                  >
                    {c.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label={c.fields.name}
                      id="name"
                      value={form.name}
                      onChange={set('name')}
                      placeholder={c.placeholders.name}
                      required
                    />
                    <InputField
                      label={c.fields.email}
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder={c.placeholders.email}
                      required
                    />
                  </div>

                  <InputField
                    label={c.fields.subject}
                    id="subject"
                    value={form.subject}
                    onChange={set('subject')}
                    placeholder={c.placeholders.subject}
                    required
                  />

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                      {c.fields.message}<span className="text-zulia-400 ml-0.5">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => set('message')(e.target.value)}
                      placeholder={c.placeholders.message}
                      className={[
                        'w-full px-4 py-2.5 rounded-xl text-sm resize-none',
                        'bg-white/60 dark:bg-white/[0.04]',
                        'border border-slate-200/60 dark:border-white/[0.08]',
                        'text-slate-900 dark:text-slate-100',
                        'placeholder:text-slate-400 dark:placeholder:text-slate-600',
                        'focus:outline-none focus:ring-2 focus:ring-zulia-400/40 focus:border-zulia-400/50',
                        'transition-all duration-200 backdrop-blur-sm',
                      ].join(' ')}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 px-4 py-3 rounded-xl border border-red-200 dark:border-red-500/20">
                      <AlertCircle size={14} />
                      {c.errorMsg}
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        {c.sendingButton}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {c.sendButton}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                    {c.directEmail}{' '}
                    <a href={`mailto:${personal.email}`} className="text-zulia-400 dark:text-zulia-300 hover:underline">
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
