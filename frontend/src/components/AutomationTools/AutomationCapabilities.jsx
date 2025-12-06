import React from "react";
import colors from "../../theme/color";
import { 
  Code2, 
  Globe, 
  FileText, 
  Link, 
  Clock, 
  BarChart3, 
  Mail, 
  Workflow 
} from "lucide-react";

const AutomationCapabilities = () => {
  const capabilities = [
    { 
      title: "Workflow Automation", 
      subtitle: "Python / Node.js",
      icon: Code2,
    },
    { 
      title: "Browser Automation", 
      subtitle: "Web scraping",
      icon: Globe,
    },
    { 
      title: "AI Document Extraction", 
      subtitle: "Intelligent parsing",
      icon: FileText,
    },
    { 
      title: "API-to-API Sync", 
      subtitle: "Cross-platform",
      icon: Link,
    },
    { 
      title: "Scheduled Automation", 
      subtitle: "Cron jobs",
      icon: Clock,
    },
    { 
      title: "Reporting Dashboards", 
      subtitle: "Automated insights",
      icon: BarChart3,
    },
    { 
      title: "Email & SMS Pipelines", 
      subtitle: "Automated messaging",
      icon: Mail,
    },
    { 
      title: "No-Code Platforms", 
      subtitle: "Zapier / Make / Power Automate",
      icon: Workflow,
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

      <div className="max-w-7xl mx-auto relative z-10">
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
              marginBottom: "16px",
            }}
          >
            CAPABILITIES
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Advanced Automation Capabilities
            <br />
            at Rivoogen
          </h2>

          <p
            className="text-base max-w-2xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
              lineHeight: "1.7",
            }}
          >
            Powerful automation solutions across multiple platforms and technologies
          </p>
        </div>

        {/* Capabilities Grid - 4x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {capabilities.map((capability, idx) => {
            const Icon = capability.icon;
            return (
              <div
                key={idx}
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "20px",
                  padding: "28px 24px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "200px",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(28, 28, 28, 0.12)";
                  e.currentTarget.style.borderColor = colors.carbonBlack;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = colors.alabasterGrey;
                }}
              >
                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
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
                  <Icon 
                    size={32} 
                    style={{ color: colors.carbonBlack }} 
                    strokeWidth={2} 
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-base font-bold mb-2"
                  style={{ 
                    color: colors.carbonBlack,
                    lineHeight: "1.3",
                  }}
                >
                  {capability.title}
                </h3>

                {/* Subtitle */}
                <p 
                  className="text-sm"
                  style={{ 
                    color: colors.carbonBlack,
                    opacity: 0.7,
                  }}
                >
                  {capability.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationCapabilities;