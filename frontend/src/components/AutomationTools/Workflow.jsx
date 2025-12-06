import React from "react";
import colors from "../../theme/color";
import { 
  Search, 
  Target, 
  Code, 
  Link, 
  TestTube, 
  Rocket 
} from "lucide-react";


const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Understand & Map",
      description: "Understand the workflow and map business requirements",
      icon: Search,
    },
    {
      number: "02",
      title: "Identify Tasks",
      description: "Identify tasks to automate for maximum efficiency",
      icon: Target,
    },
    {
      number: "03",
      title: "Create Scripts",
      description: "Create automation scripts and RPA bots",
      icon: Code,
    },
    {
      number: "04",
      title: "Build Integrations",
      description: "Build integrations and triggers between systems",
      icon: Link,
    },
    {
      number: "05",
      title: "Test & Optimize",
      description: "Testing and optimization for peak performance",
      icon: TestTube,
    },
    {
      number: "06",
      title: "Deploy & Monitor",
      description: "Deployment with continuous monitoring",
      icon: Rocket,
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps List */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    background: colors.ghostWhite,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "16px",
                    padding: "20px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(28, 28, 28, 0.08)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }}
                >
                  {/* Number Circle */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: colors.carbonBlack,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: "800",
                      color: colors.ghostWhite,
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3 
                      className="text-base font-bold mb-1"
                      style={{ color: colors.carbonBlack }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: colors.carbonBlack,
                        opacity: 0.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
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
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              OUR PROCESS
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              Rivoogen's Automation
              <br />
              Workflow
            </h2>

            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              We follow a proven 6-step process to automate your business workflows. 
              From understanding your requirements to deploying and monitoring solutions, 
              we ensure seamless automation implementation.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Each step is carefully designed to maximize efficiency, reduce manual work, 
              and deliver automation solutions that scale with your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;