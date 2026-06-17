
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TrubnayaIzolyaciya from "./pages/catalog/TrubnayaIzolyaciya";
import TrubnayaIzolyaciyaPgs from "./pages/catalog/TrubnayaIzolyaciyaPgs";
import RulonnayaIzolyaciya from "./pages/catalog/RulonnayaIzolyaciya";
import RulonnayaIzolyaciyaPgs from "./pages/catalog/RulonnayaIzolyaciyaPgs";
import ZashchitnyePokrytiya from "./pages/catalog/ZashchitnyePokrytiya";
import MontazhnyeMaterialy from "./pages/catalog/MontazhnyeMaterialy";
import MontazhnyeMaterialyPgs from "./pages/catalog/MontazhnyeMaterialyPgs";
import ZashchitnyeMaterialyPgs from "./pages/catalog/ZashchitnyeMaterialyPgs";
import KamennayaVataPgs from "./pages/catalog/KamennayaVataPgs";
import Termochekhly from "./pages/catalog/Termochekhly";
import TermochekhlyPgs from "./pages/catalog/TermochekhlyPgs";
import ShumoizolyatsiyaPgs from "./pages/catalog/ShumoizolyatsiyaPgs";
import OporyIPodvesyPgs from "./pages/catalog/OporyIPodvesyPgs";
import AntikondensatnyePokrytiya from "./pages/catalog/AntikondensatnyePokrytiya";
import TeploizolyatsiyaKauchuk from "./pages/documentation/TeploizolyatsiyaKauchuk";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog/trubnaya-izolyaciya" element={<Navigate to="/catalog/sudostroenie/trubnaya-izolyaciya" replace />} />
          <Route path="/catalog/sudostroenie/trubnaya-izolyaciya" element={<TrubnayaIzolyaciya />} />
          <Route path="/catalog/sudostroenie/rulonnaya-izolyaciya" element={<RulonnayaIzolyaciya />} />
          <Route path="/catalog/sudostroenie/zashchitnye-pokrytiya" element={<ZashchitnyePokrytiya />} />
          <Route path="/catalog/sudostroenie/montazhnye-materialy" element={<MontazhnyeMaterialy />} />
          <Route path="/catalog/sudostroenie/termochekhly" element={<Termochekhly />} />
          <Route path="/catalog/sudostroenie/antikondensatnye-pokrytiya" element={<AntikondensatnyePokrytiya />} />
          <Route path="/catalog/pgs/trubnaya-izolyaciya" element={<TrubnayaIzolyaciyaPgs />} />
          <Route path="/catalog/pgs/rulonnaya-izolyaciya" element={<RulonnayaIzolyaciyaPgs />} />
          <Route path="/catalog/pgs/montazhnye-materialy" element={<MontazhnyeMaterialyPgs />} />
          <Route path="/catalog/pgs/zashchitnye-materialy" element={<ZashchitnyeMaterialyPgs />} />
          <Route path="/catalog/pgs/kamennaya-vata" element={<KamennayaVataPgs />} />
          <Route path="/catalog/pgs/termochekhly" element={<TermochekhlyPgs />} />
          <Route path="/catalog/pgs/shumoizolyatsiya" element={<ShumoizolyatsiyaPgs />} />
          <Route path="/catalog/pgs/opory-i-podvesy" element={<OporyIPodvesyPgs />} />
          <Route path="/documentation/teploizolyatsiya-kauchuk" element={<TeploizolyatsiyaKauchuk />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;