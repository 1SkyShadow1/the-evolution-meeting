
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import ImpactStories from "./pages/ImpactStories";
import Volunteer from "./pages/Volunteer";
import NotFound from "./pages/NotFound";

const App = () => {
  // Move QueryClient inside the component to ensure it's created after React initializes
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impact-stories" element={<ImpactStories />} />
            <Route path="/volunteer" element={<Volunteer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
