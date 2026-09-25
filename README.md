# 박기사 — 부산 용달·원룸이사 홈페이지

30년 경력 부산 용달/이삿짐 전문 **박기사**의 공식 홈페이지. 도메인: **박기사.kr** (`xn--ok0bm7x0qd.kr`)

Next.js(정적 내보내기) + Tailwind CSS v4 + Framer Motion. 서버 없이 HTML/CSS/JS만 나오므로 GitHub Pages, Vercel, Cloudflare Pages 어디든 올릴 수 있습니다.

## 개발

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # out/ 폴더에 정적 파일 생성
npm run icons      # public/icon.svg → favicon.ico, icon-192/512.png, apple-touch-icon.png
```

내용 수정은 대부분 `src/lib/site.ts` 한 파일에서 합니다 (전화번호, 요금, 서비스 설명, 이용과정, FAQ, 서비스 지역).

## 구조

| 위치 | 내용 |
| --- | --- |
| `src/lib/site.ts` | 상호·전화·주소·요금·FAQ 등 모든 텍스트 데이터 |
| `src/components/Hero.tsx` | 첫 화면 (대형 로고 타이틀, 트럭 일러스트, 전화/문자 버튼) |
| `src/components/Marquee.tsx` | 서비스·부산 구군 키워드 스크롤 띠 |
| `src/components/About.tsx` | 박기사 소개 |
| `src/components/Services.tsx` | 서비스·요금 (흰 배경) |
| `src/components/Process.tsx` | 이용 과정 5단계 (스택 카드) |
| `src/components/Faq.tsx` | 자주 묻는 질문 |
| `src/components/QuoteForm.tsx` | 견적 문의 폼 → 문자 앱으로 내용 전송 |
| `src/components/MobileCtaBar.tsx` | 모바일 하단 고정 전화/문자 버튼 |
| `src/components/JsonLd.tsx` | 검색엔진용 구조화 데이터 (MovingCompany, FAQ) |
| `public/` | 파비콘, OG 이미지, robots.txt, sitemap.xml, CNAME |

## 배포 (GitHub Pages)

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다.

1. GitHub 저장소 → **Settings → Pages → Source: GitHub Actions** 선택
2. 같은 화면의 **Custom domain**에 `xn--ok0bm7x0qd.kr` 입력 (한글 그대로 `박기사.kr`을 넣어도 됨) → **Enforce HTTPS** 체크
3. (선택) Settings → Secrets and variables → Actions → **Variables**에
   `GOOGLE_SITE_VERIFICATION`, `NAVER_SITE_VERIFICATION` 값을 넣으면 검색엔진 소유 확인 메타태그가 자동 삽입됩니다.

## 도메인 연결 (박기사.kr)

가비아·후이즈 등에서 `박기사.kr`을 구매한 뒤 DNS 설정:

| 타입 | 호스트 | 값 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<깃허브아이디>.github.io` |

반영까지 최대 24시간. 이후 GitHub Pages 설정의 Custom domain 옆에 초록 체크가 뜨면 완료.

## 검색 노출 (SEO) 등록

빌드에 이미 포함된 것: 한국어 메타 제목/설명/키워드, OpenGraph 이미지, `MovingCompany`·`FAQPage` 구조화 데이터, `robots.txt`, `sitemap.xml`, 캐노니컬 URL.

배포 후 직접 해야 할 것:

1. **네이버 서치어드바이저** (searchadvisor.naver.com) → 사이트 등록 → HTML 태그 방식 소유 확인 값을 `NAVER_SITE_VERIFICATION` 변수로 저장 → 사이트맵 `https://xn--ok0bm7x0qd.kr/sitemap.xml` 제출
2. **구글 서치 콘솔** (search.google.com/search-console) → 동일하게 `GOOGLE_SITE_VERIFICATION` 저장 → 사이트맵 제출
3. **네이버 스마트플레이스 / 구글 비즈니스 프로필**에 업체 등록하고 홈페이지 주소 입력 — 지역 검색("부산 용달", "부산 원룸이사")에 가장 효과가 큽니다.
4. 네이버 플레이스·당근 등 외부 프로필에 홈페이지 링크 추가.

## 사진 교체

현재 트럭은 SVG 일러스트입니다. 실제 사진이 준비되면:

- `public/` 에 사진을 넣고 `src/components/Hero.tsx`의 `<HeroTruck />`을 `<img>`로 교체
- `scripts/og.html`을 수정하고 `node scripts/shoot.mjs`로 `public/og.png` 재생성
