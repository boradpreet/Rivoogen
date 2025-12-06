import React from "react";
import HeroSection from "../components/SupportMaintenance/HeroSection";
import AboutService from "../components/SupportMaintenance/AboutService";
import Services from "../components/SupportMaintenance/Services";
import Workflow from "../components/SupportMaintenance/Workflow";
import Tools from "../components/SupportMaintenance/Tools";
import Benefits from "../components/SupportMaintenance/Benefits";
import FAQ from "../components/SupportMaintenance/FAQ";
import FinalCTA from "../components/SupportMaintenance/FinalCTA";
import { Helmet } from "react-helmet";



const SupportMaintenancePage = () => {
  return (
    <div className="w-full">
      <Helmet>
        {/* ============ BASIC SEO TAGS ============ */}
        <title>Application Support & Maintenance Services | 24/7 Monitoring | Rivoogen</title>
        <meta
          name="description"
          content="Rivoogen provides 24/7 application support, maintenance, monitoring, performance optimization, bug fixing, security updates, and server management to keep your software fast, secure, and reliable."
        />
        <meta
          name="keywords"
          content="application support services, app maintenance, 24/7 monitoring, server support, bug fixing, performance optimization, uptime SLA, software maintenance company, Rivoogen support services"
        />

        {/* ============ CANONICAL URL ============ */}
        <link rel="canonical" href="https://www.rivoogen.com/support-maintenance" />

        {/* ============ OPEN GRAPH (FACEBOOK, LINKEDIN) ============ */}
        <meta property="og:title" content="Application Support & Maintenance Services | Rivoogen" />
        <meta
          property="og:description"
          content="Get enterprise-level support and maintenance for your applications — 24/7 monitoring, uptime guarantee, security updates, and performance optimization."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rivoogen.com/support-maintenance" />
        <meta
          property="og:image"
          content="https://rivoogen.com/seo/support-and-maintenance-banner.jpg"
        />

        {/* ============ TWITTER CARDS ============ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Application Support & Maintenance | 24/7 Monitoring" />
        <meta
          name="twitter:description"
          content="24/7 application monitoring, bug fixing, performance optimization, and security updates from Rivoogen."
        />
        <meta
          name="twitter:image"
          content="https://rivoogen.com/seo/support-and-maintenance-banner.jpg"
        />

        {/* ============ STRUCTURED DATA (JSON-LD) ============ */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Support & Maintenance Services - Rivoogen",
        "url": "https://www.rivoogen.com/support-maintenance",
        "description": "Rivoogen offers round-the-clock application support, monitoring, maintenance, security updates, and optimization for businesses worldwide.",
        "publisher": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://rivoogen.com/logo.png"
          }
        },
        "mainEntity": [
          {
            "@type": "Service",
            "name": "24/7 Monitoring",
            "description": "Real-time monitoring and instant alerts for all your applications and cloud services."
          },
          {
            "@type": "Service",
            "name": "Application Maintenance",
            "description": "Regular updates, bug fixes, and proactive enhancements."
          },
          {
            "@type": "Service",
            "name": "Security & Patch Updates",
            "description": "Continuous security updates and vulnerability fixes."
          }
        ]
      }
    `}
        </script>
      </Helmet>

      <HeroSection />
      <AboutService />
      <Services />
      <Workflow />
      <Tools />
      <Benefits />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default SupportMaintenancePage;
