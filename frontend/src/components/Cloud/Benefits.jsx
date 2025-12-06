import React from "react";
import colors from "../../theme/color";
import { CheckCircle, DollarSign, Zap, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Improved Reliability",
      description: "Experience 99.9% uptime with enterprise-grade infrastructure and automatic failover",
      icon: CheckCircle,
    },
    {
      title: "Lower Operational Costs",
      description: "Reduce infrastructure costs by up to 60% with smart cloud automation",
      icon: DollarSign,
    },
    {
      title: "Faster Deployments",
      description: "Ship features 10x faster with automated CI/CD pipelines and delivery",
      icon: Zap,
    },
    {
      title: "Stronger Security",
      description: "24/7 threat detection, compliance, and real-time monitoring",
      icon: Shield,
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Heading */}
          <div className="lg:sticky lg:top-32">
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                background: colors.softLinen,
                border: `1px solid ${colors.alabasterGrey}`,
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                color: colors.carbonBlack,
                marginBottom: "24px",
              }}
            >
              BENEFITS
            </div>

            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Why Choose
              <br />
              Rivoogen Cloud
            </h2>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Transform your infrastructure with proven cloud solutions that deliver
              measurable results. Experience the power of enterprise-grade technology
              with Rivoogen.
            </p>
          </div>

          {/* Right Side - Benefits in 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
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
                      width: "56px",
                      height: "56px",
                      background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                      border: `2px solid ${colors.alabasterGrey}`,
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={28} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-lg font-bold mb-2"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;