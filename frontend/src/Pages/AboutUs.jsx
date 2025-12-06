import React from "react";
import HeroSection from "../components/AboutUs/HeroSection";
import CompanyStory from "../components/AboutUs/CompanyStory";
import MissionVision from "../components/AboutUs/MissionVision";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";
import OurValues from "../components/AboutUs/OurValues";
import OurProcess from "../components/AboutUs/OurProcess";
import TeamSection from "../components/AboutUs/TeamSection";
import FinalCTA from "../components/AboutUs/FinalCTA";
import { Helmet } from "react-helmet";


const AboutUsPage = () => {
  return (
    <div className="w-full">
      <Helmet>
        {/* BASIC SEO */}
        <title>About Rivoogen | AI, Automation, Cloud & Software Development Company</title>
        <meta
          name="description"
          content="Learn about Rivoogen — a modern AI, Cloud, Automation, and Software Engineering company helping startups and enterprises build scalable digital solutions. Discover our mission, vision, values, and leadership."
        />
        <meta
          name="keywords"
          content="about Rivoogen, software development company India, AI company, cloud engineering, automation tools company, IT startup, SaaS development company"
        />

        {/* CANONICAL URL */}
        <link
          rel="canonical"
          href="https://www.rivoogen.com/about-us"
        />

        {/* OPEN GRAPH (FACEBOOK / LINKEDIN) */}
        <meta property="og:title" content="About Rivoogen | Innovating with AI, Cloud & Automation" />
        <meta
          property="og:description"
          content="Rivoogen is a next-generation AI, Cloud, and Automation company helping businesses build future-ready digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rivoogen.com/about-us" />
        <meta
          property="og:image"
          content="https://rivoogen.com/seo/about-banner.jpg"
        />

        {/* TWITTER META TAGS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Rivoogen | Transforming Businesses with Technology" />
        <meta
          name="twitter:description"
          content="Explore our vision, mission, values, team, and process — and see how Rivoogen builds impactful digital products using AI, Cloud, and Automation."
        />
        <meta
          name="twitter:image"
          content="https://rivoogen.com/seo/about-banner.jpg"
        />

        {/* STRUCTURED DATA (JSON-LD) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Rivoogen",
        "url": "https://www.rivoogen.com/about-us",
        "description": "About page of Rivoogen — an AI, Cloud, and Automation technology company.",
        "publisher": {
          "@type": "Organization",
          "name": "Rivoogen",
          "url": "https://www.rivoogen.com",
          "logo": "https://www.rivoogen.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surat",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
          }
        }
      }
    `}
        </script>
      </Helmet>

      <HeroSection />
      <CompanyStory />
      <MissionVision />
      <WhyChooseUs />
      <OurValues />
      <OurProcess />
      <TeamSection />
      <FinalCTA />
    </div>
  );
};

export default AboutUsPage;
