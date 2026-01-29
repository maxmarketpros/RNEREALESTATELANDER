import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <Hero />
      <PortfolioGallery />
      <VideoShowcase />
      <Services />
      <Pricing />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <MobileCTABar />
      {/* Spacer for mobile CTA bar */}
      <div className="h-20 lg:h-0" />
    </main>
  );
}
