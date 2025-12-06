import React from "react";
import colors from "../../theme/color";
import { 
  Search, 
  FileText, 
  PlayCircle, 
  Bug, 
  CheckCircle, 
  Award
} from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis & Test Planning",
      description: "Define scope, objectives, and test strategy aligned with project requirements",
      icon: Search,
    },
    {
      number: "02",
      title: "Test Case Creation & Review",
      description: "Develop comprehensive test cases and conduct peer reviews for quality assurance",
      icon: FileText,
    },
    {
      number: "03",
      title: "Manual / Automated Test Execution",
      description: "Execute test suites using manual testing and automated frameworks",
      icon: PlayCircle,
    },
    {
      number: "04",
      title: "Bug Reporting in Tracking System",
      description: "Document and track defects with detailed reproduction steps and severity levels",
      icon: Bug,
    },
    {
      number: "05",
      title: "Fix Verification & Regression Testing",
      description: "Validate bug fixes and ensure no new issues in existing functionality",
      icon: CheckCircle,
    },
    {
      number: "06",
      title: "Final QA Sign-off & Quality Report",
      description: "Deliver comprehensive quality metrics and approval for production release",
      icon: Award,
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
        {/* Header Section */}
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
            OUR QA PROCESS
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Quality Assurance
            <br />
            Workflow at Rivoogen
          </h2>

          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
              lineHeight: "1.7",
            }}
          >
            Six strategic phases ensuring flawless software delivery with comprehensive testing and quality metrics
          </p>
        </div>

        {/* Grid Layout - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                style={{ 
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
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
                {/* Top accent bar */}
                <div 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${colors.carbonBlack} 0%, ${colors.alabasterGrey} 100%)`,
                  }}
                />

                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    width: "40px",
                    height: "40px",
                    background: colors.softLinen,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "800",
                    color: colors.carbonBlack,
                  }}
                >
                  {step.number}
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
                  <Icon size={32} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 
                  className="text-lg font-bold mb-3 leading-tight"
                  style={{ color: colors.carbonBlack }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          style={{
            background: colors.carbonBlack,
            borderRadius: "24px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <h3 
            className="text-3xl font-bold mb-4"
            style={{ color: colors.ghostWhite }}
          >
            Ready for Flawless Quality?
          </h3>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ 
              color: colors.alabasterGrey,
              lineHeight: "1.6",
            }}
          >
            Let Rivoogen's QA experts ensure your software meets the highest quality standards
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div
              style={{
                padding: "12px 24px",
                background: "rgba(250, 250, 255, 0.1)",
                border: `1px solid rgba(250, 250, 255, 0.2)`,
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  color: colors.ghostWhite,
                  marginBottom: "4px",
                }}
              >
                99.9%
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: colors.alabasterGrey,
                }}
              >
                Bug Detection Rate
              </div>
            </div>

            <div
              style={{
                padding: "12px 24px",
                background: "rgba(250, 250, 255, 0.1)",
                border: `1px solid rgba(250, 250, 255, 0.2)`,
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  color: colors.ghostWhite,
                  marginBottom: "4px",
                }}
              >
                24/7
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: colors.alabasterGrey,
                }}
              >
                Quality Monitoring
              </div>
            </div>

            <div
              style={{
                padding: "12px 24px",
                background: "rgba(250, 250, 255, 0.1)",
                border: `1px solid rgba(250, 250, 255, 0.2)`,
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  color: colors.ghostWhite,
                  marginBottom: "4px",
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: colors.alabasterGrey,
                }}
              >
                Quality Assured
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;