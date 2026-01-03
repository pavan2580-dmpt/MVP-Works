import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ExpertiseSection from "./components/ExpertiseSection";
import StorySection from "./components/StorySection";
import StatsSection from "./components/StatsSection";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import CTASection from "./components/CTASection";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="bg-slate-950 w-full min-h-screen max-h-auto relative ">
        <HeroSection />
        <FeaturesSection />
        {/* <ParticleScene /> */}
        <ExpertiseSection />
        <StorySection />
        <StatsSection />
        <HowWeWorkSection />
        <CTASection />
      </div>
    </div>
  );
}

export default HomePage;
