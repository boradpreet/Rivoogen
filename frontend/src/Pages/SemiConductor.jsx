import React from "react";

import HeroSection from "../components/Semiconductor/HeroSection";
import WhatAreSemiconductors from "../components/Semiconductor/WhatAreSemiconductors";
import ImportanceSection from "../components/Semiconductor/ImportanceSection";
import ServicesOffered from "../components/Semiconductor/ServicesOffered";
import FutureVision from "../components/Semiconductor/FutureVision";
import WhyChooseUs from "../components/Semiconductor/WhyChooseUs";
import CTA from "../components/Semiconductor/CTA";
import { Helmet } from "react-helmet";

const SemiconductorPage = () => {
  return (
    <div className="w-full">
      <Helmet>
        {/* ========== PRIMARY SEO META ========== */}
        <title>Semiconductor Services | Chip Design, EDA, AI for Silicon, Manufacturing Consulting – Rivoogen</title>

        <meta
          name="description"
          content="Rivoogen provides end-to-end semiconductor solutions including chip design, EDA toolchain support, AI-driven semiconductor optimization, fabrication consultation, testing, verification, packaging, and advanced research. Empowering India’s semiconductor ecosystem."
        />

        <meta
          name="keywords"
          content="Semiconductor company India, chip design services, EDA tools Cadence Synopsys, semiconductor AI, chip verification, fab consulting, VLSI services, silicon design, semiconductor manufacturing India, Rivoogen semiconductors"
        />

        <link rel="canonical" href="https://www.rivoogen.com/semiconductor" />

        {/* ========== OPEN GRAPH (SOCIAL MEDIA PREVIEW) ========== */}
        <meta property="og:title" content="Semiconductor Engineering & Chip Design Services – Rivoogen" />
        <meta
          property="og:description"
          content="Chip design, EDA tool automation, fabrication consultation, AI defect detection, testing, packaging and semiconductor lifecycle solutions by Rivoogen."
        />
        <meta property="og:image" content="https://www.rivoogen.com/og/semiconductor.jpg" />
        <meta property="og:url" content="https://www.rivoogen.com/semiconductor" />
        <meta property="og:type" content="website" />

        {/* ========== TWITTER SEO ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semiconductor Solutions | Chip Design & EDA – Rivoogen" />
        <meta
          name="twitter:description"
          content="Rivoogen delivers advanced semiconductor services including chip design, AI optimization, fabrication consulting, and testing."
        />
        <meta name="twitter:image" content="https://www.rivoogen.com/og/semiconductor-banner.jpg" />

        {/* ========== STRUCTURED DATA (SEO BOOSTER) ========== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Semiconductor Engineering & Chip Design",
            provider: {
              "@type": "Organization",
              name: "Rivoogen",
              url: "https://www.rivoogen.com",
              logo: "https://www.rivoogen.com/logo.png",
            },
            description:
              "Rivoogen offers semiconductor services including chip design, EDA tools, AI defect detection, fabrication consultation, testing, verification and advanced packaging.",
            areaServed: "Worldwide",
            serviceType: [
              "Chip Design & Architecture",
              "EDA Automation",
              "Semiconductor Manufacturing Consulting",
              "AI for Semiconductor",
              "Testing & Validation",
              "Chip Packaging & Assembly",
            ],
            offers: {
              "@type": "Offer",
              price: "Contact for Pricing",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
      <HeroSection />
      <WhatAreSemiconductors />
      <ImportanceSection />
      <ServicesOffered />
      <FutureVision />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default SemiconductorPage;
