export function HeroTruck({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 300"
      className={className}
      role="img"
      aria-label="박기사 용달 트럭 일러스트"
      fill="none"
    >
      <defs>
        <linearGradient id="box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFA24A" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
        <linearGradient id="cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF8A1F" />
          <stop offset="1" stopColor="#E85400" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FF7A00" stopOpacity=".35" />
          <stop offset="1" stopColor="#FF7A00" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="260" cy="250" rx="250" ry="60" fill="url(#glow)" />

      {/* cargo box */}
      <rect x="30" y="60" width="300" height="160" rx="16" fill="url(#box)" />
      <rect x="30" y="60" width="300" height="160" rx="16" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <rect x="46" y="76" width="268" height="128" rx="10" stroke="#fff" strokeOpacity=".2" strokeWidth="2" strokeDasharray="6 8" />
      <text
        x="180"
        y="152"
        textAnchor="middle"
        fontFamily="inherit"
        fontWeight="900"
        fontSize="64"
        fill="#fff"
        letterSpacing="-2"
      >
        박기사
      </text>
      <text
        x="180"
        y="184"
        textAnchor="middle"
        fontFamily="inherit"
        fontWeight="600"
        fontSize="18"
        fill="#fff"
        fillOpacity=".85"
        letterSpacing="4"
      >
        부산 용달 · 이사 · 화물 · 폐기물
      </text>

      {/* chassis */}
      <rect x="20" y="214" width="470" height="18" rx="6" fill="#1a1a1a" />

      {/* cab */}
      <path
        d="M330 96h74a20 20 0 0 1 16 8l50 66a20 20 0 0 1 4 12v28a12 12 0 0 1-12 12H330V96Z"
        fill="url(#cab)"
      />
      <path d="M346 112h52a10 10 0 0 1 8 4l34 46H346v-50Z" fill="#0C0C0C" />
      <path d="M352 118h44a6 6 0 0 1 5 2.5L428 156h-76v-38Z" fill="#1c2733" />
      <rect x="440" y="166" width="24" height="8" rx="3" fill="#fff" opacity=".6" />
      <rect x="456" y="192" width="20" height="10" rx="3" fill="#FFE07A" />
      <rect x="336" y="170" width="12" height="30" rx="3" fill="#0C0C0C" opacity=".4" />

      {/* bumper */}
      <rect x="454" y="210" width="40" height="14" rx="5" fill="#d7e2ea" />

      {/* wheels */}
      <g>
        <circle cx="110" cy="238" r="34" fill="#0C0C0C" />
        <circle cx="110" cy="238" r="30" fill="#161616" stroke="#2c2c2c" strokeWidth="2" />
        <circle cx="110" cy="238" r="15" fill="#D7E2EA" />
        <circle cx="110" cy="238" r="5" fill="#0C0C0C" />
      </g>
      <g>
        <circle cx="400" cy="238" r="34" fill="#0C0C0C" />
        <circle cx="400" cy="238" r="30" fill="#161616" stroke="#2c2c2c" strokeWidth="2" />
        <circle cx="400" cy="238" r="15" fill="#D7E2EA" />
        <circle cx="400" cy="238" r="5" fill="#0C0C0C" />
      </g>

      {/* motion lines */}
      <path d="M0 150h18M0 176h30M0 202h14" stroke="#D7E2EA" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
