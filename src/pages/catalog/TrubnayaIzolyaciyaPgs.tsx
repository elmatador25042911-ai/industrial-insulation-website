import HeroSection from "./trubnaya-izolyaciya-pgs/HeroSection";
import SpecsSection from "./trubnaya-izolyaciya-pgs/SpecsSection";
import ApplicationsSection from "./trubnaya-izolyaciya-pgs/ApplicationsSection";
import MarkingSection from "./trubnaya-izolyaciya-pgs/MarkingSection";
import TubeTypesSection from "./trubnaya-izolyaciya-pgs/TubeTypesSection";
import TechnicalSpecsSection from "./trubnaya-izolyaciya-pgs/TechnicalSpecsSection";
import RequestSection from "./trubnaya-izolyaciya-pgs/RequestSection";
import InternalLayout from "@/components/layouts/InternalLayout";

const TrubnayaIzolyaciyaPgs = () => {
  return (
    <InternalLayout>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <HeroSection />
        <SpecsSection />
        <ApplicationsSection />
        <MarkingSection />
        <TubeTypesSection />
        <TechnicalSpecsSection />
        <RequestSection />
      </main>
    </InternalLayout>
  );
};

export default TrubnayaIzolyaciyaPgs;
