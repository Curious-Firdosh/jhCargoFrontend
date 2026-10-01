"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Ship,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];
const serviceItems = [
  {
    icon: Package,
    title: "Cargo Consolidation",
    text: "Multiple shipments are consolidated into efficient container movements, helping businesses optimize shipping costs from China to Dubai.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service-T7RvG9UjjOQROmTjqfsA3eocwgpWkp.jpeg",
    alt: "Warehouse team loading cartons into a shipping container",
  },
  {
    icon: Ship,
    title: "Sea Freight & Forwarding",
    text: "Tailored LCL and FCL sea freight solutions, coordinating the logistics process from origin to destination.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sea-iXkHFmqjyQeOFItISt1JnxSWKWN90o.jpeg",
    alt: "Container ship beside cranes at a busy port",
  },
  {
    icon: Warehouse,
    title: "JAFZA Warehousing",
    text: "Secure, flexible and accessible short-term or long-term storage for cargo arriving from China.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jafja%20warehoauoing-CFnqeSZcetFpKHvdbcSCVD5eA9OkAj.jpeg",
    alt: "Large modern warehouse filled with organized cargo",
  },
  {
    icon: Truck,
    title: "Dubai Last-Mile Delivery",
    text: "Efficient delivery from our JAFZA facility to locations across Dubai, safely and on time.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20hero-8W2TZTAJ3hMFv8UrzvTDCa77UpvWeZ.jpeg",
    alt: "Dubai container terminal and delivery routes at sunset",
  },
];

