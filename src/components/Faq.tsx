import { FadeIn } from "@/components/motion";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-ink px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <FadeIn y={40}>
        <h2 className="hero-heading text-center text-[clamp(2.5rem,9vw,120px)] font-black leading-none tracking-tight">
          자주 묻는 질문
        </h2>
      </FadeIn>
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-mist/10 sm:mt-16">
        {faqs.map((f, i) => (
          <FadeIn as="details" key={f.q} delay={i * 0.06} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white sm:text-lg [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span className="shrink-0 text-2xl font-light text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-mist/75 sm:text-base">{f.a}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
