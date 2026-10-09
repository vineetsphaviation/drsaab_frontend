import {
  Hero,
  HowItWorks,
  ImpactBand,
  ImpactSection,
  ServicesSection,
  StatsStrip,
  TrustStrip,
} from "../components/home";

const HomePage = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <StatsStrip />
      <HowItWorks />
      <ImpactSection />
      <ImpactBand />
    </div>
  );
};

export default HomePage;
