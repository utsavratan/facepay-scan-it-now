
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ScanPage from "./pages/ScanPage";
import Register from "./pages/Register";
import RechargePage from "./pages/RechargePage";
import BillsPage from "./pages/BillsPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import AddMoneyPage from "./pages/AddMoneyPage";
import RentPaymentPage from "./pages/RentPaymentPage";
import MoneyTransferPage from "./pages/MoneyTransferPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import HelpPage from "./pages/HelpPage";
import HowItWorksPage from "./pages/HowItWorksPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />} />
          <Route path="/add-money" element={<AddMoneyPage />} />
          <Route path="/rent" element={<RentPaymentPage />} />
          <Route path="/transfer" element={<MoneyTransferPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
