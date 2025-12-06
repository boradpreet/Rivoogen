import React from 'react'
import HeroSection from '../components/AIML/HeroSection'
import AboutService from '../components/AIML/AboutService'
import Capabilities from '../components/AIML/Capabilities'
import WhyChooseUs from '../components/AIML/WhyChooseUs'
import Industries from '../components/AIML/Industries'
import FinalCTA from '../components/AIML/FinalCTA'
import CaseStudies from '../components/AIML/CaseStudies'
import Technologies from '../components/AIML/Technologies'
import AIProcess from '../components/AIML/AIProcess'
import FAQ from '../components/AIML/FAQ'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from "react-helmet";

function AIMLPage() {
  return (
    <div>
      <Helmet>
        {/* ===================== PRIMARY SEO ===================== */}
        <title>
          AI & Machine Learning Services | Automation, NLP, Computer Vision, Predictive Analytics – Rivoogen
        </title>

        <meta
          name="description"
          content="Rivoogen provides end-to-end AI & Machine Learning solutions including automation, predictive analytics, NLP, computer vision, custom ML model development, AI integration, and enterprise-grade deployment for businesses across all industries."
        />

        <meta
          name="keywords"
          content="AI solutions, machine learning services, NLP development, computer vision, predictive analytics, AI company India, ML automation, AI consulting, enterprise AI, Rivoogen"
        />

        <link rel="canonical" href="https://www.rivoogen.com/ai-ml" />

        {/* ===================== OPEN GRAPH ===================== */}
        <meta property="og:title" content="AI & Machine Learning Services | Rivoogen" />
        <meta
          property="og:description"
          content="Transform your business with AI-powered automation, predictive analytics, NLP systems, and computer vision solutions built by Rivoogen."
        />
        <meta
          property="og:image"
          content="https://www.rivoogen.com/og/ai-ml-service.jpg"
        />
        <meta property="og:url" content="https://www.rivoogen.com/ai-ml" />
        <meta property="og:type" content="website" />

        {/* ===================== TWITTER ===================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI & ML Development Services – Rivoogen" />
        <meta
          name="twitter:description"
          content="AI automation, NLP, computer vision, predictive analytics, and enterprise ML engineering."
        />
        <meta
          name="twitter:image"
          content="https://www.rivoogen.com/og/ai-ml-banner.jpg"
        />

        {/* ===================== STRUCTURED DATA ===================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI & Machine Learning Solutions",
            provider: {
              "@type": "Organization",
              name: "Rivoogen",
              url: "https://www.rivoogen.com",
            },
            description:
              "AI automation, ML predictive modelling, NLP systems, computer vision, and AI deployment services by Rivoogen.",
            areaServed: "Worldwide",
            serviceType: [
              "AI Automation",
              "Machine Learning Development",
              "Predictive Analytics",
              "NLP Engineering",
              "Computer Vision",
              "AI Integration",
            ],
            offers: {
              "@type": "Offer",
              price: "Contact us",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
      <HeroSection />
      <AboutService />
      <Capabilities />
      <WhyChooseUs />
      <Industries />
      <AIProcess />
      <Technologies />
      {/* <CaseStudies/> */}
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default AIMLPage