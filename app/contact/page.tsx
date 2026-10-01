'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Mail, MapPin, MessageCircle, Clock3 } from 'lucide-react'
import { contactInfo, Footer, Header, SectionIntro } from '@/components/site'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="site-shell">
      <Header />
      <main className="route-content">
        <section className="simple-hero overflow-hidden animate-page-in">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-36 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:pb-24 lg:pt-40">
            <div>
              <span className="eyebrow">Let&apos;s connect</span>
              <h1 className="contact-display mt-5 max-w-3xl text-5xl font-black tracking-[-0.06em] text-[#10263f] md:text-7xl">
                Contact <span className="text-[#2999cb]">Us</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">We&apos;re here to help. Get in touch with the JH Cargo team.</p>
            </div>
            <div className="relative mx-auto w-full max-w-md animate-float">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#79c8e8]/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-[#10263f]/15">
                <Image src="/images/jh-cargo-about.png" alt="JH Cargo logistics team and cargo operations" width={700} height={520} className="h-64 w-full object-cover md:h-80" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad pt-0 animate-rise delay-100">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <SectionIntro eyebrow="Get in touch" title="Let&apos;s make your next shipment easier." text="Have a question about our services or need more information? Reach out and our team will be happy to help." />
              <div className="mt-9 grid gap-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div className="contact-info-card flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4" key={label}>
                    <div className="icon-box size-11 shrink-0"><Icon size={18} /></div>
                    <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-1 text-sm font-semibold text-[#10263f]">{value}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-[#10263f]/5 md:p-9">
              <p className="eyebrow">Send us a message</p>
              <h2 className="contact-display mt-3 text-3xl font-black tracking-tight text-[#10263f]">How can we help?</h2>
              {sent ? (
                <div className="mt-10 rounded-2xl bg-[#effbfe] p-8 text-center"><div className="mx-auto grid size-14 place-items-center rounded-full bg-[#79c8e8] text-[#10263f]"><Check /></div><h3 className="mt-5 text-xl font-bold text-[#10263f]">Message received</h3><p className="mt-2 text-sm leading-6 text-slate-600">Thanks for reaching out. Our team will get back to you soon.</p></div>
              ) : (
                <form onSubmit={submit} className="mt-7 grid gap-5">
                  <label className="grid gap-2 text-sm font-bold text-[#10263f]">Name<input required name="name" className="field" placeholder="Your name" /></label>
                  <label className="grid gap-2 text-sm font-bold text-[#10263f]">Email<input required type="email" name="email" className="field" placeholder="you@example.com" /></label>
                  <label className="grid gap-2 text-sm font-bold text-[#10263f]">Message<textarea required name="message" className="field min-h-32 resize-y" placeholder="Tell us how we can help" /></label>
                  <button className="button-primary justify-center" type="submit">Send message <ArrowRight size={17} /></button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section-pad pt-0 animate-rise delay-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-7"><SectionIntro eyebrow="Find us" title="JH Cargo, Dubai" text="Visit our office or use the map to plan your route." /></div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-[#10263f]/10">
              <iframe title="JH Cargo location in Dubai" src="https://www.google.com/maps?q=JH%20Cargo%2C%20Dubai%2C%20United%20Arab%20Emirates&output=embed" className="h-[340px] w-full border-0 md:h-[430px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
