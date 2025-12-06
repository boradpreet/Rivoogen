import React from "react";
import colors from "../../theme/color";
import { 
  CloudUpload, 
  Server, 
  Workflow, 
  Zap, 
  Shield, 
  BarChart3,
  Cloud,
  Database,
  Lock,
  Gauge,
  Network,
  Container
} from "lucide-react";

const Services = () => {
  const leftServices = [
    {
      title: "Cloud Migration",
      desc: "Zero-downtime migration to AWS, Azure, or GCP",
      icon: CloudUpload,
    },
    {
      title: "Infrastructure Setup",
      desc: "Secure VPCs, load balancers, and networking",
      icon: Server,
    },
    {
      title: "DevOps Automation",
      desc: "CI/CD pipelines with Docker & Kubernetes",
      icon: Workflow,
    },
  ];

  const rightServices = [
    {
      title: "Serverless Architecture",
      desc: "Lambda, Cloud Functions, API Gateways",
      icon: Zap,
    },
    {
      title: "Cloud Security",
      desc: "IAM hardening, encryption, compliance",
      icon: Shield,
    },
    {
      title: "Monitoring & Optimization",
      desc: "CloudWatch, Prometheus, Grafana logging",
      icon: BarChart3,
    },
  ];

  // Icons to display around the circle
  const circleIcons = [
    Cloud,
    Server,
    Database,
    Lock,
    Gauge,
    Network,
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-28 lg:px-32 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, ${colors.ghostWhite} 0%, ${colors.platinum} 100%)`,
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
            OUR SERVICES
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Cloud & DevOps Services
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
            }}
          >
            Comprehensive solutions to modernize and scale your infrastructure
          </p>
        </div>

        {/* Three Column Layout: Left Services | Center Image | Right Services */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Services */}
          <div className="space-y-6">
            {leftServices.map((service, idx) => {
              const Icon = service.icon;
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
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.12)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  <div className="flex items-start gap-4">
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
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 
                        className="text-lg font-bold mb-2"
                        style={{ color: colors.carbonBlack }}
                      >
                        {service.title}
                      </h3>
                      <p 
                        className="text-sm"
                        style={{ color: colors.carbonBlack, opacity: 0.7 }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image/Visual with Large Cloud Icon */}
          <div className="hidden lg:flex justify-center">
            <div
              style={{
                width: "100%",
                maxWidth: "350px",
                aspectRatio: "1/1",
                background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                border: `3px solid ${colors.alabasterGrey}`,
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                position: "relative",
                boxShadow: "0 20px 60px rgba(28, 28, 28, 0.1)",
              }}
            >
              {/* Inner circle with Large Cloud Icon */}
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  background: colors.carbonBlack,
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(28, 28, 28, 0.2)",
                }}
              >
                {/* Large Cloud Icon */}
                <Cloud 
                  size={100} 
                  style={{ color: colors.ghostWhite }} 
                  strokeWidth={1.5}
                />
              </div>

              {/* Floating Cloud Icons around the circle */}
              {circleIcons.map((IconComponent, idx) => {
                const angle = (idx * 60); // 6 icons evenly spaced (360/6 = 60)
                const radian = (angle * Math.PI) / 180;
                const radius = 140;
                return (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${Math.cos(radian) * radius}px)`,
                      top: `calc(50% + ${Math.sin(radian) * radius}px)`,
                      transform: "translate(-50%, -50%)",
                      width: "40px",
                      height: "40px",
                      background: colors.ghostWhite,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(28, 28, 28, 0.1)",
                      border: `2px solid ${colors.alabasterGrey}`,
                    }}
                  >
                    <IconComponent 
                      size={20} 
                      style={{ color: colors.carbonBlack }} 
                      strokeWidth={2}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Services */}
          <div className="space-y-6">
            {rightServices.map((service, idx) => {
              const Icon = service.icon;
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
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.12)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  <div className="flex items-start gap-4">
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
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 
                        className="text-lg font-bold mb-2"
                        style={{ color: colors.carbonBlack }}
                      >
                        {service.title}
                      </h3>
                      <p 
                        className="text-sm"
                        style={{ color: colors.carbonBlack, opacity: 0.7 }}
                      >
                        {service.desc}
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

export default Services;