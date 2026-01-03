import { HeroSection } from "./components/HeroSection";
import { FreelanceAdvantageSection } from "./components/FreelanceAdvantageSection";
import { EvolutionSection } from "./components/EvolutionSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { CollectiveSection } from "./components/CollectiveSection";
import { CTASection } from "./components/CTASection";

function AboutPage() {
  return (
    <div className="min-h-full bg-background-dark text-white">
      <HeroSection />
      <FreelanceAdvantageSection />
      <EvolutionSection />
      <CoreValuesSection />
      <CollectiveSection />
      <CTASection />
    </div>
  );
}

export default AboutPage;
