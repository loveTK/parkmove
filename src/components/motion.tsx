"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const M = {
  div: motion.div,
  li: motion.li,
  nav: motion.nav,
  details: motion.details,
  section: motion.section,
  p: motion.p,
} as const;

type FadeInProps = {
  children: ReactNode;
  as?: keyof typeof M;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  style?: React.CSSProperties;
};

export function FadeIn({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  style,
}: FadeInProps) {
  const Comp = M[as];
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
};

export function Magnet({ children, className, padding = 150, strength = 3 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    const target = inner.current;
    if (!el || !target) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const inside =
      Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding;
    if (inside) {
      target.style.transition = "transform 0.3s ease-out";
      target.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
    } else {
      reset();
    }
  };

  const reset = () => {
    const target = inner.current;
    if (!target) return;
    target.style.transition = "transform 0.6s ease-in-out";
    target.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={reset}>
      <div ref={inner} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = text.split(" ");
  let i = 0;
  const total = text.length;
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const chars = Array.from(word).map((c) => {
          const idx = i++;
          return <Char key={idx} char={c} index={idx} total={total} progress={scrollYProgress} />;
        });
        i++;
        return (
          <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
            {chars}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}
