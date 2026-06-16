import HeroSection from "./trubnaya-izolyaciya-pgs/HeroSection";
import {
  KeySpecsSection,
  MaterialDescriptionSection,
} from "./trubnaya-izolyaciya-pgs/SpecsSection";
import {
  ApplicationsSection,
  CoatingsSection,
} from "./trubnaya-izolyaciya-pgs/ApplicationsSection";
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
        <MaterialDescriptionSection />
        <CoatingsSection />
        <KeySpecsSection />
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