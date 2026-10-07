import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ServicesSection from "./components/ServicesSection";
import StatsStrip from "./components/StatsStrip";
import HowItWorks from "./components/HowItWorks";
import ImpactSection from "./components/ImpactSection";
import ImpactBand from "./components/ImpactBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <main className="space-y-4">
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <StatsStrip />
        <HowItWorks />
        <ImpactSection />
        <ImpactBand />
      </main>
      <Footer />
    </div>
  );
}
