import React from "react";
import HeroSection from "../components/AutomationTools/HeroSection";
import AboutService from "../components/AutomationTools/AboutService";
import Services from "../components/AutomationTools/Services";
import AutomationCapabilities from "../components/AutomationTools/AutomationCapabilities";
import Industries from "../components/AutomationTools/Industries";
import Workflow from "../components/AutomationTools/Workflow";
import Tools from "../components/AutomationTools/Tools";
import Benefits from "../components/AutomationTools/Benefits";
import FAQ from "../components/AutomationTools/FAQ";
import FinalCTA from "../components/AutomationTools/FinalCTA";
import { Helmet } from "react-helmet";



const AutomationTools = () => {
  return (
    <div className="w-full">
      <Helmet>
        {/* BASIC SEO TAGS */}
        <title>Automation Tools & Workflow Automation Services | Rivoogen</title>
        <meta
          name="description"
          content="Rivoogen provides automation tools, RPA bots, workflow automation, API integrations, document extraction automation, browser automation, and cloud-based automation pipelines."
        />
        <meta
          name="keywords"
          content="automation tools, workflow automation, RPA bots, automation services, business automation, API automation, browser automation, automation company, Rivoogen"
        />

        {/* CANONICAL URL */}
        <link rel="canonical" href="https://www.rivoogen.com/automation-tools" />

        {/* OPEN GRAPH / SOCIAL META */}
        <meta property="og:title" content="Automation Tools & Business Automation Services | Rivoogen" />
        <meta
          property="og:description"
          content="Automate workflows, eliminate manual tasks, reduce errors, and scale your business using intelligent automation tools and RPA bots from Rivoogen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rivoogen.com/automation-tools" />
        <meta
          property="og:image"
          content="https://rivoogen.com/seo/automation-tools-banner.jpg"
        />

        {/* TWITTER CARDS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automation Tools & Workflow Automation Services | Rivoogen" />
        <meta
          name="twitter:description"
          content="Rivoogen builds intelligent automation systems — RPA bots, workflow automation, API sync, dashboards, browser automation, and more."
        />
        <meta
          name="twitter:image"
          content="https://rivoogen.com/seo/automation-tools-banner.jpg"
        />

        {/* STRUCTURED DATA (JSON-LD) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Automation Tools & Workflow Automation",
        "provider": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://rivoogen.com/logo.png"
        },
        "serviceType": "Business Automation Services",
        "url": "https://www.rivoogen.com/automation-tools",
        "description": "Rivoogen develops workflow automation systems, intelligent RPA bots, API integrations, document extraction automation, browser automation, and cloud automation pipelines.",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "price": "Contact for quote",
          "priceCurrency": "USD"
        }
      }
    `}
        </script>
      </Helmet>
      <HeroSection />
      <AboutService />
      <Services />
      <AutomationCapabilities />
      <Industries />
      <Workflow />
      <Tools />
      <Benefits />
      <FAQ />
      < FinalCTA />
    </div>
  );
};

export default AutomationTools;
