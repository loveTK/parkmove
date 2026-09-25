import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Process } from "@/components/Process";
import { QuoteForm } from "@/components/QuoteForm";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip bg-ink">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Faq />
      <QuoteForm />
      <Footer />
      <MobileCtaBar />
    </main>
  );
}
