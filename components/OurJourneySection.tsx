"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import { Anchor, Compass, Handshake, Ship, TrendingUp, type LucideIcon } from "lucide-react";

/* ----------------------------------------------------------------------------
   DATA
---------------------------------------------------------------------------- */

interface Milestone {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
  featured?: boolean;
}

const milestones: Milestone[] = [
  {
    number: "01",
    eyebrow: "The Foundation",
    title: "Learning the Business from the Inside",
    text: "Our journey began with hands-on involvement in cargo coordination, customer requirements and logistics operations, giving us practical experience across the industry.",
    icon: Anchor,
    image: {
      src: "/images/journey-foundation.jpg",
      alt: "Cargo being coordinated and loaded at a busy port terminal",
    },
  },
  {
    number: "02",
    eyebrow: "Building Connections",
    title: "Growing Through Partnerships",
    text: "Early collaborations helped us develop valuable industry relationships and build a stronger understanding of the logistics network connecting origin and destination.",
    icon: Handshake,
    image: {
      src: "/images/journey-partnerships.jpg",
      alt: "Logistics partners shaking hands to agree a shipping partnership",
    },
  },
  {
    number: "03",
    eyebrow: "Finding Our Direction",
    title: "A Clearer Vision for JH Sea Cargo",
    text: "With experience came clarity. We recognized the importance of greater operational control, consistent service standards and stronger ownership of the customer experience.",
    icon: Compass,
    image: {
      src: "/images/journey-vision.jpg",
      alt: "Team reviewing shipping routes and service plans together",
    },
  },
  {
    number: "04",
    eyebrow: "12 July 2024",
    title: "JH Sea Cargo Begins Its Independent Journey",
    text: "JH Sea Cargo Services Co. LLC officially commenced its independent operations, establishing its own identity and taking greater responsibility for the services it provides.",
    icon: Ship,
    image: {
      src: "/images/journey-launch.jpg",
      alt: "A container ship leaving port at the start of a new voyage",
    },
    featured: true,
  },
  {
    number: "05",
    eyebrow: "Moving Forward",
    title: "Building for the Long Term",
    text: "Today, we continue to strengthen our operations, develop strategic partnerships and build a logistics company focused on reliability, relationships and sustainable growth.",
    icon: TrendingUp,
    image: {
      src: "/images/journey-operations.jpg",
      alt: "Operations team coordinating cargo and logistics",
    },
  },
];

/* ----------------------------------------------------------------------------
   HELPERS
---------------------------------------------------------------------------- */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

/* ----------------------------------------------------------------------------
   SECTION
---------------------------------------------------------------------------- */

