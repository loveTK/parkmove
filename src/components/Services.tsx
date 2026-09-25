import { FadeIn } from "@/components/motion";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="relative z-10 rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div id="pricing" className="absolute -top-24" aria-hidden />
      <FadeIn y={40}>
        <h2 className="text-center text-[clamp(3rem,12vw,160px)] font-black leading-none tracking-tight">
          서비스 · 요금
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[clamp(0.9rem,1.6vw,1.15rem)] text-ink/60">
          부산 원룸이사·용달·화물운송·폐기물 처리 기본 요금입니다. 실제 견적은 짐의 양, 거리, 층수·엘리베이터 유무에 따라
          달라질 수 있어 문의 시 정확히 안내드립니다.
        </p>
      </FadeIn>

      <ol className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
        {services.map((s, i) => (
          <FadeIn
            as="li"
            key={s.id}
            delay={i * 0.1}
            className="flex flex-col gap-4 border-t border-ink/15 py-8 last:border-b sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:gap-12 md:py-12"
          >
            <div className="flex items-baseline gap-4 sm:w-[clamp(90px,14vw,190px)] sm:shrink-0">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none tracking-tighter">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[clamp(1.25rem,2.4vw,2.1rem)] font-bold leading-tight">{s.name}</h3>
                <div className="text-right">
                  <span className="brand-heading text-[clamp(1.35rem,2.6vw,2.2rem)] font-black leading-none tracking-tight">
                    {s.price}
                  </span>
                  {s.priceNote && <div className="text-xs text-ink/50">{s.priceNote}</div>}
                </div>
              </div>
              <p className="max-w-2xl text-[clamp(0.9rem,1.6vw,1.2rem)] font-light leading-relaxed opacity-70">
                <span className="sr-only">{s.keyword}. </span>
                {s.desc}
              </p>
              <ul className="flex flex-wrap gap-2 pt-1">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/70 sm:text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </ol>

      <p className="mx-auto mt-10 max-w-5xl text-xs text-ink/45 sm:text-sm">
        * 표시 요금은 최소 기준이며 부가세 별도일 수 있습니다. 주말·공휴일, 심야, 계단 작업, 장거리는 별도 협의됩니다.
      </p>
    </section>
  );
}
