export function TruckMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <rect x="4" y="16" width="34" height="28" rx="5" fill="#F2F5F7" />
      <path
        d="M38 26h10.5a4 4 0 0 1 3.2 1.6l6.5 8.7A4 4 0 0 1 59 38.7V41a3 3 0 0 1-3 3H38V26Z"
        fill="#8E9AA4"
      />
      <path d="M41 29h6.6a2 2 0 0 1 1.6.8l4.6 6.2H41V29Z" fill="#0C0C0C" />
      <circle cx="17" cy="47" r="7" fill="#D7E2EA" />
      <circle cx="17" cy="47" r="3" fill="#0C0C0C" />
      <circle cx="47" cy="47" r="7" fill="#D7E2EA" />
      <circle cx="47" cy="47" r="3" fill="#0C0C0C" />
      <path d="M11 24h20M11 30h14" stroke="#0C0C0C" strokeWidth="3" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

export function Logo({ className = "", light = true }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <TruckMark className="size-9 sm:size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-xl sm:text-2xl font-black tracking-tight ${light ? "text-white" : "text-ink"}`}>
          박기사
        </span>
        <span className={`text-[10px] sm:text-[11px] font-medium tracking-[0.2em] ${light ? "text-mist/70" : "text-ink/60"}`}>
          부산 용달 · 이사
        </span>
      </span>
    </span>
  );
}
