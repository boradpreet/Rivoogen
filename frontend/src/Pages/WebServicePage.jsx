import React from 'react'
import AboutWeb from '../components/webServices/AboutWeb'
import WebCTA from '../components/webServices/WebCTA'
import WebProcess from '../components/webServices/WebProcess'
import WebServices from '../components/webServices/WebServices'
import WebTechnologies from '../components/webServices/WebTechnologies'
import WhyChooseWeb from '../components/webServices/WhyChooseWeb'
import { Helmet } from "react-helmet";

function WebServicePage() {
    return (
        <div>
            <Helmet>
                <title>Web Development Services | Rivoogen | Modern Websites, Web Apps & UI/UX</title>

                <meta
                    name="description"
                    content="Rivoogen provides professional web development services including custom websites, web applications, UI/UX design, backend APIs, cloud deployment, and maintenance support using modern technologies like React, Node, AWS, and Tailwind."
                />

                <meta
                    name="keywords"
                    content="web development services, web design company, custom web applications, Rivoogen, UI UX design, React development, Node.js backend, website development India"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Web Development Services | Rivoogen" />
                <meta property="og:description" content="Build modern, fast, conversion-ready web applications with Rivoogen’s expert development team." />
                <meta property="og:image" content="https://rivoogen.com/og/web-services.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rivoogen.com/web-services" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* Schema Markup (JSON-LD) */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "serviceType": "Web Development Services",
                      "provider": {
                        "@type": "Organization",
                        "name": "Rivoogen",
                        "url": "https://rivoogen.com"
                      },
                      "description": "Rivoogen builds high-performance websites, scalable web applications, UI/UX designs, APIs, and cloud-powered digital solutions.",
                      "areaServed": "Worldwide",
                      "offers": {
                        "@type": "Offer",
                        "price": "Contact for pricing",
                        "priceCurrency": "INR"
                      }
                    }
                    `}
                </script>
            </Helmet>

            <AboutWeb />
            <WebServices />
            <WhyChooseWeb />
            <WebTechnologies />
            <WebProcess />
            <WebCTA />
        </div>
    )
}

export default WebServicePage