export default function OurJourneySection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCount, setActiveCount] = useState(0);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();

  // Progress 0 -> 1 as the timeline passes the 60% mark of the viewport.
  // The tip of the drawn line therefore always sits at that viewport line.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 60%", "end 60%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const fill = reduce ? scrollYProgress : smooth;

  // A node lights up once the line tip has reached its centre.
  const updateActive = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const wrapTop = wrap.getBoundingClientRect().top;
    const tip = fill.get() * wrap.offsetHeight;
    let count = 0;
    nodeRefs.current.forEach((node) => {
      if (!node) return;
      const r = node.getBoundingClientRect();
      if (r.top - wrapTop + r.height / 2 <= tip) count += 1;
    });
    setActiveCount((prev) => (prev === count ? prev : count));
  }, [fill]);

  useMotionValueEvent(fill, "change", updateActive);

  useEffect(() => {
    updateActive();
    window.addEventListener("resize", updateActive);
    return () => window.removeEventListener("resize", updateActive);
  }, [updateActive]);

  return (
    <section
      aria-labelledby="journey-heading"
      className="section-pad relative overflow-hidden bg-[#f5fbfd]"
    >
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,38,63,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,38,63,.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
        <div className="absolute -left-32 top-24 size-96 rounded-full bg-[#79c8e8]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-[#2999cb]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Our journey</span>
            <h2 id="journey-heading" className="section-title mt-4 max-w-3xl">
              Every Step Shaped Who We Are
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-500">
            Experience became clarity. Clarity gave us the confidence to take responsibility for our
            own journey.
          </p>
        </div>

        {/* Timeline */}
        <div ref={wrapRef} className="relative">
          {/* Line: faint track + scroll-driven gradient fill */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-[23px] w-[2px] md:left-1/2 md:-translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent,black_48px,black_calc(100%_-_48px),transparent)]"
          >
            <div className="absolute inset-0 bg-[#c9e2e9]" />
            <motion.div
              style={{ scaleY: fill }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[#79c8e8] to-[#2999cb] shadow-[0_0_12px_rgba(41,153,203,.55)]"
            />
          </div>

          <ol className="relative space-y-10 md:space-y-16">
            {milestones.map((m, index) => (
              <MilestoneItem
                key={m.number}
                milestone={m}
                index={index}
                active={index < activeCount}
                isDesktop={isDesktop}
                reduce={!!reduce}
                nodeRef={(el) => {
                  nodeRefs.current[index] = el;
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   ITEM
---------------------------------------------------------------------------- */

interface ItemProps {
  milestone: Milestone;
  index: number;
  active: boolean;
  isDesktop: boolean;
  reduce: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
}

function MilestoneItem({ milestone, index, active, isDesktop, reduce, nodeRef }: ItemProps) {
  const { number, eyebrow, title, text, icon: Icon, image, featured } = milestone;
  const isLeft = index % 2 === 0; // left of the line on desktop

  const dx = reduce || !isDesktop ? 0 : isLeft ? -56 : 56;
  const dy = reduce ? 0 : isDesktop ? 0 : 36;

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: dx, y: dy },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0.01 : 0.8,
        ease: EASE,
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  /* Node on the line */
  const nodeSize = featured ? "size-12 md:size-14" : "size-12";
  const nodeInner = featured
    ? active
      ? "bg-[#10263f] text-[#a7e1f5] shadow-[0_0_0_6px_rgba(121,200,232,.28),0_10px_30px_rgba(41,153,203,.55)]"
      : "bg-[#10263f] text-[#a7e1f5]/70"
    : active
      ? "bg-[#2999cb] text-white shadow-[0_0_0_6px_rgba(121,200,232,.25),0_8px_22px_rgba(41,153,203,.4)]"
      : "bg-white text-slate-400 shadow-sm";

  /* Card */
  const cardBase =
    "group relative min-w-0 overflow-hidden rounded-2xl border p-6 md:p-8 transition-shadow duration-500";
  const cardStyle = featured
    ? "border-[#79c8e8]/50 bg-[#10263f] text-white shadow-[0_30px_80px_-20px_rgba(16,38,63,.6),0_0_0_1px_rgba(121,200,232,.18)] md:origin-center md:scale-[1.03] md:p-10"
    : "border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(16,38,63,.04),0_14px_34px_-14px_rgba(16,38,63,.14)] hover:shadow-[0_1px_2px_rgba(16,38,63,.05),0_22px_44px_-14px_rgba(41,153,203,.28)]";

  return (
    <li className="relative grid pl-16 md:grid-cols-2 md:gap-x-20 md:pl-0">
      {/* Node */}
      <div
        ref={nodeRef}
        className={`absolute left-0 top-6 z-10 md:left-1/2 md:-translate-x-1/2 ${nodeSize}`}
      >
        {featured && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#79c8e8]/50 animate-ping motion-reduce:animate-none"
          />
        )}
        <motion.div
          animate={{ scale: active ? 1 : 0.88 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className={`relative grid size-full place-items-center rounded-full border-4 border-[#f5fbfd] transition-[background-color,color,box-shadow] duration-500 ${nodeInner}`}
        >
          <Icon size={featured ? 22 : 18} strokeWidth={1.8} />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        key={isDesktop ? "desktop" : "mobile"}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className={`min-w-0 ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
      >
        <div className={`${cardBase} ${cardStyle} ${isLeft ? "md:text-right" : "md:text-left"}`}>
          {/* Decorations */}
          {featured && (
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[#2999cb]/30 blur-3xl"
            />
          )}
          <span
            aria-hidden
            className={`pointer-events-none absolute -top-2 select-none text-[7rem] font-black leading-none tracking-tighter right-5 ${
              isLeft ? "md:left-6 md:right-auto" : ""
            } ${featured ? "text-white/[0.06]" : "text-[#10263f]/[0.04]"}`}
          >
            {number}
          </span>

          <div className="relative z-10">
            {/* Number row */}
            <motion.div
              variants={childVariants}
              className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
            >
              <span
                className={`text-xs font-extrabold tracking-[.2em] ${
                  featured ? "text-[#a7e1f5]" : "text-[#2999cb]"
                }`}
              >
                {number}
              </span>
              <span className={`h-px w-8 ${featured ? "bg-[#79c8e8]/60" : "bg-slate-200"}`} />
              {!featured && (
                <span className="text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">
                  {eyebrow}
                </span>
              )}
            </motion.div>

            {/* Featured: badge + big date */}
            {featured && (
              <motion.div variants={childVariants} className="mt-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#79c8e8]/40 bg-[#79c8e8]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#a7e1f5]">
                  <span className="size-1.5 rounded-full bg-[#79c8e8] animate-pulse motion-reduce:animate-none" />
                  Key milestone
                </span>
                <p className="mt-3 bg-gradient-to-r from-[#a7e1f5] via-white to-[#79c8e8] bg-clip-text text-4xl font-black leading-none tracking-[-.04em] text-transparent md:text-5xl">
                  {eyebrow}
                </p>
              </motion.div>
            )}

            <motion.h3
              variants={childVariants}
              className={`mt-4 text-xl font-extrabold leading-tight tracking-[-.03em] md:text-2xl ${
                featured ? "text-white md:text-3xl" : "text-[#10263f]"
              }`}
            >
              {title}
            </motion.h3>

            <motion.p
              variants={childVariants}
              className={`mt-3 text-sm leading-7 ${featured ? "text-white/75" : "text-slate-600"}`}
            >
              {text}
            </motion.p>

            {/* Photograph */}
            <motion.div
              variants={childVariants}
              className={`relative mt-6 aspect-[16/8] overflow-hidden rounded-xl bg-gradient-to-br from-[#10263f] to-[#2999cb] ${
                featured ? "ring-1 ring-[#79c8e8]/40" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#10263f]/50 via-[#10263f]/5 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </li>
  );
}
