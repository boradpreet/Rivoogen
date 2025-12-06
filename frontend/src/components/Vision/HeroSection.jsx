import React from "react";
import colors from "../../theme/color";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: colors.carbonBlack,
      }}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Semiconductor Background Image */}
        <img
          src="https://i.pinimg.com/1200x/b4/d5/4a/b4d54a01bcbe87348a45b3d2a36ecfc9.jpg"
          alt="Semiconductor Background"
          className="w-full h-full object-cover"
        />
        
        {/* Black Gradient Overlays */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${colors.carbonBlack} 0%, ${colors.carbonBlack}f0 40%, ${colors.carbonBlack}90 60%, ${colors.carbonBlack}40 100%)`,
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${colors.carbonBlack}20 0%, ${colors.carbonBlack}60 100%)`,
          }}
        />
      </div>

      {/* Decorative wave at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 z-20"
        style={{
          background: colors.ghostWhite,
          clipPath: "ellipse(100% 100% at 50% 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-6 py-16 md:py-20 lg:py-24 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6 max-w-2xl">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                style={{
                  backgroundColor: `${colors.ghostWhite}15`,
                  border: `1px solid ${colors.alabasterGrey}30`,
                  color: colors.ghostWhite,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                ADVANCED TECHNOLOGY
              </div>

              {/* Main Heading */}
              <h1 
                className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ color: colors.ghostWhite }}
              >
                Semiconductor
                <br />
                <span 
                  className="inline-block mt-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.platinum} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Services
                </span>
              </h1>

              {/* Description */}
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ 
                  color: colors.alabasterGrey,
                }}
              >
                We help build the next generation of chips and semiconductor ecosystems
                – from design and EDA to manufacturing consultation, AI optimisation,
                and testing.
              </p>

            </div>

            {/* Right Side - Featured Image Card */}
            <div className="relative lg:h-[420px] flex items-center justify-end">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-40 blur-3xl"
                style={{
                  background: `radial-gradient(circle, #4a90e2, transparent)`,
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;