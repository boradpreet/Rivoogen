import React from "react";
import colors from "../../theme/color";

const Workflow = () => {
  const steps = [
    {
      number: "1",
      title: "System Analysis & Monitoring Setup",
      description: "Comprehensive infrastructure assessment and monitoring configuration to establish baseline performance metrics.",
    },
    {
      number: "2",
      title: "Regular Updates & Fixes Deployment",
      description: "Scheduled maintenance windows with zero-downtime updates and critical security patches.",
    },
    {
      number: "3",
      title: "Performance Optimization & Scaling",
      description: "Continuous tuning and auto-scaling configurations to handle growing demands efficiently.",
    },
    {
      number: "4",
      title: "Security Patches & Audits",
      description: "Proactive vulnerability scanning and compliance audits to maintain enterprise-grade security.",
    },
    {
      number: "5",
      title: "Continuous Reporting & Improvements",
      description: "Detailed analytics, insights, and actionable recommendations delivered regularly.",
    },
    {
      number: "6",
      title: "24/7 Support Assistance",
      description: "Round-the-clock expert support team ready to resolve issues and answer questions.",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section
      className="px-6 py-12 md:px-16 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - VISUAL/MOCKUP */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Concentric circles background */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Outer circle */}
              <div
                className="absolute w-full h-full rounded-full opacity-10"
                style={{ border: `2px solid ${colors.carbonBlack}` }}
              ></div>
              
              {/* Middle circle */}
              <div
                className="absolute w-4/5 h-4/5 rounded-full opacity-20"
                style={{ border: `2px solid ${colors.carbonBlack}` }}
              ></div>
              
              {/* Inner circle */}
              <div
                className="absolute w-3/5 h-3/5 rounded-full opacity-30"
                style={{ border: `2px solid ${colors.carbonBlack}` }}
              ></div>

              {/* Center content - Dashboard mockup */}
              <div
                className="relative z-10 w-72 rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: colors.ghostWhite,
                  border: `8px solid ${colors.carbonBlack}`,
                }}
              >
                {/* Phone notch */}
                <div className="flex justify-center pt-2 pb-1">
                  <div
                    className="w-24 h-6 rounded-full"
                    style={{ background: colors.carbonBlack }}
                  ></div>
                </div>

                {/* Dashboard content */}
                <div className="px-6 py-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs font-medium opacity-60" style={{ color: colors.text }}>
                        Welcome back
                      </div>
                      <div className="text-lg font-bold" style={{ color: colors.carbonBlack }}>
                        Rivoogen
                      </div>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: colors.platinum }}
                    >
                      <span className="text-lg">⚙️</span>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="p-3 rounded-xl"
                      style={{ background: colors.platinum }}
                    >
                      <div className="text-2xl font-bold mb-1" style={{ color: colors.carbonBlack }}>
                        99.9%
                      </div>
                      <div className="text-[10px] font-medium opacity-60" style={{ color: colors.text }}>
                        Uptime
                      </div>
                    </div>
                    <div
                      className="p-3 rounded-xl"
                      style={{ background: colors.platinum }}
                    >
                      <div className="text-2xl font-bold mb-1" style={{ color: colors.carbonBlack }}>
                        24/7
                      </div>
                      <div className="text-[10px] font-medium opacity-60" style={{ color: colors.text }}>
                        Support
                      </div>
                    </div>
                  </div>

                  {/* Service items */}
                  <div className="space-y-2 pt-2">
                    {["Monitoring", "Updates", "Security", "Analytics"].map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl"
                        style={{
                          background: activeStep === index ? colors.carbonBlack : colors.platinum,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                          style={{
                            background: activeStep === index ? colors.ghostWhite : colors.carbonBlack,
                            color: activeStep === index ? colors.carbonBlack : colors.ghostWhite,
                          }}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div
                            className="text-xs font-semibold"
                            style={{
                              color: activeStep === index ? colors.ghostWhite : colors.carbonBlack,
                            }}
                          >
                            {service}
                          </div>
                        </div>
                        <div
                          className="text-lg"
                          style={{
                            color: activeStep === index ? colors.ghostWhite : colors.carbonBlack,
                          }}
                        >
                          {activeStep === index ? "✓" : "→"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="h-1 mt-4" style={{ background: colors.carbonBlack }}></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - STEPS LIST */}
          <div className="order-1 lg:order-2">
            {/* Section header */}
            <div className="mb-8">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{
                  background: colors.platinum,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: colors.carbonBlack }}></span>
                <p
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  Our Process
                </p>
              </div>

              <h2
                className="text-4xl md:text-5xl font-serif leading-tight mb-3"
                style={{ color: colors.carbonBlack }}
              >
                6 Quick Steps To Use Our Services
              </h2>

              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.text, opacity: 0.7 }}
              >
                Streamlined workflow designed for maximum efficiency and reliability.
              </p>
            </div>

            {/* Steps list */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  className="group cursor-pointer"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number circle */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300"
                      style={{
                        background: activeStep === index ? colors.carbonBlack : colors.platinum,
                        color: activeStep === index ? colors.ghostWhite : colors.carbonBlack,
                        border: `2px solid ${activeStep === index ? colors.carbonBlack : colors.border}`,
                        transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3
                        className="text-xl font-bold mb-2 transition-colors duration-300"
                        style={{
                          color: activeStep === index ? colors.carbonBlack : colors.text,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed transition-opacity duration-300"
                        style={{
                          color: colors.text,
                          opacity: activeStep === index ? 0.8 : 0.6,
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Progress bar */}
                      <div
                        className="mt-2 h-1 rounded-full overflow-hidden"
                        style={{ background: colors.border }}
                      >
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: activeStep === index ? '100%' : '0%',
                            background: colors.carbonBlack,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Workflow;