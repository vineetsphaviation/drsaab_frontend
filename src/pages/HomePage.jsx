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
    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
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
