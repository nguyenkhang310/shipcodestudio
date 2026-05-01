import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const TechPage = lazy(() => import("./pages/TechPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
    <div className="premium-card px-6 py-4 text-center">
      <div className="font-display font-bold text-2xl text-gradient mb-1">
        SHIPCODE
      </div>
      <div className="text-sm text-muted-foreground">Đang tải trang...</div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/dich-vu" element={<ServicesPage />} />
              <Route path="/quy-trinh" element={<ProcessPage />} />
              <Route path="/bang-gia" element={<PricingPage />} />
              <Route path="/du-an" element={<PortfolioPage />} />
              <Route path="/cong-nghe" element={<TechPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/lien-he" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
