import React from "react";
import colors from "../../theme/color";
import { 
  Search, 
  PenTool, 
  CloudUpload, 
  Zap, 
  Activity, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment & Analysis",
      icon: Search,
    },
    {
      number: "02",
      title: "Architecture Design",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Cloud Migration",
      icon: CloudUpload,
    },
    {
      number: "04",
      title: "CI/CD Automation",
      icon: Zap,
    },
    {
      number: "05",
      title: "Monitoring & Optimization",
      icon: Activity,
    },
    {
      number: "06",
      title: "Support & Scaling",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:py-20 lg:px-32"
      style={{ 
        background: colors.ghostWhite,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: colors.softLinen,
              border: `1px solid ${colors.alabasterGrey}`,
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              color: colors.carbonBlack,
              marginBottom: "16px",
            }}
          >
            HOW WE WORK
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.01em",
            }}
          >
            Our Cloud Workflow
          </h2>
        </div>

        {/* Workflow Steps - Horizontal Flow */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "10%",
              right: "10%",
              height: "2px",
              background: `linear-gradient(90deg, ${colors.alabasterGrey} 0%, ${colors.carbonBlack}30 50%, ${colors.alabasterGrey} 100%)`,
              zIndex: 0,
            }}
            className="hidden lg:block"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="text-center"
                  style={{
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Icon Circle with Number */}
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "0 auto 16px",
                      background: colors.ghostWhite,
                      border: `3px solid ${colors.alabasterGrey}`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.carbonBlack;
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(28, 28, 28, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.alabasterGrey;
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Number Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        width: "32px",
                        height: "32px",
                        background: colors.carbonBlack,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: colors.ghostWhite,
                      }}
                    >
                      {idx + 1}
                    </div>

                    <Icon 
                      size={40} 
                      style={{ color: colors.carbonBlack }} 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Step Title */}
                  <h3 
                    className="text-sm md:text-base font-bold"
                    style={{ 
                      color: colors.carbonBlack,
                      lineHeight: "1.4",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Arrow - Only show between steps on desktop */}
                  {idx < steps.length - 1 && (
                    <div
                      style={{
                        display: "none",
                      }}
                      className="lg:block absolute top-12 left-full transform -translate-x-1/2"
                    >
                      <ArrowRight 
                        size={24} 
                        style={{ 
                          color: colors.carbonBlack,
                          opacity: 0.3,
                        }} 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p
            className="text-base max-w-3xl mx-auto mb-8"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
            }}
          >
            From initial assessment to continuous scaling, we guide you through every step
            of your cloud transformation journey with proven expertise and 24/7 support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;