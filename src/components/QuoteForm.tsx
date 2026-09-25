"use client";

import { Copy, MessageSquareText, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/motion";
import { services, site } from "@/lib/site";

const inputCls =
  "w-full rounded-2xl border border-mist/15 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-mist/35 outline-none transition focus:border-brand focus:bg-white/[0.06]";
const labelCls = "mb-2 block text-sm font-medium text-mist/80";

export function QuoteForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const lines = [
      "[박기사 견적문의]",
      `서비스: ${get("service")}`,
      `출발지: ${get("from") || "-"}`,
      `도착지: ${get("to") || "-"}`,
      `이사일: ${get("date") || "미정"}`,
      `연락처: ${get("phone")}`,
      get("note") ? `문의사항: ${get("note")}` : "",
    ].filter(Boolean);
    const body = lines.join("\n");
    setMessage(body);
    setCopied(false);
    window.open(`${site.smsHref}?body=${encodeURIComponent(body)}`, "_self");
  };

  const copy = async () => {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="quote" className="scroll-mt-20 bg-ink px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <FadeIn y={40}>
        <h2 className="hero-heading text-center text-[clamp(2.5rem,9vw,120px)] font-black leading-none tracking-tight">
          견적 문의
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-[clamp(0.9rem,1.6vw,1.15rem)] text-mist/60">
          아래 내용을 적고 버튼을 누르면 문자 앱이 열립니다. 전송만 하면 끝. 급하시면 바로 전화 주세요.
        </p>
      </FadeIn>

      <FadeIn y={30} delay={0.1} className="mx-auto mt-12 max-w-2xl">
        <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-[32px] border border-mist/10 bg-white/[0.02] p-5 sm:p-8">
          <div>
            <label htmlFor="service" className={labelCls}>서비스 종류</label>
            <select id="service" name="service" className={`${inputCls} appearance-none`} defaultValue={services[0].name}>
              {services.map((s) => (
                <option key={s.id} value={s.name} className="bg-ink">{s.name}</option>
              ))}
              <option value="기타 문의" className="bg-ink">기타 문의</option>
            </select>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="from" className={labelCls}>출발지</label>
              <input id="from" name="from" className={inputCls} placeholder="예: 부산진구 개금동 (3층, 엘베 없음)" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="to" className={labelCls}>도착지</label>
              <input id="to" name="to" className={inputCls} placeholder="예: 금정구 장전동 원룸 2층" autoComplete="off" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className={labelCls}>이사 희망일</label>
              <input id="date" name="date" type="date" className={`${inputCls} [color-scheme:dark]`} />
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>
                연락처 <span className="text-brand">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                pattern="[0-9\-\s]{9,14}"
                className={inputCls}
                placeholder="010-0000-0000"
                autoComplete="tel"
              />
            </div>
          </div>
          <div>
            <label htmlFor="note" className={labelCls}>짐 규모 · 특이사항</label>
            <textarea
              id="note"
              name="note"
              rows={4}
              className={`${inputCls} resize-y`}
              placeholder="예: 냉장고 1, 세탁기 1, 침대 1, 박스 10개 / 폐기물 있음"
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-mist/70">
            <input type="checkbox" required className="mt-1 size-4 accent-brand" />
            <span>
              견적 안내를 위한 개인정보(연락처, 주소) 수집·이용에 동의합니다. 수집된 정보는 견적 상담 목적으로만 사용되며
              상담 종료 후 파기됩니다.{" "}
              <a href="/privacy/" target="_blank" rel="noopener" className="underline hover:text-white">
                개인정보처리방침 보기
              </a>
            </span>
          </label>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="cta-gradient inline-flex flex-1 items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageSquareText className="size-5" strokeWidth={2.5} />
              문자로 견적 보내기
            </button>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-mist px-8 py-4 text-base font-semibold text-mist transition hover:bg-mist/10"
            >
              <Phone className="size-5" strokeWidth={2.5} />
              {site.phone}
            </a>
          </div>
        </form>

        {message && (
          <div className="mt-6 rounded-3xl border border-brand/30 bg-brand/10 p-5 text-sm text-mist">
            <p className="font-semibold text-white">문자 앱이 열리지 않았나요?</p>
            <p className="mt-1 text-mist/80">
              아래 내용을 복사해서 <a href={site.smsHref} className="font-semibold text-brand underline">{site.phone}</a>로 보내주세요.
            </p>
            <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-ink/60 p-4 font-sans text-mist/90">{message}</pre>
            <button
              type="button"
              onClick={copy}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-mist/30 px-4 py-2 text-sm font-medium hover:bg-mist/10"
            >
              <Copy className="size-4" />
              {copied ? "복사됨" : "내용 복사"}
            </button>
          </div>
        )}
      </FadeIn>
    </section>
  );
}
