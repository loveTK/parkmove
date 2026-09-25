import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "1. 수집하는 개인정보 항목",
    p: [
      "견적 문의 시: 연락처(휴대전화번호), 출발지·도착지 주소, 이사 희망일, 문의 내용",
      "홈페이지의 견적 문의 폼은 입력 내용을 고객님의 휴대전화 문자(SMS) 앱으로 전달하는 방식이며, 홈페이지 서버에는 어떠한 개인정보도 저장되지 않습니다.",
    ],
  },
  {
    h: "2. 개인정보의 수집 및 이용 목적",
    p: ["이사·용달·폐기물 처리 견적 산정 및 상담, 서비스 일정 협의 및 안내"],
  },
  {
    h: "3. 개인정보의 보유 및 이용 기간",
    p: ["상담 및 서비스 완료 후 지체 없이 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다."],
  },
  {
    h: "4. 개인정보의 제3자 제공",
    p: ["수집한 개인정보를 제3자에게 제공하지 않습니다. 단, 법령에 의한 요청이 있는 경우는 예외로 합니다."],
  },
  {
    h: "5. 정보주체의 권리",
    p: ["고객님은 언제든지 본인의 개인정보에 대한 열람·정정·삭제를 요청할 수 있으며, 아래 연락처로 요청하시면 지체 없이 처리합니다."],
  },
  {
    h: "6. 개인정보 보호책임자",
    p: [`성명: ${site.owner}`, `연락처: ${site.phone}`, `이메일: ${site.email}`],
  },
  {
    h: "7. 고지의 의무",
    p: ["본 방침은 2026년 9월 25일부터 시행되며, 변경 시 홈페이지에 공지합니다."],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink px-5 py-10 text-mist sm:px-8 md:px-10">
      <div className="mx-auto max-w-2xl">
        <Link href="/" aria-label="박기사 홈으로">
          <Logo />
        </Link>
        <h1 className="mt-12 text-3xl font-black text-white sm:text-4xl">개인정보처리방침</h1>
        <p className="mt-4 text-sm leading-relaxed text-mist/70">
          {site.legalName}(이하 &quot;회사&quot;)은 개인정보 보호법 제30조에 따라 고객의 개인정보를 보호하고 관련 고충을 신속하게
          처리하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.
        </p>
        {sections.map((s) => (
          <section key={s.h} className="mt-8">
            <h2 className="text-lg font-bold text-white">{s.h}</h2>
            {s.p.map((t) => (
              <p key={t} className="mt-2 text-sm leading-relaxed text-mist/80">
                {t}
              </p>
            ))}
          </section>
        ))}
        <Link href="/" className="mt-12 inline-block rounded-full border-2 border-mist px-6 py-3 text-sm font-semibold text-mist hover:bg-mist/10">
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
