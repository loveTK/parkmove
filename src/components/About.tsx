"use client";

import { Clock, MapPinned, ShieldCheck, Truck } from "lucide-react";
import { CallButton } from "@/components/Buttons";
import { AnimatedText, FadeIn } from "@/components/motion";
import { site } from "@/lib/site";

const corners = [
  { Icon: Truck, pos: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]", x: -80, delay: 0.1 },
  { Icon: ShieldCheck, pos: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]", x: -80, delay: 0.25 },
  { Icon: MapPinned, pos: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]", x: 80, delay: 0.15 },
  { Icon: Clock, pos: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]", x: 80, delay: 0.3 },
];

const stats = [
  { v: `${site.years}년`, l: "용달·이사 경력" },
  { v: "부산 전지역", l: "16개 구·군 출장" },
  { v: "당일 견적", l: "전화 한 통이면 OK" },
  { v: "정직한 가격", l: "추가 요금 사전 안내" },
];

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-5 py-20 sm:px-8 md:px-10">
      {corners.map(({ Icon, pos, x, delay }, i) => (
        <FadeIn key={i} delay={delay} x={x} y={0} duration={0.9} className={`absolute ${pos} hidden sm:block`}>
          <div className="flex size-[120px] items-center justify-center rounded-3xl border border-mist/10 bg-white/[0.03] sm:size-[140px] md:size-[180px]">
            <Icon className="size-12 text-brand md:size-16" strokeWidth={1.25} />
          </div>
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black leading-none tracking-tight">
            박기사 소개
          </h2>
        </FadeIn>

        <AnimatedText
          className="max-w-[600px] text-center text-[clamp(1.05rem,2vw,1.4rem)] font-medium leading-relaxed text-mist"
          text={`${site.years}년 동안 부산 곳곳의 이삿짐을 직접 옮겨온 박기사입니다. 원룸이사와 대학생 자취방 이사, 업체 화물운송, 폐기물 처리까지 큰 업체가 꺼리는 작은 짐도 정성껏 나릅니다. 현장을 보고 정확하게 견적을 드리고, 약속한 가격 그대로 진행합니다.`}
        />

        <FadeIn y={20} className="grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-mist/10 bg-white/[0.03] px-4 py-5 text-center">
              <div className="text-xl font-black text-white sm:text-2xl">{s.v}</div>
              <div className="mt-1 text-xs text-mist/60 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </FadeIn>

        <FadeIn y={20} className="mt-4 sm:mt-6">
          <CallButton label="지금 전화 견적" />
        </FadeIn>
      </div>
    </section>
  );
}
