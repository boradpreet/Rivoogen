import React from "react";
import colors from "../../theme/color";
import { Code2, Database, Cloud, Boxes, Workflow, Layers, Zap, Shield, Server, GitBranch } from "lucide-react";

const Tools = () => {
  const technologies = [
    { name: "React.js", category: "Frontend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Boxes },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Docker", category: "DevOps", icon: Layers },
    { name: "TypeScript", category: "Frontend", icon: Code2 },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "Kubernetes", category: "DevOps", icon: Workflow },
    { name: "Python", category: "Backend", icon: Server },
    { name: "Redis", category: "Database", icon: Zap },
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
            TECHNOLOGY STACK
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Technologies Rivoogen Uses
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
              lineHeight: "1.7",
            }}
          >
            We leverage industry-leading tools and frameworks to build scalable, 
            secure, and high-performance custom software solutions
          </p>
        </div>

        {/* Technologies Grid - 5 columns x 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "16px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
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
                {/* Left colored accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background: colors.carbonBlack,
                  }}
                />

                {/* Icon Container */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={28} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                </div>

                {/* Technology Name */}
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: colors.carbonBlack,
                      marginBottom: "8px",
                    }}
                  >
                    {tech.name}
                  </h3>

                  {/* Category */}
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: colors.carbonBlack,
                      opacity: 0.6,
                    }}
                  >
                    {tech.category}
                  </div>
                </div>

                {/* Learn More Link */}
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: colors.carbonBlack,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;