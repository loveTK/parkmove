import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const title = `부산 용달·원룸이사 전문 박기사 | 대학생 이사·화물운송·폐기물 처리`;
const description = `${site.years}년 경력 부산 박기사 용달. 원룸이사 20만원~, 용달·화물운송 5만원~, 포장이사 30만원~, 폐기물 처리 30만원~. 대학생 자취방 이사, 업체 화물운송까지 부산 전지역 당일 견적 ${site.phone}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | 박기사 부산 용달·이사` },
  description,
  keywords: [
    "부산 용달", "부산 원룸이사", "부산 이사", "부산 대학생 이사", "부산 자취방 이사",
    "부산 화물운송", "부산 폐기물 처리", "부산 포장이사", "부산 반포장이사", "부산 사무실 이사",
    "부산진구 용달", "해운대 원룸이사", "부산대 이사", "동아대 이사", "박기사 용달", "박기사",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: "박기사 부산 용달·이사",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "박기사 부산 용달·원룸이사" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
      ? { "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "KR-26",
    "geo.placename": "부산광역시 부산진구",
    "format-detection": "telephone=yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
