import React from "react";
import colors from "../../theme/color";

const WhatAreSemiconductors = () => {
  return (
    <section
      className="relative px-6 py-20 md:py-24 lg:py-28 md:px-16 lg:px-32 overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: colors.platinum }}
      />
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-25 blur-3xl"
        style={{ background: colors.softLinen }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative frame */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-50"
              style={{ 
                background: `linear-gradient(135deg, ${colors.platinum}, ${colors.softLinen})`,
              }}
            />
            
            {/* Main image container */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: `4px solid ${colors.ghostWhite}`,
              }}
            >
              <img
                src="https://i.pinimg.com/1200x/c6/34/ac/c634ac8280cfef6dc6e0eb6545d7cad1.jpg"
                alt="Semiconductor Technology"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              
              {/* Subtle overlay gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, ${colors.carbonBlack}10 100%)`,
                }}
              />
            </div>

            {/* Decorative accent bar */}
            <div 
              className="absolute -bottom-6 left-8 right-8 h-3 rounded-full blur-sm"
              style={{
                background: `linear-gradient(90deg, ${colors.carbonBlack}, ${colors.border})`,
                opacity: 0.3,
              }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Section Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: colors.carbonBlack,
                color: colors.ghostWhite,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              FOUNDATION
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ color: colors.carbonBlack }}
            >
              What Are Semiconductors?
            </h2>

            {/* Description */}
            <div className="space-y-5">
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: colors.text }}
              >
                Semiconductors are special materials like silicon that have electrical
                properties between a conductor and an insulator. These materials are
                used to make chips that power almost every modern device — smartphones,
                laptops, cars, medical devices, satellites, artificial intelligence, and
                industrial machines.
              </p>
              
              <p 
                className="text-lg md:text-xl leading-relaxed font-medium"
                style={{ 
                  color: colors.carbonBlack,
                  paddingLeft: "1.5rem",
                  borderLeft: `4px solid ${colors.carbonBlack}`,
                }}
              >
                They are the backbone of the entire digital world and are critical to
                innovation in every industry.
              </p>
            </div>

            {/* Key applications */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Smartphones",
                "AI Systems", 
                "Automotive",
                "Medical Devices",
                "Satellites",
                "IoT",
              ].map((app, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: colors.surface,
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatAreSemiconductors;