import React from "react";
import colors from "../../theme/color";
import { Sparkles, TrendingUp, Shield, Zap, Code, Layers } from "lucide-react";

const Benefits = () => {
  const leftBenefits = [
    {
      icon: Sparkles,
      title: "100% Custom-Built",
      description: "Tailored solutions for your unique workflows",
    },
    {
      icon: TrendingUp,
      title: "Cost Savings & Scalability",
      description: "Grow without recurring licensing fees",
    },
    {
      icon: Shield,
      title: "Higher Security",
      description: "Enterprise-grade protection and reliability",
    },
  ];

  const rightBenefits = [
    {
      icon: Zap,
      title: "Future-Ready Architecture",
      description: "Modern stack with cloud support",
    },
    {
      icon: Code,
      title: "Full Ownership",
      description: "Complete control over your software",
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      description: "Works with your existing systems",
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-28 lg:px-32 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, ${colors.platinum} 0%, ${colors.ghostWhite} 100%)`,
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
        {/* Header */}
        <div className="text-center mb-16">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: colors.carbonBlack,
              color: colors.ghostWhite,
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            KEY BENEFITS
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Benefits of Custom Software
            <br />
            by Rivoogen
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
            }}
          >
            Discover how custom-built solutions deliver lasting value for your business
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Benefits */}
          <div className="space-y-6">
            {leftBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
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
                    e.currentTarget.style.transform = "translateX(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.1)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  <div className="flex items-start gap-3">
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
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 
                        className="text-base font-bold mb-1"
                        style={{ color: colors.carbonBlack }}
                      >
                        {benefit.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ 
                          color: colors.carbonBlack,
                          opacity: 0.7,
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

          {/* Center Illustration - Custom Software Development SVG */}
          <div className="hidden lg:flex justify-center">
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                position: "relative",
              }}
            >
              {/* SVG Illustration */}
              <svg
                viewBox="0 0 400 400"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill={colors.softLinen}
                  opacity="0.5"
                />

                {/* Main Monitor/Screen */}
                <rect
                  x="100"
                  y="120"
                  width="200"
                  height="140"
                  rx="8"
                  fill={colors.carbonBlack}
                />
                <rect
                  x="110"
                  y="130"
                  width="180"
                  height="100"
                  rx="4"
                  fill={colors.platinum}
                />

                {/* Code Lines */}
                <line x1="125" y1="150" x2="200" y2="150" stroke={colors.carbonBlack} strokeWidth="3" strokeLinecap="round" />
                <line x1="125" y1="170" x2="250" y2="170" stroke={colors.carbonBlack} strokeWidth="3" strokeLinecap="round" />
                <line x1="125" y1="190" x2="220" y2="190" stroke={colors.carbonBlack} strokeWidth="3" strokeLinecap="round" />
                <line x1="125" y1="210" x2="240" y2="210" stroke={colors.carbonBlack} strokeWidth="3" strokeLinecap="round" />

                {/* Monitor Stand */}
                <rect
                  x="180"
                  y="260"
                  width="40"
                  height="20"
                  fill={colors.carbonBlack}
                />
                <rect
                  x="150"
                  y="280"
                  width="100"
                  height="8"
                  rx="4"
                  fill={colors.carbonBlack}
                />

                {/* Floating Code Brackets */}
                <text
                  x="60"
                  y="180"
                  fontSize="40"
                  fontWeight="bold"
                  fill={colors.carbonBlack}
                  opacity="0.3"
                >
                  {'<'}
                </text>
                <text
                  x="320"
                  y="180"
                  fontSize="40"
                  fontWeight="bold"
                  fill={colors.carbonBlack}
                  opacity="0.3"
                >
                  {'>'}
                </text>

                {/* Decorative Circles */}
                <circle cx="80" cy="100" r="8" fill={colors.alabasterGrey} />
                <circle cx="320" cy="280" r="10" fill={colors.alabasterGrey} />
                <circle cx="340" cy="120" r="6" fill={colors.softLinen} />
                <circle cx="60" cy="260" r="12" fill={colors.softLinen} />

                {/* Gear Icon */}
                <circle cx="340" cy="240" r="18" fill="none" stroke={colors.carbonBlack} strokeWidth="3" />
                <circle cx="340" cy="240" r="8" fill={colors.carbonBlack} />

                {/* Lightning Bolt */}
                <path
                  d="M 70 320 L 60 340 L 70 340 L 65 360 L 80 335 L 70 335 Z"
                  fill={colors.carbonBlack}
                />
              </svg>
            </div>
          </div>

          {/* Right Benefits */}
          <div className="space-y-6">
            {rightBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
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
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.1)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  <div className="flex items-start gap-3">
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
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 
                        className="text-base font-bold mb-1"
                        style={{ color: colors.carbonBlack }}
                      >
                        {benefit.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ 
                          color: colors.carbonBlack,
                          opacity: 0.7,
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
        </div>
      </div>
    </section>
  );
};

export default Benefits;