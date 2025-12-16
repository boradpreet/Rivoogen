import React from "react";
import colors from "../../theme/color";
import { 
  Wallet, 
  ShoppingCart, 
  Heart, 
  Radio, 
  Brain, 
  Cloud, 
  GraduationCap, 
  Truck,
} from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "FinTech", icon: Wallet, position: { top: "15%", left: "20%" } },
    { name: "E-Commerce", icon: ShoppingCart, position: { top: "35%", left: "35%" } },
    { name: "Healthcare", icon: Heart, position: { top: "55%", left: "15%" } },
    { name: "Telecom", icon: Radio, position: { top: "70%", left: "40%" } },
    { name: "AI/ML", icon: Brain, position: { top: "25%", left: "55%" } },
    { name: "SaaS", icon: Cloud, position: { top: "45%", left: "65%" } },
    { name: "EdTech", icon: GraduationCap, position: { top: "65%", left: "70%" } },
    { name: "Logistics", icon: Truck, position: { top: "80%", left: "25%" } },
  ];

  const stats = [
    { value: "500+", label: "Global enterprises" },
    { value: "8+", label: "Industries served" },
    { value: "99.9%", label: "Infrastructure uptime" },
    { value: "$2B+", label: "Infrastructure managed" },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-32 lg:px-32 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.platinum} 100%)`,
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Industry Globe/Map with Floating Logos */}
          <div className="relative">
            {/* Globe Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "600px",
                background: `radial-gradient(circle at 30% 40%, ${colors.softLinen} 0%, ${colors.platinum} 50%, ${colors.alabasterGrey}40 100%)`,
                borderRadius: "50%",
                border: `3px solid ${colors.alabasterGrey}`,
                boxShadow: `
                  inset 0 20px 60px ${colors.alabasterGrey}80,
                  0 20px 80px rgba(28, 28, 28, 0.08)
                `,
              }}
            >
              {/* Grid lines on globe */}
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.15,
                }}
                viewBox="0 0 400 400"
              >
                {/* Horizontal lines */}
                <ellipse cx="200" cy="100" rx="180" ry="30" fill="none" stroke={colors.carbonBlack} strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="190" ry="40" fill="none" stroke={colors.carbonBlack} strokeWidth="1.5" />
                <ellipse cx="200" cy="300" rx="180" ry="30" fill="none" stroke={colors.carbonBlack} strokeWidth="1" />
                
                {/* Vertical lines */}
                <ellipse cx="200" cy="200" rx="40" ry="190" fill="none" stroke={colors.carbonBlack} strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="100" ry="195" fill="none" stroke={colors.carbonBlack} strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="160" ry="198" fill="none" stroke={colors.carbonBlack} strokeWidth="1" />
              </svg>

              {/* Continents shapes - simplified */}
              <div
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "35%",
                  width: "80px",
                  height: "100px",
                  background: colors.carbonBlack,
                  opacity: 0.08,
                  borderRadius: "60% 40% 50% 50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "45%",
                  right: "30%",
                  width: "60px",
                  height: "70px",
                  background: colors.carbonBlack,
                  opacity: 0.08,
                  borderRadius: "40% 60% 60% 40%",
                }}
              />

              {/* Floating Industry Icons/Logos */}
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      ...industry.position,
                      animation: `float ${4 + idx * 0.3}s ease-in-out infinite`,
                      animationDelay: `${idx * 0.2}s`,
                    }}
                  >
                    {/* Icon badge */}
                    <div
                      style={{
                        background: colors.ghostWhite,
                        border: `2px solid ${colors.alabasterGrey}`,
                        borderRadius: "16px",
                        padding: "16px",
                        boxShadow: "0 8px 24px rgba(28, 28, 28, 0.12)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        minWidth: "90px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(28, 28, 28, 0.18)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.12)";
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          background: colors.softLinen,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "600",
                          color: colors.carbonBlack,
                          textAlign: "center",
                        }}
                      >
                        {industry.name}
                      </span>
                    </div>

                    {/* Connection dot */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "6px",
                        height: "6px",
                        background: colors.carbonBlack,
                        borderRadius: "50%",
                        opacity: 0.3,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Description and Stats */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: colors.carbonBlack,
                color: colors.ghostWhite,
                borderRadius: "24px",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "24px",
              }}
            >
              INDUSTRIES WE SERVE
            </div>

            {/* Main Headline - SHORTENED */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                color: colors.carbonBlack,
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
              }}
            >
              Leading enterprises choose Rivoogen —
              <br />
              <span style={{ opacity: 0.6 }}>
                from startup to scale.
              </span>
            </h2>

         
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(5px);
          }
          66% {
            transform: translateY(-8px) translateX(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Industries;