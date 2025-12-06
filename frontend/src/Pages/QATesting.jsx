import React from 'react'
import HeroSection from '../components/QA-Testing/HeroSection'
import AboutService from '../components/QA-Testing/AboutService'
import Services from '../components/QA-Testing/Services'
import Workflow from '../components/QA-Testing/Workflow'
import Tools from '../components/QA-Testing/Tools'
import Benefits from '../components/QA-Testing/Benefits'
import FAQ from '../components/QA-Testing/FAQ'
import FinalCTA from '../components/QA-Testing/FinalCTA'
import { Helmet } from "react-helmet";


function QATesting() {
  return (
    <div>
      <>
        <Helmet>
          {/* BASIC SEO TAGS */}
          <title>QA Testing Services | Manual, Automation, Performance, Security Testing | Rivoogen</title>
          <meta
            name="description"
            content="Rivoogen provides expert QA Testing services including manual testing, automation testing, performance testing, security testing, mobile testing, API testing, and 24/7 monitoring to ensure flawless software delivery."
          />
          <meta
            name="keywords"
            content="QA testing services, software testing company, automation testing, manual testing, performance testing, security testing, mobile app testing, Rivoogen QA"
          />

          {/* CANONICAL URL */}
          <link rel="canonical" href="https://www.rivoogen.com/qa-testing" />

          {/* OPEN GRAPH TAGS */}
          <meta property="og:title" content="QA Testing Services | Rivoogen" />
          <meta
            property="og:description"
            content="Get enterprise-grade QA Testing services: Manual, Automation, Performance, Security, and Mobile App Testing. Ensure stability, speed, and reliability with Rivoogen."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.rivoogen.com/qa-testing" />
          <meta
            property="og:image"
            content="https://rivoogen.com/seo/qa-testing-banner.jpg"
          />

          {/* TWITTER CARDS */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="QA Testing Services | Rivoogen" />
          <meta
            name="twitter:description"
            content="End-to-end QA Testing services including automation, manual, API, performance & security testing for flawless software delivery."
          />
          <meta
            name="twitter:image"
            content="https://rivoogen.com/seo/qa-testing-banner.jpg"
          />

          {/* STRUCTURED DATA JSON-LD */}
          <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "QA Testing Services",
          "provider": {
            "@type": "Organization",
            "name": "Rivoogen",
            "url": "https://www.rivoogen.com",
            "logo": "https://rivoogen.com/logo.png"
          },
          "url": "https://www.rivoogen.com/qa-testing",
          "description": "Rivoogen offers manual testing, automation testing, API testing, performance testing, security testing, and mobile app testing with 24/7 support.",
          "serviceType": "Software Quality Assurance",
          "areaServed": "Worldwide",
          "offers": {
            "@type": "Offer",
            "price": "Contact for pricing",
            "priceCurrency": "USD"
          }
        }
      `}
          </script>
        </Helmet>
      </>
      <HeroSection />
      <AboutService />
      <Services />
      <Workflow />
      <Tools />
      <Benefits />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default QATesting