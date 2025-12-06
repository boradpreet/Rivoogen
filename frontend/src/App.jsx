import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Home Components
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import IndustriesSection from "./components/IndustriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

// Pages
import AIMLPage from "./Pages/AIMLPage";
import WebServicePage from "./Pages/WebServicePage";
import QATesting from "./Pages/QATesting";
import SupportMaintenancePage from "./Pages/SupportMaintenance";
import CustomSoftwarePage from "./Pages/CustomSoftware";
import SemiconductorPage from "./Pages/SemiConductor";
import CloudPage from "./Pages/Cloud";
import AutomationTools from "./Pages/AutomationTools";
import AboutUsPage from "./Pages/AboutUs";
import IndustriesPage from "./Pages/Industries";
import ContactPage from "./Pages/ContactPage";

import ScrollToTop from "./components/common/ScrollToTop";
import { Toaster } from "react-hot-toast";

import FullPageLoader from "./components/FullPageLoader";
import VisionPage from "./Pages/VisionPage";
import HomePage from "./Pages/HomePage";
import { Helmet } from "react-helmet";


function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Trigger loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <FullPageLoader />}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Rivoogen" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1C1C1C" />
        <meta property="og:site_name" content="Rivoogen" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rivoogen",
        "url": "https://rivoogen.com",
        "logo": "https://rivoogen.com/logo.png",
        "description": "Rivoogen is a modern startup offering AI, Cloud, Automation, and Custom Software development services.",
        "sameAs": [
          "https://www.linkedin.com/company/rivoogen",
          "https://www.instagram.com/rivoogen",
          "https://twitter.com/rivoogen"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "contact@rivoogen.com",
          "telephone": "+91-79843-27489"
        }
      }
    `}
        </script>

      </Helmet>

      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="/ai-ml" element={<AIMLPage />} />
        <Route path="/web-services" element={<WebServicePage />} />
        <Route path="/qa-testing" element={<QATesting />} />
        <Route path="/support-maintenance" element={<SupportMaintenancePage />} />
        <Route path="/custom-software" element={<CustomSoftwarePage />} />
        <Route path="/semiconductor" element={<SemiconductorPage />} />
        <Route path="/cloud-services" element={<CloudPage />} />
        <Route path="/automation-tools" element={<AutomationTools />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/vision" element={<VisionPage />} />
      </Routes>

      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default function App() {
  return (
    // <Router>
    <AppContent />
    // </Router>
  );
}
