import React from "react";
import colors from "../../theme/color";
import { 
  Cloud, 
  Container, 
  FileCode, 
  Workflow, 
  BarChart3, 
  Database,
  Shield,
  Zap
} from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      title: "Cloud Platforms",
      tools: ["AWS", "Azure", "Google Cloud"],
      icon: Cloud,
    },
    {
      title: "Containers & Orchestration",
      tools: ["Docker", "Kubernetes", "ECS"],
      icon: Container,
    },
    {
      title: "Infrastructure as Code",
      tools: ["Terraform", "CloudFormation", "Pulumi"],
      icon: FileCode,
    },
    {
      title: "CI/CD Pipelines",
      tools: ["Jenkins", "GitHub Actions", "GitLab CI"],
      icon: Workflow,
    },
    {
      title: "Monitoring & Logging",
      tools: ["Prometheus", "Grafana", "ELK Stack"],
      icon: BarChart3,
    },
    {
      title: "Security & Compliance",
      tools: ["Vault", "AWS IAM", "Security Hub"],
      icon: Shield,
    },
    {
      title: "Database Services",
      tools: ["RDS", "DynamoDB", "Redis"],
      icon: Database,
    },
    {
      title: "Automation Tools",
      tools: ["Ansible", "Chef", "Puppet"],
      icon: Zap,
    },
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

      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${colors.softLinen}60 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
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
            TECHNOLOGY STACK
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Cloud & DevOps Tools
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
            }}
          >
            Enterprise-grade tools and platforms powering your infrastructure
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {toolCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "20px",
                  padding: "32px 24px",
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
                  <Icon 
                    size={32} 
                    style={{ color: colors.carbonBlack }} 
                    strokeWidth={2}
                  />
                </div>

                {/* Category Title */}
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    color: colors.carbonBlack,
                  }}
                >
                  {category.title}
                </h3>

                {/* Tools Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIdx) => (
                    <div
                      key={toolIdx}
                      style={{
                        padding: "6px 14px",
                        background: colors.softLinen,
                        border: `1px solid ${colors.alabasterGrey}`,
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: colors.carbonBlack,
                      }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div
            style={{
              padding: "32px",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <div 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.carbonBlack }}
            >
              50+
            </div>
            <div 
              className="text-sm"
              style={{ color: colors.carbonBlack, opacity: 0.7 }}
            >
              Technologies Integrated
            </div>
          </div>

          <div
            style={{
              padding: "32px",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <div 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.carbonBlack }}
            >
              100%
            </div>
            <div 
              className="text-sm"
              style={{ color: colors.carbonBlack, opacity: 0.7 }}
            >
              Cloud Native
            </div>
          </div>

          <div
            style={{
              padding: "32px",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <div 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.carbonBlack }}
            >
              24/7
            </div>
            <div 
              className="text-sm"
              style={{ color: colors.carbonBlack, opacity: 0.7 }}
            >
              Expert Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;