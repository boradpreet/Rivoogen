import React from 'react'
import { Helmet } from "react-helmet";
import HeroSlider from '../components/HeroSlider'
import CTASection from '../components/CTASection'
import BlogSection from '../components/BlogSection'
import TestimonialsSection from '../components/TestimonialsSection'
import IndustriesSection from '../components/IndustriesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import TechnologiesSection from '../components/TechnologiesSection'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Rivoogen | AI, Automation, Semiconductor & Software Engineering Company</title>
                <meta
                    name="description"
                    content="Rivoogen is an innovation-driven IT company delivering AI/ML solutions, automation tools, semiconductor engineering, cloud services, software consulting, and enterprise web development."
                />
                <meta
                    name="keywords"
                    content="AI solutions, automation tools, semiconductor engineering, cloud services, IT company india, web development, custom software, Rivoogen"
                />
                <link rel="canonical" href="https://www.rivoogen.com/" />

                {/* OG */}
                <meta property="og:title" content="Rivoogen – Innovation Driven IT Company" />
                <meta property="og:description" content="We build AI-powered solutions, semiconductor engineering, automation tools, and scalable software systems." />
                <meta property="og:image" content="https://www.rivoogen.com/og/homepage-og.jpg" />
                <meta property="og:url" content="https://www.rivoogen.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Rivoogen",
                        url: "https://www.rivoogen.com",
                        logo: "https://www.rivoogen.com/logo.png",
                        description:
                            "Rivoogen specializes in AI/ML, semiconductor engineering, cloud development, automation solutions, and custom software.",
                    })}
                </script>
            </Helmet>
            <HeroSlider />
            <ServicesSection />
            <AboutSection />
            <WhyChooseUs />
            <IndustriesSection />
            <TestimonialsSection />
            <TechnologiesSection />
            <BlogSection />
            <CTASection />
        </div>
    )
}

export default HomePage