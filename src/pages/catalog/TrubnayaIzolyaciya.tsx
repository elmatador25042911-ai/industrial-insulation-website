import HeroSection from "./trubnaya-izolyaciya/HeroSection";
import SpecsSection from "./trubnaya-izolyaciya/SpecsSection";
import ApplicationsSection from "./trubnaya-izolyaciya/ApplicationsSection";
import MarkingSection from "./trubnaya-izolyaciya/MarkingSection";

const TrubnayaIzolyaciya = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <SpecsSection />
      <ApplicationsSection />
      <MarkingSection />
    </main>
  );
};

export default TrubnayaIzolyaciya;
