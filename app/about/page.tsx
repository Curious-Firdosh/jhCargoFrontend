import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Cta,
  Footer,
  Header,
  Process,
  SectionIntro,
  Values,
} from "@/components/site";

export const metadata: Metadata = {
  title: 'About JH Sea Cargo',
  description:
    'Learn about JH Sea Cargo, a Dubai logistics company providing China to Dubai sea freight, consolidation, warehousing, and final-mile delivery.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="route-content">
        <section className="inner-hero">
          <Image
            src="/images/abut.jpeg"
            alt="Container ship and port logistics operations"
            fill
            priority
            className="object-cover hero-image"
          />
          <div className="hero-overlay" />
          <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-8">
            <span className="eyebrow text-[#a7e1f5]">About JH Sea Cargo</span>
            <h1 className="mt-5 max-w-3xl text-5xl font-extrabold tracking-[-0.05em] text-white md:text-7xl">
              Connecting China to Dubai through{" "}
              <span className="text-[#79c8e8]">reliable logistics.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A dependable cargo partner for consolidation, sea freight, JAFZA
              warehousing and delivery.
            </p>
          </div>
        </section>
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div>
              <SectionIntro
                eyebrow="Who we are"
                title="A practical partner for every stage of your cargo journey."
                text="JH Sea Cargo Services Co. LLC is a Dubai-based cargo shipping and logistics company specializing in consolidation and freight forwarding services from China to the United Arab Emirates."
              />
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Our experienced operations team manages key stages of the
                logistics journey, from origin coordination and sea freight to
                secure JAFZA warehousing and final-mile delivery within Dubai.
                We focus on making cargo movement simpler, more efficient and
                more dependable for businesses of every size.
              </p>
            </div>
            <div className="image-frame">
              <Image
                src="/images/jh-cargo-about.png"
                alt="Cargo handling and containers at a logistics facility"
                width={800}
                height={600}
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#f5fbfd] section-pad">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionIntro
              eyebrow="Our approach"
              title="One connected logistics journey"
              text="We coordinate the essential stages between origin and destination so your cargo can move with greater clarity."
            />
            <div className="mt-12">
              <Process />
            </div>
          </div>
        </section>
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <SectionIntro
                eyebrow="What guides us"
                title="Service built on dependable principles."
                text="Our approach is practical, transparent and shaped around the requirements of the businesses we support."
              />
            </div>
            <Values about />
          </div>
        </section>
        <section className="bg-[#0c2035] section-pad text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="max-w-3xl">
              <span className="eyebrow text-[#a7e1f5]">Our core</span>

              <h2 className="section-title mt-4 text-white-[0.85]">
                Built on trust. Driven by better logistics.
              </h2>
            </div>

            {/* Mission + Vision */}
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
              {/* Mission */}
              <article
                className="
          group relative overflow-hidden rounded-2xl
          border border-white/10
          bg-white/[0.045]
          p-6 sm:p-8 lg:p-10
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#a7e1f5]/30
          hover:bg-white/[0.07]
        "
              >
                {/* Decorative glow */}
                <div
                  className="
            pointer-events-none absolute -right-16 -top-16
            h-40 w-40 rounded-full
            bg-[#a7e1f5]/10 blur-3xl
            transition-opacity duration-300
            group-hover:opacity-100
          "
                />

                <div className="relative">
                  <span className="eyebrow text-[#a7e1f5]">Our Mission</span>

                  <div className="mt-6 h-px w-12 bg-[#a7e1f5]/50" />

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                    To provide trusted, cost-effective and seamless cargo
                    shipping and logistics solutions that empower businesses to
                    connect across borders.
                  </p>
                </div>
              </article>

              {/* Vision */}
              <article
                className="
          group relative overflow-hidden rounded-2xl
          border border-[#0c2035]/10
          bg-[#f5fbfd]
          p-6 sm:p-8 lg:p-10
          text-[#0c2035]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        "
              >
                {/* Decorative glow */}
                <div
                  className="
            pointer-events-none absolute -right-16 -top-16
            h-40 w-40 rounded-full
            bg-[#a7e1f5]/40 blur-3xl
          "
                />

                <div className="relative">
                  <span className="eyebrow text-[#0c2035]/60">Our Vision</span>

                  <div className="mt-6 h-px w-12 bg-[#0c2035]/20" />

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#0c2035]/70 sm:text-base sm:leading-8">
                    To become a leading freight forwarding and logistics service
                    provider in the UAE, recognized for operational excellence,
                    customer service and innovative supply chain solutions.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="bg-[#f5fbfd] section-pad">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionIntro
              eyebrow="Strategic partnerships"
              title="Built on trusted logistics relationships."
              text="We work with carefully selected partners across key logistics hubs to strengthen origin coordination, warehousing, and regional service capabilities."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* China Partner */}
              <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                      Origin Logistics
                    </span>

                    <span className="text-sm font-medium text-slate-400">
                      01
                    </span>
                  </div>

                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl">
                      🇨🇳
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        China
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Origin coordination & cargo support
                      </p>
                    </div>
                  </div>

                  <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-slate-900">
                    Shaoxing High Rise Logistics Co., LTD
                  </h3>

                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
                    Supporting our China-side operations with origin
                    coordination, cargo handling, and logistics support across
                    the supply chain.
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Partnership focus</span>
                      <span className="font-medium text-slate-700">
                        Origin Operations
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Dubai Partner */}
              <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-amber-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                      Warehousing
                    </span>

                    <span className="text-sm font-medium text-slate-400">
                      02
                    </span>
                  </div>

                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl">
                      🇦🇪
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Dubai, UAE
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Storage & cargo management
                      </p>
                    </div>
                  </div>

                  <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-slate-900">
                    ZAFCO Group Holdings Ltd
                  </h3>

                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
                    Supporting our regional operations with flexible
                    warehousing, cargo storage, and handling solutions in Dubai.
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Partnership focus</span>
                      <span className="font-medium text-slate-700">
                        Warehousing & Storage
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Bottom statement */}
            <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  One network. Multiple logistics capabilities.
                </p>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Our partner network extends our operational capabilities
                  across origin, storage, and destination markets.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Trusted network
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
