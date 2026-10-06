import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Compass, Network, Ship, TrendingUp } from "lucide-react";
import { Footer, Header } from "@/components/site";
import OurJourneySection from "@/components/OurJourneySection";

export const metadata: Metadata = {
  title: "About JH Sea Cargo | Reliable Logistics from Dubai",
  description:
    "Learn about JH Sea Cargo Services Co. LLC, our journey, operational approach and commitment to reliable logistics solutions from Dubai.",
  alternates: { canonical: "/about" },
};

const milestones = [
  {
    number: "01",
    eyebrow: "The foundation",
    title: "Learning the Business from the Inside",
    text: "Our journey began with hands-on involvement in cargo coordination, customer requirements and logistics operations, giving us practical experience across the industry.",
    icon: Ship,
    image: true,
  },
  {
    number: "02",
    eyebrow: "Building connections",
    title: "Growing Through Partnerships",
    text: "Early collaborations helped us develop valuable industry relationships and build a stronger understanding of the logistics network connecting origin and destination.",
    icon: Network,
  },
  {
    number: "03",
    eyebrow: "Finding our direction",
    title: "A Clearer Vision for JH Sea Cargo",
    text: "With experience came clarity. We recognized the importance of greater operational control, consistent service standards and stronger ownership of the customer experience.",
    icon: Compass,
  },
  {
    number: "04",
    eyebrow: "12 July 2024",
    title: "JH Sea Cargo Begins Its Independent Journey",
    text: "JH Sea Cargo Services Co. LLC officially commenced its independent operations, establishing its own identity and taking greater responsibility for the services it provides.",
    icon: Ship,
    featured: true,
  },
  {
    number: "05",
    eyebrow: "Moving forward",
    title: "Building for the Long Term",
    text: "Today, we continue to strengthen our operations, develop strategic partnerships and build a logistics company focused on reliability, relationships and sustainable growth.",
    icon: TrendingUp,
  },
];

