import React from "react";
import colors from "../../theme/color";
import { Code, Smartphone, Cloud, Zap } from "lucide-react";

const AboutService = () => {
  const features = [
    {
      icon: Code,
      title: "Fully Custom Built",
      description: "Tailored software built from scratch",
    },
    {
      icon: Zap,
      title: "Scale & Performance",
      description: "Enterprise-grade speed and security",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Web, mobile, desktop & cloud support",
    },
    {
      icon: Cloud,
      title: "Workflow Automation",
      description: "End-to-end process automation",
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-28 lg:px-32 relative overflow-hidden"
      style={{ 
        background: colors.ghostWhite,
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
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.carbonBlack} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: colors.carbonBlack,
                color: colors.ghostWhite,
                borderRadius: "24px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              CUSTOM SOFTWARE DEVELOPMENT
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Why Choose Rivoogen for
              <br />
              Custom Software?
            </h2>

            <p 
              className="text-lg leading-relaxed mb-8"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Off-the-shelf tools don't always match your workflow. Rivoogen builds
              completely tailored solutions that perfectly fit your business
              processes, helping you scale efficiently and stay future-ready.
            </p>
          </div>

          {/* Right Side - 2x2 Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: colors.ghostWhite,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.1)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                      border: `2px solid ${colors.alabasterGrey}`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-base font-bold mb-2"
                    style={{ color: colors.carbonBlack }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      color: colors.carbonBlack,
                      opacity: 0.7,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;