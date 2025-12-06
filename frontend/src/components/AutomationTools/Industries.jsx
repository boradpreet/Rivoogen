import React from "react";
import colors from "../../theme/color";
import { 
  ShoppingCart, 
  DollarSign, 
  HeartPulse, 
  Factory, 
  GraduationCap, 
  Wifi, 
  Home, 
  Cloud 
} from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "E-Commerce", icon: ShoppingCart },
    { name: "FinTech", icon: DollarSign },
    { name: "SaaS", icon: Cloud },
    { name: "Real Estate", icon: Home },
    { name: "Telecom & IT", icon: Wifi },
    { name: "EdTech", icon: GraduationCap },
    { name: "Manufacturing", icon: Factory },
    { name: "Healthcare", icon: HeartPulse },
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
          {/* Left Side - Content */}
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
              INDUSTRIES WE SERVE
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              Easily find the industry
              <br />
              solutions that help you grow
            </h2>

            <p
              className="text-lg mb-10"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
                lineHeight: "1.7",
              }}
            >
              Stop spending countless hours searching for the right automation solutions. 
              Rivoogen delivers industry-specific custom software tailored to your sector's 
              unique needs and challenges.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-10">
              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "900",
                    color: colors.carbonBlack,
                    marginBottom: "4px",
                  }}
                >
                  8+
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: colors.carbonBlack,
                    opacity: 0.6,
                  }}
                >
                  INDUSTRIES
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "900",
                    color: colors.carbonBlack,
                    marginBottom: "4px",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: colors.carbonBlack,
                    opacity: 0.6,
                  }}
                >
                  CUSTOM BUILT
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "900",
                    color: colors.carbonBlack,
                    marginBottom: "4px",
                  }}
                >
                  24/7
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: colors.carbonBlack,
                    opacity: 0.6,
                  }}
                >
                  SUPPORT
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Circular Industries Visualization */}
          <div className="flex justify-center items-center">
            <div className="relative" style={{ width: "500px", height: "500px" }}>
              {/* Center Circle */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "220px",
                  height: "220px",
                  background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `4px solid ${colors.alabasterGrey}`,
                  boxShadow: "0 12px 40px rgba(28, 28, 28, 0.12)",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "900",
                    color: colors.carbonBlack,
                    marginBottom: "8px",
                    lineHeight: "1",
                  }}
                >
                  8+
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: colors.carbonBlack,
                    opacity: 0.7,
                    textAlign: "center",
                    lineHeight: "1.3",
                  }}
                >
                  INDUSTRIES
                  <br />
                  SERVED
                </div>
              </div>

              {/* Outer Dashed Circle Ring */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "460px",
                  height: "460px",
                  borderRadius: "50%",
                  border: `2px dashed ${colors.alabasterGrey}`,
                  opacity: 0.3,
                }}
              />

              {/* Floating Industry Icons in Perfect Circle */}
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                const angle = (idx * 360) / industries.length;
                const radian = (angle * Math.PI) / 180;
                const radius = 200; // Distance from center
                
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                
                return (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      style={{
                        background: colors.ghostWhite,
                        border: `3px solid ${colors.alabasterGrey}`,
                        borderRadius: "50%",
                        width: "90px",
                        height: "90px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 24px rgba(28, 28, 28, 0.1)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: "12px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.15)";
                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(28, 28, 28, 0.18)";
                        e.currentTarget.style.borderColor = colors.carbonBlack;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.1)";
                        e.currentTarget.style.borderColor = colors.alabasterGrey;
                      }}
                    >
                      <Icon size={32} style={{ color: colors.carbonBlack, marginBottom: "6px" }} strokeWidth={2} />
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: "700",
                          color: colors.carbonBlack,
                          textAlign: "center",
                          opacity: 0.7,
                          lineHeight: "1.2",
                        }}
                      >
                        {industry.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;