import React from "react";
import colors from "../../theme/color";
import { CheckCircle, Shield, Zap, Cloud, BarChart3 } from "lucide-react";

const AboutService = () => {
  const points = [
    {
      icon: Shield,
      text: "Secure, scalable and high-performance cloud infrastructure",
    },
    {
      icon: Cloud,
      text: "Seamless cloud migration with zero downtime",
    },
    {
      icon: Zap,
      text: "Automated CI/CD pipelines for faster deployments",
    },
    {
      icon: BarChart3,
      text: "End-to-end monitoring, logging and optimization",
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:px-32 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.platinum} 100%)`,
        color: colors.text,
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
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.carbonBlack} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: `radial-gradient(circle, ${colors.softLinen}50 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "8px 18px",
                background: colors.carbonBlack,
                color: colors.ghostWhite,
                borderRadius: "24px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "24px",
              }}
            >
              WHY RIVOOGEN
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}
            >
              Why Cloud Services
              <br />
              Are Essential
            </h2>

            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: colors.carbonBlack, opacity: 0.7 }}
            >
              The modern world runs on cloud infrastructure. Rivoogen ensures your business
              can scale efficiently, operate securely, and deploy faster using cloud-native
              technologies and DevOps automation.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: colors.carbonBlack }}
                >
                  99.9%
                </div>
                <div 
                  className="text-sm"
                  style={{ color: colors.carbonBlack, opacity: 0.6 }}
                >
                  Uptime
                </div>
              </div>
              <div
                style={{
                  width: "1px",
                  background: colors.alabasterGrey,
                }}
              />
              <div>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: colors.carbonBlack }}
                >
                  50%
                </div>
                <div 
                  className="text-sm"
                  style={{ color: colors.carbonBlack, opacity: 0.6 }}
                >
                  Cost Reduction
                </div>
              </div>
              <div
                style={{
                  width: "1px",
                  background: colors.alabasterGrey,
                }}
              />
              <div>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: colors.carbonBlack }}
                >
                  3x
                </div>
                <div 
                  className="text-sm"
                  style={{ color: colors.carbonBlack, opacity: 0.6 }}
                >
                  Faster Deploy
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: colors.ghostWhite,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "16px",
                    padding: "28px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(28, 28, 28, 0.12)";
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
                      background: colors.softLinen,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon 
                      size={24} 
                      style={{ color: colors.carbonBlack }} 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Text */}
                  <p 
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: colors.carbonBlack }}
                  >
                    {item.text}
                  </p>

                  {/* Check mark */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                    }}
                  >
                    <CheckCircle 
                      size={18} 
                      style={{ color: colors.carbonBlack, opacity: 0.3 }} 
                    />
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

export default AboutService;