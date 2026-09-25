import { districts, faqs, services, site } from "@/lib/site";

const telE164 = "+82" + site.phone.replace(/-/g, "").replace(/^0/, "");

const business = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${site.url}/#business`,
  name: site.fullName,
  alternateName: ["박기사", "박기사 용달", "부산 박기사"],
  legalName: site.legalName,
  url: site.url,
  telephone: telE164,
  email: site.email,
  image: `${site.url}/og.png`,
  logo: `${site.url}/icon-512.png`,
  priceRange: "₩50,000~",
  currenciesAccepted: "KRW",
  paymentAccepted: "현금, 계좌이체",
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: "가야대로 497, 102-4802",
    addressLocality: "부산진구",
    addressRegion: "부산광역시",
    addressCountry: "KR",
  },
  areaServed: [
    { "@type": "City", name: "부산광역시" },
    ...districts.map((d) => ({ "@type": "AdministrativeArea", name: `부산광역시 ${d}` })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "박기사 용달·이사 서비스",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.desc, areaServed: "부산광역시" },
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "KRW", description: s.price },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: telE164,
    contactType: "customer service",
    availableLanguage: "Korean",
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: site.url,
  name: "박기사 부산 용달·이사",
  inLanguage: "ko-KR",
  publisher: { "@id": `${site.url}/#business` },
};

export function JsonLd() {
  return (
    <>
      {[business, faq, website].map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
