import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import V2GPage from "./pages/V2GPage";
import FlexibleLoadPage from "./pages/FlexibleLoadPage";
import MarketTradingPage from "./pages/MarketTradingPage";
import KPIsPage from "./pages/KPIsPage";
import EnergyCommunitiesPage from "./pages/EnergyCommunitiesPage";
import ForecastingPage from "./pages/ForecastingPage";
import RegulatoryPage from "./pages/RegulatoryPage";
import EmergencyPage from "./pages/EmergencyPage";
import AdaptiveControlPage from "./pages/AdaptiveControlPage";
import PredictiveMaintenancePage from "./pages/PredictiveMaintenancePage";
import EducationPage from "./pages/EducationPage";
import DigitalTwinPage from "./pages/DigitalTwinPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/v2g" element={<V2GPage />} />
            <Route path="/dashboard/flexible-load" element={<FlexibleLoadPage />} />
            <Route path="/dashboard/market-trading" element={<MarketTradingPage />} />
            <Route path="/dashboard/kpis" element={<KPIsPage />} />
            <Route path="/dashboard/energy-communities" element={<EnergyCommunitiesPage />} />
            <Route path="/dashboard/forecasting" element={<ForecastingPage />} />
            <Route path="/dashboard/regulatory" element={<RegulatoryPage />} />
            <Route path="/dashboard/emergency" element={<EmergencyPage />} />
            <Route path="/dashboard/adaptive-control" element={<AdaptiveControlPage />} />
            <Route path="/dashboard/predictive-maintenance" element={<PredictiveMaintenancePage />} />
            <Route path="/dashboard/education" element={<EducationPage />} />
            <Route path="/dashboard/digital-twin" element={<DigitalTwinPage />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
