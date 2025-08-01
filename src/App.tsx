import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Strangers from "./pages/Strangers";
import Collages from "./pages/Collages";
import Photography from "./pages/Photography";
import Bio from "./pages/Bio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/paintings/strangers" replace />} />
            <Route path="/paintings/strangers" element={<Strangers />} />
            <Route path="/paintings/collages" element={<Collages />} />
            <Route path="/photography/series-1" element={<Photography />} />
            <Route path="/photography/series-2" element={<Photography />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
