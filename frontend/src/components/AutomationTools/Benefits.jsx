import React from "react";
import colors from "../../theme/color";
import { Sparkles, TrendingDown, Target, Layers } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Reduced Manual Work",
      description: "Save time with automation",
    },
    {
      icon: TrendingDown,
      title: "Lower Operational Cost",
      description: "Cut costs efficiently",
    },
    {
      icon: Target,
      title: "Improved Accuracy",
      description: "Eliminate human errors",
    },
    {
      icon: Layers,
      title: "Scalable Pipelines",
      description: "Grow with your business",
    },
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:py-20 lg:px-32 relative overflow-hidden"
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
          {/* Left Side - 1x4 Dark Theme Cards */}
          <div className="space-y-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: colors.carbonBlack,
                    border: `2px solid rgba(250, 250, 255, 0.1)`,
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(28, 28, 28, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(250, 250, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(250, 250, 255, 0.1)";
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "rgba(250, 250, 255, 0.1)",
                        border: `2px solid rgba(250, 250, 255, 0.2)`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} style={{ color: colors.ghostWhite }} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 
                        className="text-base font-bold mb-1"
                        style={{ color: colors.ghostWhite }}
                      >
                        {benefit.title}
                      </h3>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: colors.alabasterGrey,
                          opacity: 0.9,
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Description */}
          <div>
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
              KEY BENEFITS
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Benefits of Rivoogen
              <br />
              Automation Tools
            </h2>

            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Transform your business operations with intelligent automation solutions 
              that save time, reduce costs, and improve accuracy across all your workflows.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Our automation tools are built to scale with your business, ensuring 
              long-term efficiency and reliability as you grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;