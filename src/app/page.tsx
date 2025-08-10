import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Cta } from "@/components/cta";
import { AiTips } from "@/components/ai-tips";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Cta />
        <AiTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
