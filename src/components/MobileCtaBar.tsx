import { MessageSquareText, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-mist/10 bg-ink/90 p-3 backdrop-blur md:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href={site.phoneHref}
        className="cta-gradient inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-ink active:scale-95"
      >
        <Phone className="size-4" strokeWidth={2.5} />
        전화 연결
      </a>
      <a
        href="#quote"
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-mist py-3.5 text-sm font-bold text-mist active:scale-95"
      >
        <MessageSquareText className="size-4" strokeWidth={2.5} />
        문자 견적문의
      </a>
    </div>
  );
}
