import React from "react";
import colors from "../../theme/color";

const HeroSection = () => {
  return (
    <section
      className="px-6 py-16 md:px-16 md:py-20 lg:px-32 lg:py-24 relative overflow-hidden"
      style={{
        background: colors.carbonBlack,
        position: "relative",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(250, 250, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 250, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(250, 250, 255, 0.1) 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "8%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(250, 250, 255, 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            background: "rgba(250, 250, 255, 0.1)",
            border: `1px solid rgba(250, 250, 255, 0.2)`,
            borderRadius: "24px",
            fontSize: "13px",
            fontWeight: "600",
            color: colors.ghostWhite,
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              background: colors.ghostWhite,
              borderRadius: "50%",
            }}
          />
          Industries We Serve
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ 
            color: colors.ghostWhite,
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}
        >
          Custom Technology
          <br />
          Solutions Across
          <br />
          Industries
        </h1>

        {/* Description */}
        <p 
          className="text-base md:text-lg max-w-3xl"
          style={{ 
            color: colors.alabasterGrey,
            lineHeight: "1.6",
          }}
        >
          Rivoogen provides custom technology solutions across multiple industries
          including AI, Cloud, Automation, Semiconductor, and Enterprise Systems.
        </p>
      </div>

      {/* Bottom Wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d="M0,40 C300,80 500,0 800,40 C1000,60 1100,40 1200,60 L1200,120 L0,120 Z"
            style={{
              fill: colors.ghostWhite,
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;