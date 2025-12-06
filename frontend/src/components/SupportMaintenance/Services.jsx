import React from "react";
import colors from "../../theme/color";
import { 
  Wrench, 
  Zap, 
  Shield, 
  Server, 
  Bell, 
  RefreshCw
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Bug Fixing & Enhancements",
      desc: "Quick fixes, improvements, and issue tracking for stable performance",
      icon: Wrench,
    },
    {
      title: "Performance Optimization",
      desc: "Speed improvements, caching, query optimization, and load testing",
      icon: Zap,
    },
    {
      title: "Security Updates",
      desc: "Patch updates, vulnerability fixes, authentication checks",
      icon: Shield,
    },
    {
      title: "Server & Hosting Support",
      desc: "AWS, cPanel, cloud deployments, scaling and monitoring",
      icon: Server,
    },
    {
      title: "24/7 Monitoring & Alerts",
      desc: "Downtime alerts, crash recovery, error monitoring dashboards",
      icon: Bell,
    },
    {
      title: "Version Upgrades",
      desc: "Dependency upgrades, framework updates, and API migrations",
      icon: RefreshCw,
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
        {/* Header */}
        <div className="text-center mb-16">
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: colors.carbonBlack,
              color: colors.ghostWhite,
              borderRadius: "24px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "24px",
            }}
          >
            SUPPORT & MAINTENANCE
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Support Services We Provide
            <br />
            at Rivoogen
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
              lineHeight: "1.7",
            }}
          >
            Comprehensive maintenance and support to keep your software running smoothly, 
            securely, and at peak performance
          </p>
        </div>

        {/* Services Grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "20px",
                  padding: "32px",
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
                {/* Top accent line */}
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

                {/* Icon */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={32} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    color: colors.carbonBlack,
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base leading-relaxed"
                  style={{ 
                    color: colors.carbonBlack,
                    opacity: 0.7,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;