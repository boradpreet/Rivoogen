import React from "react";
import HeroSection from "../components/Cloud/HeroSection";
import AboutService from "../components/Cloud/AboutService";
import Services from "../components/Cloud/Services";
import CloudCapabilities from "../components/Cloud/CloudCapabilities";
import Industries from "../components/Cloud/Industries";
import Workflow from "../components/Cloud/Workflow";
import Tools from "../components/Cloud/Tools";
import Benefits from "../components/Cloud/Benefits";
import FAQ from "../components/Cloud/FAQ";
import FinalCTA from "../components/Cloud/FinalCTA";
import { Helmet } from "react-helmet";

const CloudPage = () => {
  return (
    <div className="w-full">
      <Helmet>
  {/* BASIC SEO */}
  <title>Cloud Services | AWS, Azure, GCP | Cloud Migration & DevOps | Rivoogen</title>
  <meta
    name="description"
    content="Rivoogen provides cloud services including AWS, Azure, and GCP migration, DevOps automation, Kubernetes orchestration, cloud security, monitoring, and scalable cloud architectures."
  />
  <meta
    name="keywords"
    content="cloud services, AWS, Azure, GCP, cloud migration, DevOps automation, Kubernetes, cloud security, cloud consulting, cloud infrastructure, Rivoogen"
  />

  {/* CANONICAL URL */}
  <link rel="canonical" href="https://www.rivoogen.com/cloud-services" />

  {/* OPEN GRAPH / SOCIAL */}
  <meta property="og:title" content="Cloud Services | AWS, Azure, GCP | Rivoogen" />
  <meta 
    property="og:description"
    content="Scale securely with Rivoogen’s enterprise-grade cloud solutions — migration, DevOps, Kubernetes, CI/CD, security, monitoring, and 24/7 support."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.rivoogen.com/cloud-services" />
  <meta 
    property="og:image"
    content="https://rivoogen.com/seo/cloud-services-banner.jpg"
  />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cloud Services | AWS, Azure, GCP | Rivoogen" />
  <meta 
    name="twitter:description"
    content="Modern cloud solutions including migration, DevOps, CI/CD, monitoring, and Kubernetes architecture."
  />
  <meta 
    name="twitter:image"
    content="https://rivoogen.com/seo/cloud-services-banner.jpg"
  />

  {/* STRUCTURED DATA (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cloud Services - AWS, Azure, GCP",
        "provider": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://rivoogen.com/logo.png"
        },
        "serviceType": "Cloud Computing & DevOps Services",
        "url": "https://www.rivoogen.com/cloud-services",
        "description": "Cloud solutions including AWS, Azure, GCP migration, DevOps automation, Kubernetes, security, CI/CD, and cloud optimization.",
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
      <CloudCapabilities />
      <Industries />
      <Workflow />
      <Tools />
      <Benefits />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default CloudPage;
