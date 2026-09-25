"use client";

import { Bike, Box, GraduationCap, MapPin, Recycle, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { marqueeRowA, marqueeRowB } from "@/lib/site";

const icons = [Truck, GraduationCap, Box, Bike, Recycle];

function Tile({ label, i, accent }: { label: string; i: number; accent?: boolean }) {
  const Icon = accent ? MapPin : icons[i % icons.length];
  return (
    <li
      className={`flex h-[110px] w-[230px] shrink-0 items-center gap-3 rounded-2xl border px-5 sm:h-[130px] sm:w-[280px] ${
        accent ? "border-brand/30 bg-brand/10" : "border-mist/15 bg-white/[0.04]"
      }`}
    >
      <Icon className={`size-7 shrink-0 ${accent ? "text-brand" : "text-mist/70"}`} strokeWidth={1.75} />
      <span className="text-base font-semibold text-mist sm:text-lg">{label}</span>
    </li>
  );
}

export function Marquee() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rowA = [...marqueeRowA, ...marqueeRowA, ...marqueeRowA];
  const rowB = [...marqueeRowB, ...marqueeRowB, ...marqueeRowB];

  return (
    <section ref={ref} className="overflow-x-clip bg-ink pb-10 pt-24 sm:pt-32 md:pt-40" aria-label="서비스 및 부산 서비스 지역">
      <div className="flex flex-col gap-3">
        <ul
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
        >
          {rowA.map((l, i) => (
            <Tile key={`${l}-${i}`} label={l} i={i} />
          ))}
        </ul>
        <ul
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
        >
          {rowB.map((l, i) => (
            <Tile key={`${l}-${i}`} label={l} i={i} accent />
          ))}
        </ul>
      </div>
    </section>
  );
}
