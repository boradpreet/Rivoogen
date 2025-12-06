import React from "react";
import HeroSection from "../components/Industries/HeroSection";
import IndustryGrid from "../components/Industries/IndustryGrid";
import IndustryDetails from "../components/Industries/IndustryDetails";
import WhyChooseUs from "../components/Industries/WhyChooseUs";
import CTA from "../components/Industries/CTA";
import { Helmet } from "react-helmet";



const IndustriesPage = () => {
  return (
    <div className="w-full">
      <Helmet>
        {/* BASIC SEO */}
        <title>Industries We Serve | Rivoogen | FinTech, Healthcare, AI, Telecom, SaaS & More</title>
        <meta
          name="description"
          content="Rivoogen delivers custom technology solutions across FinTech, Healthcare, E-commerce, Telecom, AI & SaaS, Real Estate, Education, and Enterprise industries."
        />
        <meta
          name="keywords"
          content="industries we serve, fintech software, healthcare IT solutions, ecommerce development, telecom portals, AI SaaS development, automation tools, cloud solutions, Rivoogen"
        />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.rivoogen.com/industries" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Industries We Serve | Rivoogen" />
        <meta
          property="og:description"
          content="Explore how Rivoogen builds industry-specific solutions for FinTech, Healthcare, E-commerce, Telecom, AI, Cloud and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rivoogen.com/industries" />
        <meta
          property="og:image"
          content="https://rivoogen.com/seo/industries-banner.jpg"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | Rivoogen" />
        <meta
          name="twitter:description"
          content="Rivoogen offers modern digital solutions for FinTech, Healthcare, Education, SaaS, Telecom, Real Estate, Retail & more."
        />
        <meta
          name="twitter:image"
          content="https://rivoogen.com/seo/industries-banner.jpg"
        />

        {/* SCHEMA MARKUP – JSON-LD */}
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        "name": "Industries We Serve",
        "url": "https://www.rivoogen.com/industries",
        "description": "Technology solutions provided by Rivoogen across multiple industries.",
        "provider": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://rivoogen.com/logo.png"
        },
        "hasPart": [
          { "@type": "Service", "name": "FinTech Solutions" },
          { "@type": "Service", "name": "Healthcare Systems" },
          { "@type": "Service", "name": "E-Commerce Development" },
          { "@type": "Service", "name": "Telecom Portals & Automation" },
          { "@type": "Service", "name": "AI & SaaS Products" },
          { "@type": "Service", "name": "Education Platforms" },
          { "@type": "Service", "name": "Real Estate Technology" }
        ]
      }
    `}
        </script>
      </Helmet>

      <HeroSection />
      <IndustryGrid />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default IndustriesPage;
