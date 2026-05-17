import HeroSection from "./trubnaya-izolyaciya/HeroSection";
import SpecsSection from "./trubnaya-izolyaciya/SpecsSection";
import ApplicationsSection from "./trubnaya-izolyaciya/ApplicationsSection";
import MarkingSection from "./trubnaya-izolyaciya/MarkingSection";
import TubeTypesSection from "./trubnaya-izolyaciya/TubeTypesSection";
import TechnicalSpecsSection from "./trubnaya-izolyaciya/TechnicalSpecsSection";

const TrubnayaIzolyaciya = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <SpecsSection />
      <ApplicationsSection />
      <MarkingSection />
      <TubeTypesSection />
      <TechnicalSpecsSection />
    </main>
  );
};

export default TrubnayaIzolyaciya;