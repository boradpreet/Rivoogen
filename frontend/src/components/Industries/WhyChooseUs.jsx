import React from "react";
import colors from "../../theme/color";
import { 
  Award, 
  Zap, 
  Users, 
  Cloud, 
  Rocket 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Deep Industry Expertise",
      description: "Proven experience across multiple industries and domains",
    },
    {
      icon: Zap,
      title: "Startup-Friendly & Enterprise-Ready",
      description: "Solutions that scale from MVP to enterprise deployment",
    },
    {
      icon: Users,
      title: "Experienced Engineering Team",
      description: "Expert developers with cutting-edge technical knowledge",
    },
    {
      icon: Cloud,
      title: "Cloud, AI & Automation Specialists",
      description: "Deep expertise in modern cloud and AI technologies",
    },
    {
      icon: Rocket,
      title: "Faster Delivery",
      description: "Rapid deployment with modern tech stacks and agile methods",
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            WHY CHOOSE US
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Why Rivoogen?
          </h2>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
              lineHeight: "1.6",
            }}
          >
            We combine technical excellence with business understanding to deliver solutions that drive growth
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "20px",
                  padding: "32px 28px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
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
                {/* Top Accent Line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${colors.carbonBlack} 0%, ${colors.alabasterGrey} 100%)`,
                  }}
                />

                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    width: "32px",
                    height: "32px",
                    background: colors.softLinen,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "800",
                    color: colors.carbonBlack,
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={28} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ 
                    color: colors.carbonBlack,
                    lineHeight: "1.3",
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ 
                    color: colors.carbonBlack,
                    opacity: 0.7,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;