import React from "react";
import colors from "../../theme/color";
import { CheckCircle, Zap, Target, TrendingUp, Layers } from "lucide-react";

const AboutService = () => {
  const points = [
    {
      title: "Automate Repetitive Tasks",
      description: "Free your team from manual work and focus on what matters",
      icon: Zap,
    },
    {
      title: "Eliminate Human Errors",
      description: "System-driven workflows ensure accuracy and consistency",
      icon: Target,
    },
    {
      title: "Improve Productivity",
      description: "Boost operational efficiency across your organization",
      icon: TrendingUp,
    },
    {
      title: "Integrate Multiple Tools",
      description: "Connect all your systems into one automated pipeline",
      icon: Layers,
    },
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
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
              WHY AUTOMATION
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              Why Automation Tools
              <br />
              Are Important
            </h2>

            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Automation helps businesses reduce manual workload, increase accuracy,
              and scale efficiently. Rivoogen builds custom automation pipelines,
              bots, and workflow systems for businesses of all sizes.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Transform your operations with intelligent automation that works 24/7,
              eliminates bottlenecks, and drives sustainable growth.
            </p>
          </div>

          {/* Right Side - 2x2 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {points.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: colors.ghostWhite,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "20px",
                    padding: "28px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(28, 28, 28, 0.12)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  {/* Icon */}
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
                    {point.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      color: colors.carbonBlack,
                      opacity: 0.7,
                    }}
                  >
                    {point.description}
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