import { useState } from 'react'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import { CONTACT_LINKS } from '../data/portfolio'

function ContactLink({ icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3.5 text-text-2 hover:text-text-1 bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] hover:bg-surface-2 rounded-[10px] px-[18px] py-4 text-sm transition-all duration-200 no-underline"
    >
      <span className="text-base">{icon}</span>
      <div>
        <div className="text-[12px] text-text-3 mb-0.5">{label}</div>
        <div>{value}</div>
      </div>
    </a>
  )
}

function FormInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] text-text-2">{label}</label>
      <input
        className="bg-surface-1 border border-white/[0.07] focus:border-blue-a rounded-lg px-3.5 py-3 text-text-1 text-sm placeholder:text-text-3 transition-colors duration-200 font-sans"
        {...props}
      />
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to your preferred backend/service
    alert('Message sent! (connect to your backend)')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormInput
        label="Name"
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={set('name')}
        required
      />
      <FormInput
        label="Email"
        type="email"
        placeholder="you@company.com"
        value={form.email}
        onChange={set('email')}
        required
      />
      <FormInput
        label="Project type"
        type="text"
        placeholder="e.g. Full stack app, API, Consulting"
        value={form.project}
        onChange={set('project')}
      />

      {/* Textarea */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] text-text-2">Message</label>
        <textarea
          className="bg-surface-1 border border-white/[0.07] focus:border-blue-a rounded-lg px-3.5 py-3 text-text-1 text-sm placeholder:text-text-3 transition-colors duration-200 resize-y min-h-[120px] font-sans"
          placeholder="Tell me about what you're building and what kind of help you need…"
          value={form.message}
          onChange={set('message')}
          required
        />
      </div>

      <button
        type="submit"
        className="self-start bg-blue-a hover:opacity-85 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-opacity duration-200 cursor-pointer border-0"
      >
        Send Message
      </button>
    </form>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading
            title="Let's build something<br>together."
            sub="Whether you need a full stack engineer, a backend specialist, or a technical co-founder — let's talk about what you're building."
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 mt-14">

          {/* Left – links */}
          <FadeUp delay={0.1}>
            <p className="font-mono text-[13px] text-text-3 mb-4">
              // Reach me directly
            </p>
            <div className="flex flex-col gap-3.5">
              {CONTACT_LINKS.map((l) => (
                <ContactLink key={l.label} {...l} />
              ))}
            </div>
          </FadeUp>

          {/* Right – form */}
          <FadeUp delay={0.2}>
            <p className="font-mono text-[13px] text-text-3 mb-4">
              // Send a message
            </p>
            <ContactForm />
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
