import React from "react";
import colors from "../../theme/color";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="px-6 py-14 md:py-16 md:px-16 lg:px-32 relative overflow-hidden"
      style={{
        background: colors.carbonBlack,
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ background: colors.ghostWhite }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5"
        style={{ background: colors.ghostWhite }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: 'rgba(250, 250, 255, 0.1)',
              border: `1px solid rgba(250, 250, 255, 0.2)`,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: colors.ghostWhite }}></span>
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: colors.ghostWhite }}
            >
              About Rivoogen
            </p>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ 
              color: colors.ghostWhite,
              letterSpacing: '-0.02em',
            }}
          >
            Building the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Future</span>
              <div 
                className="absolute bottom-2 left-0 right-0 h-3 -z-10"
                style={{ background: 'rgba(250, 250, 255, 0.2)' }}
              />
            </span>{" "}
            of Digital Innovation
          </h1>

          {/* Description */}
          <p 
            className="text-lg mb-7 leading-relaxed max-w-3xl"
            style={{ 
              color: colors.alabasterGrey, 
              opacity: 0.9
            }}
          >
            We are a modern startup focused on AI, Cloud, Automation, and Software
            Engineering—building powerful digital solutions for future-ready businesses.
          </p>

          {/* CTA Buttons - Only Contact Us */}
          <div className="flex flex-wrap gap-3 mb-7">

            <Link
              to="/contact-us"
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'transparent',
                color: colors.ghostWhite,
                border: `2px solid ${colors.ghostWhite}`
              }}
            >
              Contact Us
            </Link>

          </div>

          {/* Key Focus Areas */}
          <div className="flex flex-wrap gap-2.5">
            {["AI & ML", "Cloud Computing", "Automation", "Software Engineering"].map((item, index) => (
              <div 
                key={index}
                className="px-3.5 py-2 rounded-lg text-sm font-medium"
                style={{ 
                  background: 'rgba(250, 250, 255, 0.1)',
                  color: colors.ghostWhite,
                  border: `1px solid rgba(250, 250, 255, 0.2)`
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '100px', marginBottom: '-1px' }}
      >
        <path
          d="M0,50 C240,85 480,85 720,70 C960,50 1200,35 1440,50 L1440,100 L0,100 Z"
          style={{ fill: colors.ghostWhite }}
        />
      </svg>
    </section>
  );
};

export default HeroSection;
