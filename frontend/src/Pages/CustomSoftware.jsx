import React from "react";
import HeroSection from "../components/CustomSoftware/HeroSection";
import Services from "../components/CustomSoftware/Services";
import Workflow from "../components/CustomSoftware/Workflow";
import Tools from "../components/CustomSoftware/Tools";
import Benefits from "../components/CustomSoftware/Benefits";
import FAQ from "../components/CustomSoftware/FAQ";
import FinalCTA from "../components/CustomSoftware/FinalCTA";
import AboutService from "../components/CustomSoftware/AboutService";
import { Helmet } from "react-helmet";

const CustomSoftwarePage = () => {
  return (
    <div className="w-full">
      <Helmet>
        {/* BASIC SEO */}
        <title>Custom Software Development | Rivoogen | Scalable & Secure Business Solutions</title>
        <meta
          name="description"
          content="Rivoogen provides custom software development services including enterprise apps, SaaS platforms, APIs, automation tools, modern web & mobile apps, and cloud-native systems."
        />
        <meta
          name="keywords"
          content="custom software development, enterprise software, saas development, API development, workflow automation, software company India, Rivoogen software services"
        />

        {/* CANONICAL URL */}
        <link rel="canonical" href="https://www.rivoogen.com/custom-software" />

        {/* OPEN GRAPH SOCIAL TAGS */}
        <meta property="og:title" content="Custom Software Development | Rivoogen" />
        <meta
          property="og:description"
          content="We build secure, scalable custom software solutions — enterprise apps, SaaS platforms, mobile applications, APIs, automation tools, and cloud-native systems."
        />
        <meta property="og:url" content="https://www.rivoogen.com/custom-software" />
        <meta
          property="og:image"
          content="https://rivoogen.com/seo/custom-software-banner.jpg"
        />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development | Rivoogen" />
        <meta
          name="twitter:description"
          content="Custom-built digital solutions to scale your business — secure, fast, and future-ready."
        />
        <meta
          name="twitter:image"
          content="https://rivoogen.com/seo/custom-software-banner.jpg"
        />

        {/* STRUCTURED DATA (JSON-LD) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Software Development",
        "provider": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://rivoogen.com/logo.png"
        },
        "serviceType": "Enterprise Software, SaaS Development, Automation Tools",
        "url": "https://www.rivoogen.com/custom-software",
        "description": "Rivoogen delivers custom software solutions including SaaS platforms, enterprise dashboards, workflow automation, cloud-native applications, APIs, and mobile apps.",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "price": "Custom Pricing",
          "priceCurrency": "USD"
        }
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

export default CustomSoftwarePage;
