"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, MapPin, Package, PackageOpen, Truck } from "lucide-react";
import { useRef } from "react";
import { CallButton, QuoteButton } from "@/components/Buttons";
import { FadeIn } from "@/components/motion";
import { process } from "@/lib/site";

const icons = [ClipboardList, MapPin, Package, Truck, PackageOpen];

function Card({ index, total, title, desc }: { index: number; total: number; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const Icon = icons[index];

  return (
    <div ref={ref} className="h-[70vh] sm:h-[75vh] md:h-[85vh]">
      <motion.article
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
        className="sticky rounded-[40px] border-2 border-mist bg-ink p-5 sm:rounded-[50px] sm:p-7 md:rounded-[60px] md:p-9"
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-5 sm:gap-8">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none tracking-tighter text-mist">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-2 sm:pt-4">
              <div className="text-xs font-medium uppercase tracking-widest text-brand sm:text-sm">STEP {index + 1}</div>
              <h3 className="mt-1 text-[clamp(1.4rem,3vw,2.6rem)] font-bold leading-tight text-white">{title}</h3>
            </div>
          </div>
          <div className="hidden size-20 items-center justify-center rounded-3xl border border-mist/20 bg-white/[0.04] sm:flex md:size-24">
            <Icon className="size-10 text-brand md:size-12" strokeWidth={1.5} />
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-[clamp(1rem,1.8vw,1.35rem)] leading-relaxed text-mist/80 sm:mt-8">{desc}</p>
        <div className="mt-8 h-[clamp(120px,18vw,240px)] rounded-[30px] bg-gradient-to-br from-brand/20 via-white/[0.03] to-transparent sm:rounded-[40px]" />
      </motion.article>
    </div>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black leading-none tracking-tight">
          이용 과정
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-[clamp(0.9rem,1.6vw,1.15rem)] text-mist/60">
          문의부터 정리까지 다섯 단계. 박기사가 직접 챙깁니다.
        </p>
      </FadeIn>

      <div className="mx-auto mt-10 max-w-5xl sm:mt-16">
        {process.map((p, i) => (
          <Card key={p.title} index={i} total={process.length} title={p.title} desc={p.desc} />
        ))}
      </div>

      <FadeIn y={20} className="mt-10 flex flex-wrap justify-center gap-3">
        <CallButton />
        <QuoteButton />
      </FadeIn>
    </section>
  );
}
