import { MessageSquareText, Phone } from "lucide-react";
import { site } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide whitespace-nowrap transition-transform duration-200 active:scale-95";

export function CallButton({ className = "", label = "전화 연결" }: { className?: string; label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`${base} cta-gradient text-white px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-sm sm:text-base hover:scale-[1.03] ${className}`}
      aria-label={`${label} ${site.phone}`}
    >
      <Phone className="size-4 sm:size-5" strokeWidth={2.5} />
      {label}
    </a>
  );
}

export function QuoteButton({ className = "", label = "문자 견적문의" }: { className?: string; label?: string }) {
  return (
    <a
      href="#quote"
      className={`${base} border-2 border-mist text-mist px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-sm sm:text-base hover:bg-mist/10 ${className}`}
    >
      <MessageSquareText className="size-4 sm:size-5" strokeWidth={2.5} />
      {label}
    </a>
  );
}
