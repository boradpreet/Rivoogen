import React from "react";
import colors from "../../theme/color";
import { Sparkles, Target, Zap, Users } from "lucide-react";

const CompanyStory = () => {
  const values = [
    { icon: Sparkles, label: "Innovation" },
    { icon: Target, label: "Performance" },
    { icon: Zap, label: "Scalability" },
    { icon: Users, label: "User Experience" },
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:py-20 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.carbonBlack} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                background: colors.carbonBlack,
                color: colors.ghostWhite,
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              ABOUT RIVOOGEN
            </div>

            {/* Heading */}
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Our Story
            </h2>

            {/* Description */}
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Rivoogen was founded with a mission to simplify technology for businesses.
              As a startup, we bring passion, innovation, and modern engineering practices
              to every project. Our team has expertise across AI, automation, cloud
              platforms, SaaS development, and semiconductor engineering.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              We believe in building digital products that not only solve immediate
              challenges but also prepare businesses for the future. Every solution
              we deliver is driven by performance, scalability, and user experience.
            </p>
          </div>

          {/* Right Side - Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: colors.carbonBlack,
                    border: `2px solid rgba(250, 250, 255, 0.1)`,
                    borderRadius: "20px",
                    padding: "32px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    minHeight: "180px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(28, 28, 28, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(250, 250, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(250, 250, 255, 0.1)";
                  }}
                >
                  {/* Background Pattern */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0.05,
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(250, 250, 255, 0.1)",
                      border: `2px solid rgba(250, 250, 255, 0.2)`,
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Icon size={32} style={{ color: colors.ghostWhite }} strokeWidth={2} />
                  </div>

                  {/* Label */}
                  <h3 
                    className="text-lg font-bold"
                    style={{ 
                      color: colors.ghostWhite,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {value.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;