import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import {
  Cta,
  Footer,
  Header,
  Process,
  SectionIntro,
  Services,
  Values,
} from "@/components/site";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="route-content">
        <section className="hero-home">
          <Image
            src="/images/abuothero.jpeg"
            alt="Container ship and cargo operations at sea"
            fill
            priority
            className="object-cover hero-image"
          />
          <div className="hero-overlay" />
          <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-24 pt-36 lg:px-8 lg:pb-28">
            <div className="max-w-3xl">
              <p className="animate-rise text-sm font-bold uppercase tracking-[0.25em] text-[#a7e1f5]">
                China → Dubai sea cargo
              </p>
              <h1 className="animate-rise delay-100 mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">
                China → Dubai <span className="text-[#79c8e8]">Sea Cargo</span>{" "}
                & Logistics
              </h1>
              <h2 className="animate-rise delay-200 mt-6 text-xl font-semibold text-white md:text-2xl">
                Reliable Cargo Solutions from China to Dubai
              </h2>
              <p className="animate-rise delay-300 mt-4 max-w-2xl text-base leading-8 text-slate-200">
                From cargo consolidation and sea freight forwarding to JAFZA
                warehousing and final-mile delivery, JH Sea Cargo provides
                dependable logistics solutions designed around your business
                needs.
              </p>
              <div className="animate-rise delay-300 mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="button-primary">
                  Request a Shipping Quote <ArrowRight size={17} />
                </Link>
                <a href="#services" className="button-ghost">
                  Explore Our Services <ArrowDown size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionIntro
                eyebrow="About JH Sea Cargo"
                title="Your China-to-Dubai cargo partner."
                text="JH Sea Cargo Services Co. LLC is a Dubai-based cargo shipping and logistics company specializing in consolidation and freight forwarding services from China to the United Arab Emirates. Our experienced operations team manages key stages of the logistics journey, from origin coordination and sea freight to secure JAFZA warehousing and final-mile delivery within Dubai."
              />
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                We focus on making cargo movement simpler, more efficient and
                more dependable for businesses of every size.
              </p>
              <Link href="/about" className="button-outline mt-8">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="image-frame">
              <Image
                src="/images/jh-cargo-about.png"
                alt="Cargo operations at a modern logistics facility"
                width={800}
                height={600}
                className="aspect-[4/3] object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>
        <section id="services" className="bg-[#f5fbfd] section-pad">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionIntro
              eyebrow="Our services"
              title="Logistics solutions built around your cargo"
              text="From consolidation at origin to delivery in Dubai, we coordinate the essential stages of your cargo journey through one dependable logistics partner."
            />
            <div className="mt-10">
              <Services />
            </div>
          </div>
        </section>
        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionIntro
              eyebrow="Why choose us"
              title="A logistics partner focused on what matters"
              text="Professional support, practical solutions and clear communication at every stage of the journey."
            />

            <div className="mt-10">
              <Values />
            </div>
          </div>
        </section>
        <section className="section-pad bg-[#f5fbfd]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionIntro
              eyebrow="Our process"
              title="From China to Dubai, handled with clarity"
              text="A coordinated cargo journey with clear steps, dependable communication and professional handling from origin to destination."
            />

            <div className="mt-10">
              <Process />
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
