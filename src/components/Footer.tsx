import { Logo } from "@/components/Logo";
import { districts, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-ink px-5 pb-28 pt-14 text-sm text-mist/60 sm:px-8 md:px-10 md:pb-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-md">
          <Logo />
          <p className="mt-5 leading-relaxed">
            {site.years}년 경력의 부산 용달·원룸이사 전문 박기사. 대학생 자취방 이사, 업체 화물운송, 폐기물 처리까지 부산 전지역
            출장합니다.
          </p>
          <a href={site.phoneHref} className="mt-5 inline-block text-2xl font-black text-white hover:text-brand">
            {site.phone}
          </a>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 leading-relaxed">
          <dt className="text-mist/40">상호</dt><dd>{site.legalName}</dd>
          <dt className="text-mist/40">대표자</dt><dd>{site.owner}</dd>
          <dt className="text-mist/40">주소</dt><dd>{site.address}</dd>
          <dt className="text-mist/40">사업자등록번호</dt><dd>{site.bizNo}</dd>
          <dt className="text-mist/40">화물운송주선 허가</dt><dd>{site.freightLicense}</dd>
          <dt className="text-mist/40">통신판매업신고</dt><dd>{site.mailOrderNo}</dd>
          <dt className="text-mist/40">이메일</dt><dd><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></dd>
        </dl>
      </div>

      <p className="mx-auto mt-10 max-w-5xl text-xs leading-relaxed text-mist/35">
        서비스 지역: {districts.map((d) => `부산 ${d}`).join(" · ")} 및 경남 인근
      </p>
      <p className="mx-auto mt-4 flex max-w-5xl flex-wrap gap-x-4 text-xs text-mist/35">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <a href="/privacy/" className="font-semibold text-mist/60 hover:text-white">개인정보처리방침</a>
      </p>
    </footer>
  );
}