const approach = [
  {
    number: "01",
    label: "Understand",
    text: "Every customer and shipment has different requirements. We begin by understanding what matters most to the business and the cargo.",
  },
  {
    number: "02",
    label: "Coordinate",
    text: "We bring together the people, information and logistics partners required to keep the process organized and moving.",
  },
  {
    number: "03",
    label: "Improve",
    text: "We continuously look for ways to improve efficiency, communication and the overall customer experience.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="route-content">
        <section className="about-hero relative flex min-h-[78vh] items-end overflow-hidden bg-[#0c2035] md:min-h-[88vh]">
          <Image
            src="/images/about-hero.jpg"
            alt="Container port at sea, representing JH Sea Cargo's logistics operations"
            fill
            priority
            sizes="100vw"
            className="about-hero-image object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b2e]/90 via-[#071b2e]/55 to-[#071b2e]/10" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-8 lg:pb-24">
            <div className="max-w-4xl">
              <span className="eyebrow text-[#a7e1f5]">About JH Sea Cargo</span>
              <h1 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem]">
                Built Through Experience.
                <br />
                <span className="text-[#a7e1f5]">Driven by Better Logistics.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                The People, Purpose and Journey Behind JH Sea Cargo
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
                JH Sea Cargo Services Co. LLC was built with a simple belief: logistics works best when reliability, accountability and strong relationships come together. From our base in Dubai, we continue to build our capabilities, strengthen our partnerships and create a more dependable experience for the businesses we serve.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="button-primary">Get a Quote <ArrowRight size={17} /></Link>
                <a href="#who-we-are" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 px-5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                  Discover our story <ArrowDown size={16} />
                </a>
              </div>
            </div>
          </div>
          <span className="pointer-events-none absolute bottom-8 right-8 hidden text-[10px] font-bold uppercase tracking-[.3em] text-white/60 md:block">Dubai · United Arab Emirates</span>
        </section>

        <section id="who-we-are" className="section-pad scroll-mt-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:px-8">
            <div className="max-w-xl">
              <span className="eyebrow">Who we are</span>
              <h2 className="section-title mt-4">A Company Built Around Responsibility</h2>
              <p className="mt-6 text-base leading-8 text-slate-600">JH Sea Cargo Services Co. LLC is a Dubai-based logistics company focused on creating dependable and practical solutions for businesses moving cargo across borders.</p>
              <p className="mt-4 text-base leading-8 text-slate-600">Our journey has been shaped by real operational experience, strong industry relationships and a clear understanding of what customers expect from a logistics partner.</p>
              <p className="mt-4 text-base leading-8 text-slate-600">We believe that successful logistics is not only about moving cargo. It is about taking responsibility for the journey, communicating clearly and delivering with consistency.</p>
              <p className="mt-4 text-base leading-8 text-slate-600">That philosophy continues to guide the way we work, the partnerships we build and the company we are becoming.</p>
            </div>
            <div className="relative min-w-0">
              <div className="absolute -bottom-5 -left-5 hidden h-2/3 w-2/3 rounded-3xl border border-[#79c8e8]/60 lg:block" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_28px_70px_rgba(16,38,63,.16)]">
                <Image src="/images/about-who-we-are.jpg" alt="Cargo operations at a modern logistics port" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Responsibility at every stage</p>
            </div>
          </div>
        </section>

        <section className="about-story relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#0c2035] py-24 md:min-h-[740px]">
          <Image src="/images/about-story.jpg" alt="Sea freight vessel and containers on an international journey" fill sizes="100vw" className="about-story-image -z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071b2e]/95 via-[#071b2e]/85 to-[#071b2e]/45" />
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <span className="eyebrow text-[#a7e1f5]">Our story</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-.05em] sm:text-5xl md:text-6xl">From Behind the Scenes to Our Own Name</h2>
              <div className="mt-8 grid gap-5 text-[15px] leading-7 text-white/80 md:text-base md:leading-8">
                <p>Every company has a starting point. For JH Sea Cargo, the journey began by working behind the scenes coordinating logistics, understanding customer requirements and building relationships within the industry.</p>
                <p>Those early experiences gave us something valuable: a real understanding of how logistics works beyond the paperwork. We learned what creates a smooth shipment, where challenges arise and, most importantly, what customers need from a logistics partner they can trust.</p>
                <p>As the business developed, we recognized the importance of having greater control over service quality, communication and the customer experience. That realization became the turning point.</p>
                <p className="border-l-2 border-[#79c8e8] py-2 pl-5 text-lg font-semibold leading-8 text-white md:text-xl">On 12th July 2024, JH Sea Cargo Services Co. LLC officially began its independent operations, marking the beginning of a new chapter.</p>
                <p>Today, we continue to build on the experience that brought us here while creating our own path forward with greater responsibility, stronger operational focus and a long-term commitment to our customers.</p>
              </div>
            </div>
          </div>
          <span className="pointer-events-none absolute bottom-8 right-8 hidden text-[10px] font-bold uppercase tracking-[.3em] text-white/55 md:block">Experience · Clarity · Independence</span>
        </section>

        <>
          <OurJourneySection/>
        </>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl"><span className="eyebrow">Our approach</span><h2 className="section-title mt-4">Simple Thinking.<br className="hidden sm:block" /> Careful Coordination.<br className="hidden sm:block" /> Better Outcomes.</h2></div>
            <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              <div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-[#dbeaf0] md:block" />
              {approach.map((step) => <article key={step.number} className="relative">
                <span className="relative grid size-12 place-items-center rounded-full border border-[#b9dbe8] bg-white text-xs font-extrabold tracking-widest text-[#2999cb]">{step.number}</span>
                <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#2999cb]">{step.label}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-.04em] text-[#10263f]">{step.label}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{step.text}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="about-cta relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#0c2035] py-20">
          <Image src="/images/about-cta.jpg" alt="Cargo port at dusk, looking toward a more reliable logistics journey" fill sizes="100vw" className="about-cta-image -z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a2d]/95 via-[#061a2d]/80 to-[#061a2d]/45" />
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <span className="eyebrow text-[#a7e1f5]">Let&apos;s talk</span>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl md:text-6xl">Let&apos;s Build a More Reliable Logistics Journey.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">Have a shipment to discuss or looking for a logistics partner you can rely on?</p>
              <p className="mt-1 text-base leading-8 text-white/80">Let&apos;s talk about your requirements.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">Get a Quote <ArrowRight size={17} /></Link>
                <Link href="/contact" className="button-ghost">Contact Us <ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
