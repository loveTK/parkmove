"use client";

import { CallButton, QuoteButton } from "@/components/Buttons";
import { Logo } from "@/components/Logo";
import { FadeIn, Magnet } from "@/components/motion";
import { nav, site } from "@/lib/site";

export function Hero() {
  return (
    <header className="relative flex h-[100svh] min-h-[640px] flex-col overflow-x-clip bg-ink">
      <FadeIn as="nav" y={-20} className="flex items-center justify-between px-5 pt-5 sm:px-8 md:px-10 md:pt-8" aria-label="주 메뉴">
        <a href="#top" aria-label="박기사 홈으로">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 md:flex lg:gap-12">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-base font-medium uppercase tracking-wider text-mist transition-opacity duration-200 hover:opacity-70 lg:text-lg"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.phoneHref}
          className="rounded-full border border-mist/40 px-4 py-2 text-sm font-semibold text-mist md:hidden"
        >
          {site.phone}
        </a>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="overflow-hidden px-2 sm:px-0">
        <h1 className="sr-only">
          {site.years}년 경력 부산 용달·원룸이사 전문 박기사 — 대학생 이사, 화물운송, 폐기물 처리
        </h1>
        <p
          aria-hidden
          className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[27vw] font-black leading-none tracking-tight sm:mt-4 sm:text-[21vw] md:-mt-3 md:text-[20vw] lg:text-[19vw]"
        >
          박기사
        </p>
      </FadeIn>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-8 sm:block">
        <FadeIn
          delay={0.6}
          y={30}
          className="pointer-events-none z-10 flex w-full justify-center sm:absolute sm:inset-x-0 sm:bottom-0"
        >
          <Magnet className="pointer-events-auto w-[320px] sm:w-[400px] md:w-[500px] lg:w-[580px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/truck-hero.png"
              alt="박기사 용달 트럭"
              width={718}
              height={525}
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(215,226,234,0.18)]"
            />
          </Magnet>
        </FadeIn>

        <div className="relative z-20 flex w-full flex-col gap-5 px-5 pb-24 sm:absolute sm:bottom-0 sm:flex-row sm:items-end sm:justify-between sm:px-8 md:px-10 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p className="mx-auto max-w-[320px] text-center text-[clamp(0.95rem,1.4vw,1.35rem)] font-light leading-snug tracking-wide text-mist sm:mx-0 sm:max-w-[240px] sm:text-left md:max-w-[300px]">
              <span className="font-semibold text-brand">{site.years}년 경력</span> 부산 용달·원룸이사 전문.
              대학생 자취방 이사부터 업체 화물운송, 폐기물 처리까지 어디든 갑니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="hidden flex-wrap gap-3 md:flex">
            <CallButton />
            <QuoteButton />
          </FadeIn>
        </div>
      </div>
    </header>
  );
}
