import React from "react";
import colors from "../../theme/color";
import { ArrowRight, Zap, Award, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      style={{
        background: colors.ghostWhite,
        position: "relative",
      }}
      className="w-full px-6 py-16 md:px-16 md:py-20 lg:px-32 lg:py-24"
    >
      {/* Grid Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(${colors.alabasterGrey} 1px, transparent 1px), linear-gradient(90deg, ${colors.alabasterGrey} 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          opacity: 0.4,
        }}
      />

      {/* Bottom Dark Shadow - Much Darker */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: `linear-gradient(to bottom, transparent 0%, rgba(28, 28, 28, 0.35) 100%)`,
          pointerEvents: "none",
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            background: colors.ghostWhite,
            border: `2px solid ${colors.alabasterGrey}`,
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            color: colors.carbonBlack,
            marginBottom: "24px",
            boxShadow: "0 2px 8px rgba(28, 28, 28, 0.06)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: colors.carbonBlack,
              borderRadius: "50%",
            }}
          />
          Custom Software Development
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ 
            color: colors.carbonBlack,
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
          }}
        >
          Build Scalable Software
          <br />
          Solutions with Rivoogen
        </h1>

        {/* Description */}
        <p 
          className="text-base md:text-lg max-w-2xl mx-auto mb-8"
          style={{ 
            color: colors.carbonBlack,
            opacity: 0.7,
            lineHeight: "1.6",
          }}
        >
          We create custom, high-performance applications tailored to your business needs. 
          From concept to deployment, Rivoogen delivers scalable and secure software solutions.
        </p>
        
        {/* Trust Indicators with Icons */}
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <div
            style={{
              padding: "12px 20px",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Zap size={18} style={{ color: colors.carbonBlack }} strokeWidth={2.5} />
            <div 
              className="text-sm font-semibold"
              style={{ color: colors.carbonBlack }}
            >
              Fast Delivery
            </div>
          </div>

          <div
            style={{
              padding: "12px 20px",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Award size={18} style={{ color: colors.carbonBlack }} strokeWidth={2.5} />
            <div 
              className="text-sm font-semibold"
              style={{ color: colors.carbonBlack }}
            >
              100% Custom Built
            </div>
          </div>

          <div
            style={{
              padding: "12px 20px",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Shield size={18} style={{ color: colors.carbonBlack }} strokeWidth={2.5} />
            <div 
              className="text-sm font-semibold"
              style={{ color: colors.carbonBlack }}
            >
              Secure & Scalable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;