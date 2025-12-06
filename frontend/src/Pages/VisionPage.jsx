import React from 'react'
import HeroSection from "../components/Vision/HeroSection";
import WhatAreSemiconductors from "../components/Vision/WhatAreSemiconductors";
import ImportanceSection from "../components/Vision/ImportanceSection";
import ServicesOffered from "../components/Vision/ServicesOffered";
import FutureVision from "../components/Vision/FutureVision";
import WhyChooseUs from "../components/Vision/WhyChooseUs";
import CTA from "../components/Vision/CTA";
import { Helmet } from "react-helmet";

function VisionPage() {
  return (
    <div className="w-full">
      <Helmet>
        {/* BASIC SEO */}
        <title>Semiconductor Services & Vision | Rivoogen | Chip Design, AI, EDA & Manufacturing</title>
        <meta
          name="description"
          content="Rivoogen provides semiconductor chip design, EDA automation, AI-driven optimisation, manufacturing consultation, testing, packaging, and India's semiconductor ecosystem vision."
        />
        <meta
          name="keywords"
          content="semiconductor services, chip design, EDA tools, AI semiconductor, fabrication consulting, India's semiconductor vision, semiconductor ecosystem, SoC design, cleanroom setup"
        />

        {/* CANONICAL URL */}
        <link rel="canonical" href="https://www.rivoogen.com/vision" />

        {/* OPEN GRAPH TAGS */}
        <meta property="og:title" content="Semiconductor Services & Vision | Rivoogen" />
        <meta
          property="og:description"
          content="Explore Rivoogen’s end-to-end semiconductor capabilities — chip design, AI optimisation, EDA automation, fabrication consultation, and India's semiconductor ecosystem vision."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rivoogen.com/vision" />
        <meta
          property="og:image"
          content="https://rivoogen.com/seo/semiconductor-banner.jpg"
        />

        {/* TWITTER TAGS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semiconductor Services & Vision | Rivoogen" />
        <meta
          name="twitter:description"
          content="Rivoogen’s semiconductor services: AI-powered chip design, EDA, manufacturing consultation, and India's semiconductor future vision."
        />
        <meta
          name="twitter:image"
          content="https://rivoogen.com/seo/semiconductor-banner.jpg"
        />

        {/* STRUCTURED DATA (JSON-LD) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Semiconductor Services",
        "provider": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://rivoogen.com/logo.png"
        },
        "serviceType": "Semiconductor Chip Design, EDA Automation, AI Optimization, Manufacturing Consultation",
        "url": "https://www.rivoogen.com/vision",
        "description": "Rivoogen provides semiconductor chip design, EDA automation, AI defect detection, prototyping, manufacturing consultation, advanced packaging, and India's semiconductor ecosystem roadmap.",
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
      <WhatAreSemiconductors />
      <ImportanceSection />
      <ServicesOffered />
      <FutureVision />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}

export default VisionPage