import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Transactions from "./pages/Transactions";
import Services from "./pages/Services";
import Feed from "./pages/Feed";
import Gamification from "./pages/Gamification";
import Vault from "./pages/Vault";
import Notifications from "./pages/Notifications";
import FloatingChatbot from "./components/FloatingChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <FloatingChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;