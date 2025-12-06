import React from "react";
import colors from "../../theme/color";
import { 
  Building2, 
  Cloud, 
  Webhook, 
  Smartphone, 
  RefreshCw, 
  Zap 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Enterprise Software",
      desc: "CRMs, ERPs, admin dashboards, internal tools",
      icon: Building2,
    },
    {
      title: "SaaS Development",
      desc: "Multi-tenant platforms with subscriptions",
      icon: Cloud,
    },
    {
      title: "API & Integration",
      desc: "REST APIs, microservices, integrations",
      icon: Webhook,
    },
    {
      title: "Web & Mobile Apps",
      desc: "Modern, scalable, secure applications",
      icon: Smartphone,
    },
    {
      title: "Legacy Modernization",
      desc: "Rebuild outdated systems for cloud",
      icon: RefreshCw,
    },
    {
      title: "Automation Tools",
      desc: "Workflow automations and bots",
      icon: Zap,
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 2x3 Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => {
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
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.12)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                    e.currentTarget.style.background = colors.carbonBlack;
                    // Change text and icon color
                    const title = e.currentTarget.querySelector('h3');
                    const desc = e.currentTarget.querySelector('p');
                    const iconBg = e.currentTarget.querySelector('.icon-bg');
                    if (title) title.style.color = colors.ghostWhite;
                    if (desc) desc.style.color = colors.alabasterGrey;
                    if (iconBg) {
                      iconBg.style.background = colors.ghostWhite;
                      iconBg.style.borderColor = colors.ghostWhite;
                    }
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                    e.currentTarget.style.background = colors.ghostWhite;
                    // Revert text and icon color
                    const title = e.currentTarget.querySelector('h3');
                    const desc = e.currentTarget.querySelector('p');
                    const iconBg = e.currentTarget.querySelector('.icon-bg');
                    if (title) title.style.color = colors.carbonBlack;
                    if (desc) desc.style.color = colors.carbonBlack;
                    if (iconBg) {
                      iconBg.style.background = `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`;
                      iconBg.style.borderColor = colors.alabasterGrey;
                    }
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = colors.carbonBlack;
                  }}
                >
                  {/* Icon */}
                  <div
                    className="icon-bg"
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
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={28} style={{ color: colors.carbonBlack, transition: "all 0.3s ease" }} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-base font-bold mb-2"
                    style={{ 
                      color: colors.carbonBlack,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      color: colors.carbonBlack,
                      opacity: 0.7,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side - Description */}
          <div>
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Services We Provide
              <br />
              at Rivoogen
            </h2>

            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              We build tailored software solutions from the ground up, designed specifically 
              for your business needs. Whether you need enterprise tools, SaaS platforms, 
              or modern web applications, our team delivers scalable and secure solutions.
            </p>

            <p 
              className="text-lg leading-relaxed mb-8"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              From concept to deployment, we handle every aspect of custom software 
              development with precision and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;