const journeySteps = [
  {
    title: "Cargo Coordination",
    text: "We understand your cargo requirements and coordinate consolidation or sea freight at origin.",
    icon: Package,
    image: serviceItems[0].image,
    alt: serviceItems[0].alt,
  },
  {
    title: "Sea Freight",
    text: "Your cargo is prepared and arranged for efficient, dependable sea transportation.",
    icon: Ship,
    image: serviceItems[1].image,
    alt: serviceItems[1].alt,
  },
  {
    title: "JAFZA Warehousing",
    text: "Upon arrival, cargo can be securely stored at our Jebel Ali Free Zone facility.",
    icon: Warehouse,
    image: serviceItems[2].image,
    alt: serviceItems[2].alt,
  },
  {
    title: "Final-Mile Delivery",
    text: "We coordinate delivery from JAFZA to its final destination within Dubai.",
    icon: Truck,
    image: serviceItems[3].image,
    alt: serviceItems[3].alt,
  },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${light ? "text-white" : "text-[#10263f]"}`}
      aria-label="JH Sea Cargo home"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-[#79c8e8] text-[#10263f] shadow-sm">
        <Package size={21} strokeWidth={2.5} />
      </span>
      <span className="text-[17px] font-extrabold tracking-[-0.04em]">
        JH{" "}
        <span className={light ? "text-[#a7e1f5]" : "text-[#2999cb]"}>
          SEA CARGO
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo light />
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#79c8e8] px-5 py-2.5 text-sm font-bold text-[#10263f] shadow-lg shadow-[#03233d]/20 transition hover:-translate-y-0.5 hover:bg-white md:block"
        >
          Request a quote <ArrowRight className="ml-1 inline" size={15} />
        </Link>
        <button
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="mx-4 rounded-2xl border border-white/15 bg-[#10263f]/95 p-3 shadow-2xl backdrop-blur md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 font-semibold text-white hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0c2035] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
            China-to-Dubai sea cargo and logistics, coordinated with care.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link
                className="transition hover:text-[#79c8e8]"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href="mailto:info@example.com">info@example.com</a>
            <span>Dubai, United Arab Emirates</span>
            <span>China → Dubai logistics</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} JH Sea Cargo Services Co. LLC. All rights
        reserved.
      </div>
    </footer>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className="eyebrow">{eyebrow || "JH Sea Cargo"}</span>
      <h2 className="section-title mt-4">{title}</h2>
      {text && (
        <p className="mt-5 text-base leading-8 text-slate-600">{text}</p>
      )}
    </div>
  );
}

export function Services() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollSlider = (direction: "next" | "prev") => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector<HTMLElement>("article");

    if (!card) return;

    const cardWidth = card.offsetWidth + 20;

    slider.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector<HTMLElement>("article");

    if (!card) return;

    const cardWidth = card.offsetWidth + 20;
    const index = Math.round(slider.scrollLeft / cardWidth);

    setActiveIndex(index);
  };

  const maxIndex = Math.max(0, serviceItems.length - 1);

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Slider */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          flex
          snap-x
          snap-mandatory
          gap-5
          overflow-x-auto
          scroll-smooth
          pb-4
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {serviceItems.map(({ icon: Icon, title, text, image, alt }, index) => (
          <article
            key={title}
            className="
                group
                w-[85%]
                shrink-0
                snap-center
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_4px_20px_rgba(16,38,63,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_35px_rgba(16,38,63,0.10)]

                sm:w-[48%]
                lg:w-[31.5%]
              "
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="
                    (max-width: 640px) 85vw,
                    (max-width: 1024px) 48vw,
                    32vw
                  "
                className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
              />

              {/* Number */}
              <span
                className="
                    absolute
                    left-3
                    top-3
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/95
                    text-xs
                    font-extrabold
                    text-[#2999cb]
                    shadow-sm
                    backdrop-blur-sm
                  "
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#eef9fd]
                      text-[#2999cb]
                      transition-all
                      duration-300
                      group-hover:bg-[#2999cb]
                      group-hover:text-white
                    "
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="
                        text-lg
                        font-extrabold
                        leading-tight
                        tracking-tight
                        text-[#10263f]
                      "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                        mt-2
                        text-[13px]
                        leading-6
                        text-slate-500
                      "
                  >
                    {text}
                  </p>
                </div>
              </div>

              {/* Learn more */}
              <div
                className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    tracking-wide
                    text-[#2999cb]
                  "
              >
                Learn More
                <ArrowRight
                  size={14}
                  className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {serviceItems.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to service ${index + 1}`}
              onClick={() => {
                if (!sliderRef.current) return;

                const card =
                  sliderRef.current.querySelector<HTMLElement>("article");

                if (!card) return;

                const cardWidth = card.offsetWidth + 20;

                sliderRef.current.scrollTo({
                  left: cardWidth * index,
                  behavior: "smooth",
                });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-[#2999cb]"
                  : "w-1.5 bg-slate-300 hover:bg-[#9bd9eb]"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous services"
            disabled={activeIndex === 0}
            onClick={() => scrollSlider("prev")}
            className="
              grid
              size-9
              place-items-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[#10263f]
              transition-all
              duration-200
              hover:border-[#2999cb]
              hover:text-[#2999cb]
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <ArrowLeft size={16} />
          </button>

          <button
            type="button"
            aria-label="Next services"
            disabled={activeIndex >= maxIndex}
            onClick={() => scrollSlider("next")}
            className="
              grid
              size-9
              place-items-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[#10263f]
              transition-all
              duration-200
              hover:border-[#2999cb]
              hover:text-[#2999cb]
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const last = journeySteps.length - 1;
  const progress = last > 0 ? (active / last) * 100 : 0;

  // Active step = the one crossing the middle of the screen (works scrolling up AND down)
  useEffect(() => {
    const observers = stepRefs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(index),
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const goTo = (index: number) =>
    stepRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Sticky route tracker: always shows where you are between China and Dubai */}
      <div className="sticky top-3 z-30 mb-14"></div>

      {/* Steps */}
      <div>
        {journeySteps.map(({ title, text, icon: Icon, image, alt }, index) => {
          const reached = index <= active;
          const current = index === active;
          const leftSide = index % 2 === 0;

          return (
            <article
              key={title}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className="relative grid grid-cols-[48px_1fr] items-start gap-x-5 pb-14 md:grid-cols-[1fr_56px_1fr] md:gap-x-10 md:pb-20"
            >
              {/* Connector to next node (fills as you progress) */}
              <span
                aria-hidden
                className="absolute -bottom-6 left-6 top-6 w-0.5 -translate-x-1/2 bg-[#d8eaf0] md:left-1/2"
              >
                <span
                  className={`absolute left-0 top-0 w-full bg-[#2999cb] transition-[height] duration-700 ease-out motion-reduce:transition-none ${
                    index < active ? "h-full" : "h-0"
                  }`}
                />
              </span>

              {/* Node */}
              <button
                onClick={() => goTo(index)}
                aria-label={`Step ${index + 1}: ${title}`}
                aria-current={current ? "step" : undefined}
                className="relative z-10 col-start-1 row-span-2 row-start-1 grid size-12 place-items-center justify-self-center rounded-full md:col-start-2 md:row-span-1"
              >
                {current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#2999cb]/25 motion-reduce:hidden" />
                )}
                <span
                  className={`relative grid size-12 place-items-center rounded-full border-4 transition-all duration-500 ${
                    current
                      ? "scale-110 border-[#2999cb] bg-[#10263f] text-[#a7e1f5]"
                      : reached
                        ? "border-[#2999cb] bg-[#2999cb] text-white"
                        : "border-[#e1eef2] bg-white text-[#8aa0aa]"
                  }`}
                >
                  {reached && !current ? (
                    <Check size={18} strokeWidth={3} />
                  ) : (
                    <span className="text-xs font-extrabold">{index + 1}</span>
                  )}
                </span>
              </button>

              {/* Text */}
              <div
                className={`col-start-2 row-start-1 transition-opacity duration-500 md:row-start-1 ${
                  leftSide ? "md:col-start-1 md:text-right" : "md:col-start-3"
                } ${reached ? "opacity-100" : "opacity-45"}`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    leftSide ? "md:justify-end" : ""
                  }`}
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-[#e7f5f9] text-[#2999cb]">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-semibold text-[#2999cb]">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#10263f]">
                  {title}
                </h3>
                <p
                  className={`mt-2 max-w-sm text-[15px] leading-7 text-[#64748b] ${
                    leftSide ? "md:ml-auto" : ""
                  }`}
                >
                  {text}
                </p>
              </div>

              {/* Image */}
              <div
                className={`col-start-2 row-start-2 mt-5 md:mt-0 md:row-start-1 ${
                  leftSide ? "md:col-start-3" : "md:col-start-1"
                }`}
              >
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${
                    current
                      ? "border-[#2999cb]/50 shadow-[0_18px_40px_rgba(41,153,203,0.18)]"
                      : "border-[#dce8ed] shadow-[0_6px_18px_rgba(16,38,63,0.05)]"
                  }`}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-all duration-700 motion-reduce:transition-none ${
                        current
                          ? "scale-100 saturate-100"
                          : "scale-[1.04] saturate-50"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Finish line */}
        <div className="grid grid-cols-[48px_1fr] items-center gap-x-5 md:grid-cols-[1fr_56px_1fr] md:gap-x-10">
          <span
            className={`col-start-1 grid size-12 place-items-center justify-self-center rounded-full transition-colors duration-500 md:col-start-2 ${
              active === last
                ? "bg-[#2999cb] text-white shadow-[0_0_0_8px_rgba(41,153,203,0.15)]"
                : "bg-[#e1eef2] text-[#8aa0aa]"
            }`}
          >
            <Check size={22} strokeWidth={3} />
          </span>
          <p className="col-start-2 text-lg font-extrabold text-[#10263f] md:col-start-3">
            Delivered to Dubai
          </p>
        </div>
      </div>
    </div>
  );
}
const values = [
  [
    "China–Dubai Expertise",
    "Specialized logistics solutions designed around cargo moving between China and Dubai.",
  ],
  [
    "Competitive Solutions",
    "Consolidation and freight options designed to help manage transportation costs efficiently.",
  ],
  [
    "Strategic JAFZA Warehousing",
    "Secure and flexible storage at Jebel Ali Free Zone for greater control over your cargo.",
  ],
  [
    "Reliable Delivery",
    "Coordinated delivery solutions from our JAFZA facility to destinations across Dubai.",
  ],
  [
    "Experienced Team",
    "Professional operations and hands-on support throughout your cargo journey.",
  ],
  [
    "Customer-First Service",
    "Clear communication, dependable execution and long-term customer relationships.",
  ],
];
export function Values({ about = false }: { about?: boolean }) {
  const items = about
    ? [
        ["Reliability", "Consistent and dependable service."],
        ["Integrity", "Transparency, professionalism and trust."],
        ["Efficiency", "Simpler and more effective logistics."],
        ["Customer Focus", "Our customers remain at the center."],
      ]
    : values;

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {items.map(([title, text], index) => (
          <article
            key={title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-[#dce8ed]
              bg-white
              p-6 sm:p-7 lg:p-8
              shadow-[0_4px_20px_rgba(12,32,53,0.04)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#a7dbea]
              hover:shadow-[0_16px_40px_rgba(12,32,53,0.10)]
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none absolute -right-16 -top-16
                h-36 w-36 rounded-full
                bg-[#a7e1f5]/20 blur-3xl
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100
              "
            />

            <div className="relative">
              {/* Number + line */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#2999cb]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    h-px w-8 bg-[#b8dfe9]
                    transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-[#2999cb]
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-lg font-extrabold tracking-[-0.025em]
                  text-[#10263f]
                  transition-colors duration-300
                  group-hover:text-[#2999cb]
                  sm:text-xl
                "
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-md
                  text-[14px] leading-6
                  text-[#64748b]
                  sm:text-[15px] sm:leading-7
                "
              >
                {text}
              </p>
            </div>

            {/* Bottom accent */}
            <span
              className="
                absolute bottom-0 left-0
                h-[3px] w-0
                bg-[#2999cb]
                transition-all duration-500
                group-hover:w-full
              "
            />
          </article>
        ))}
      </div>
    </div>
  );
}
export function Cta({
  title = "Let’s Talk About Your Cargo Needs",
  text = "Have a question about our services or need more information? Our team is here to help.",
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="cta-band">
        <div>
          <span className="eyebrow text-[#a7e1f5]">Ready when you are</span>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-300">{text}</p>
        </div>
        <Link href="/contact" className="button-primary shrink-0">
          Request a quote <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: "+XXX XXX XXXX" },
  { icon: Mail, label: "Email", value: "info@example.com" },
  { icon: MapPin, label: "Address", value: "Dubai, United Arab Emirates" },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Monday – Saturday · 9:00 AM – 6:00 PM",
  },
];
export { navItems };
