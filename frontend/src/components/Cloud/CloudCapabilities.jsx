import React from "react";
import colors from "../../theme/color";
import { 
  Server, 
  Scale, 
  Box, 
  FileCode, 
  ShieldCheck, 
  Cloud, 
  Activity, 
  Zap,
  ArrowUpRight
} from "lucide-react";

const CloudCapabilities = () => {
  const caps = [
    {
      icon: Server,
      title: "High-availability cloud architectures",
      tag: "Architecture",
      description: "99.9% uptime guaranteed"
    },
    {
      icon: Scale,
      title: "Load balancing & auto-scaling strategies",
      tag: "Scaling",
      description: "Dynamic resource optimization"
    },
    {
      icon: Box,
      title: "Container orchestration using Kubernetes",
      tag: "Containers",
      description: "Enterprise-grade orchestration"
    },
    {
      icon: FileCode,
      title: "Infrastructure as Code (Terraform, CloudFormation)",
      tag: "IaC",
      description: "Automated infrastructure"
    },
    {
      icon: ShieldCheck,
      title: "Zero-trust cloud security practices",
      tag: "Security",
      description: "Military-grade protection"
    },
    {
      icon: Cloud,
      title: "Hybrid cloud & multi-cloud architectures",
      tag: "Multi-Cloud",
      description: "Vendor-agnostic solutions"
    },
    {
      icon: Activity,
      title: "SRE-based monitoring & incident response",
      tag: "Monitoring",
      description: "24/7 system reliability"
    },
    {
      icon: Zap,
      title: "Serverless and microservices development",
      tag: "Modern Dev",
      description: "Cutting-edge architectures"
    },
  ];

  return (
    <section
      className="px-6 py-24 md:px-16 lg:py-32 lg:px-32 relative overflow-hidden"
      style={{ 
        background: colors.carbonBlack,
        color: colors.ghostWhite 
      }}
    >
      {/* Animated Grid Pattern Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(${colors.ghostWhite} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.ghostWhite} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient Orbs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: "500px",
          height: "500px",
          background: `radial-gradient(circle, ${colors.ghostWhite}08 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${colors.ghostWhite}06 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(120px)",
          animation: "pulse 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Decorative Elements */}
        <div className="text-center mb-20 relative">
          {/* Decorative lines */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              height: "1px",
              background: `linear-gradient(90deg, transparent 0%, ${colors.ghostWhite}20 50%, transparent 100%)`,
            }}
          />

          <div className="relative inline-block">
            {/* Small accent line above */}
            <div
              style={{
                width: "60px",
                height: "3px",
                background: colors.ghostWhite,
                margin: "0 auto 24px",
                borderRadius: "2px",
              }}
            />

            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: `${colors.ghostWhite}10`,
                backdropFilter: "blur(10px)",
                border: `1px solid ${colors.ghostWhite}20`,
                borderRadius: "24px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: colors.ghostWhite,
                marginBottom: "24px",
              }}
            >
              OUR EXPERTISE
            </div>

            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ 
                color: colors.ghostWhite,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Advanced Cloud
              <br />
              <span style={{ 
                background: `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.alabasterGrey} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Capabilities
              </span>
            </h2>

            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ 
                color: colors.alabasterGrey,
                lineHeight: "1.8",
              }}
            >
              Enterprise-grade cloud infrastructure powered by cutting-edge technologies,
              <br className="hidden md:block" />
              designed to scale with your ambitions
            </p>
          </div>
        </div>

        {/* Capabilities Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caps.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                style={{
                  background: `${colors.ghostWhite}05`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${colors.ghostWhite}15`,
                  borderRadius: "20px",
                  padding: "32px 24px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${colors.ghostWhite}08`;
                  e.currentTarget.style.borderColor = colors.ghostWhite + "40";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 20px 60px ${colors.carbonBlack}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${colors.ghostWhite}05`;
                  e.currentTarget.style.borderColor = colors.ghostWhite + "15";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Hover gradient effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100%",
                    background: `linear-gradient(135deg, ${colors.ghostWhite}00 0%, ${colors.ghostWhite}08 100%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                  className="hover-gradient"
                />

                {/* Number indicator */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "32px",
                    height: "32px",
                    background: `${colors.ghostWhite}10`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: colors.alabasterGrey,
                  }}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: `${colors.ghostWhite}12`,
                      border: `1px solid ${colors.ghostWhite}20`,
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon 
                      size={26} 
                      style={{ color: colors.ghostWhite }} 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Tag */}
                  <div
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      background: `${colors.ghostWhite}08`,
                      border: `1px solid ${colors.ghostWhite}15`,
                      borderRadius: "12px",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: colors.alabasterGrey,
                      letterSpacing: "0.5px",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                    }}
                  >
                    {cap.tag}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-base font-bold mb-2 leading-snug"
                    style={{ color: colors.ghostWhite }}
                  >
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm"
                    style={{ 
                      color: colors.alabasterGrey,
                      opacity: 0.8,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.ghostWhite}10 0%, ${colors.ghostWhite}05 100%)`,
            border: `1px solid ${colors.ghostWhite}20`,
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Pattern overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite}10 1px, transparent 0)`,
              backgroundSize: "32px 32px",
              opacity: 0.3,
            }}
          />

          
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        div:hover .hover-gradient {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default CloudCapabilities;