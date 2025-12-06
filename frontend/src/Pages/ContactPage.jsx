import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/Contact/HeroSection";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import MapSection from "../components/Contact/MapSection";
import BusinessHours from "../components/Contact/BusinessHours";
import FinalCTA from "../components/Contact/FinalCTA";
import { Helmet } from "react-helmet";


const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#map-section") {
      const el = document.getElementById("map-section");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // small delay ensures component is rendered
      }
    }
  }, [location]);

  return (
    <div className="w-full">
      <Helmet>
  {/* BASIC SEO */}
  <title>Contact Rivoogen | Software Development, AI, Automation & Cloud Solutions</title>
  <meta 
    name="description" 
    content="Contact Rivoogen for AI solutions, software development, automation tools, cloud engineering, and IT consulting. Based in Surat, Gujarat. Let's build your next project." 
  />
  <meta 
    name="keywords" 
    content="contact rivoogen, IT company Surat, software development company, AI development contact, automation company India, cloud engineering contact, custom software contact" 
  />

  {/* CANONICAL */}
  <link rel="canonical" href="https://www.rivoogen.com/contact-us" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Contact Rivoogen | AI, Automation & Software Development Experts" />
  <meta 
    property="og:description" 
    content="Reach out to Rivoogen for technology consulting, custom software development, AI solutions, automation pipelines, and cloud services." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.rivoogen.com/contact-us" />
  <meta 
    property="og:image" 
    content="https://rivoogen.com/seo/contact-banner.jpg"
  />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Rivoogen | Let's Build Something Great" />
  <meta 
    name="twitter:description" 
    content="Get in touch with Rivoogen for software development, AI automation, cloud services, and IT support." 
  />
  <meta 
    name="twitter:image" 
    content="https://rivoogen.com/seo/contact-banner.jpg"
  />

  {/* JSON-LD SCHEMA MARKUP */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Rivoogen",
        "url": "https://www.rivoogen.com/contact-us",
        "description": "Contact page for Rivoogen, an IT company providing AI, automation, cloud, and custom software development services.",
        "provider": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://rivoogen.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surat",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 79843 27489",
            "contactType": "customer support",
            "email": "rivoogen@gmail.com"
          }
        }
      }
    `}
  </script>
</Helmet>

      <HeroSection />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <BusinessHours />
      <FinalCTA />
    </div>
  );
};

export default ContactPage;
