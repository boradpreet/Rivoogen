import React from "react";
import colors from "../../theme/color";
import { 
  Search, 
  PenTool, 
  Code, 
  CheckCircle, 
  Rocket, 
  RefreshCw
} from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Business Analysis",
      desc: "Requirement gathering and feasibility study to understand your business needs",
      icon: Search,
    },
    {
      number: "02",
      title: "Architecture Design",
      desc: "Prototype creation and system architecture planning for scalable solutions",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Agile Development",
      desc: "Sprint-based software development with continuous feedback and iterations",
      icon: Code,
    },
    {
      number: "04",
      title: "Testing & QA",
      desc: "Comprehensive quality assurance and performance optimization testing",
      icon: CheckCircle,
    },
    {
      number: "05",
      title: "Deployment",
      desc: "Seamless deployment to cloud or on-premise infrastructure",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Support & Scaling",
      desc: "Continuous improvements, maintenance, and scaling as you grow",
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration/Visual */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Circular Background Rings */}
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  position: "relative",
                }}
              >
                {/* Outer Ring */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "380px",
                    height: "380px",
                    borderRadius: "50%",
                    border: `2px solid ${colors.alabasterGrey}`,
                    opacity: 0.3,
                  }}
                />
                
                {/* Middle Ring */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    border: `2px solid ${colors.alabasterGrey}`,
                    opacity: 0.4,
                  }}
                />

                {/* Center Device/Monitor Illustration */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "240px",
                    height: "320px",
                    background: colors.carbonBlack,
                    borderRadius: "30px",
                    border: `6px solid ${colors.carbonBlack}`,
                    boxShadow: "0 20px 60px rgba(28, 28, 28, 0.3)",
                    overflow: "hidden",
                  }}
                >
                  {/* Screen */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: colors.ghostWhite,
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {/* Header Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "40px",
                        background: colors.carbonBlack,
                        borderRadius: "8px",
                      }}
                    />

                    {/* Code Lines */}
                    <div
                      style={{
                        width: "80%",
                        height: "12px",
                        background: colors.alabasterGrey,
                        borderRadius: "4px",
                      }}
                    />
                    <div
                      style={{
                        width: "90%",
                        height: "12px",
                        background: colors.alabasterGrey,
                        borderRadius: "4px",
                      }}
                    />
                    <div
                      style={{
                        width: "70%",
                        height: "12px",
                        background: colors.alabasterGrey,
                        borderRadius: "4px",
                      }}
                    />
                    <div
                      style={{
                        width: "85%",
                        height: "12px",
                        background: colors.alabasterGrey,
                        borderRadius: "4px",
                      }}
                    />

                    {/* Highlight Section */}
                    <div
                      style={{
                        width: "100%",
                        height: "60px",
                        background: colors.softLinen,
                        borderRadius: "8px",
                        marginTop: "8px",
                      }}
                    />

                    {/* More Code Lines */}
                    <div
                      style={{
                        width: "75%",
                        height: "12px",
                        background: colors.alabasterGrey,
                        borderRadius: "4px",
                      }}
                    />
                    <div
                      style={{
                        width: "65%",
                        height: "12px",
                        background: colors.alabasterGrey,
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>

                {/* Floating Icons Around */}
                {[
                  { Icon: Code, angle: 30 },
                  { Icon: Rocket, angle: 150 },
                  { Icon: CheckCircle, angle: 270 },
                ].map((item, idx) => {
                  const Icon = item.Icon;
                  const radian = (item.angle * Math.PI) / 180;
                  const radius = 160;
                  
                  return (
                    <div
                      key={idx}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(calc(-50% + ${Math.cos(radian) * radius}px), calc(-50% + ${Math.sin(radian) * radius}px))`,
                        width: "56px",
                        height: "56px",
                        background: colors.ghostWhite,
                        border: `3px solid ${colors.alabasterGrey}`,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 24px rgba(28, 28, 28, 0.1)",
                      }}
                    >
                      <Icon size={28} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Workflow Steps */}
          <div>
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
                marginBottom: "20px",
              }}
            >
              OUR PROCESS
            </div>

            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              Rivoogen's Development Workflow
            </h2>

            <p
              className="text-base mb-8"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              6 proven steps to build your custom software solution
            </p>

            {/* Steps List */}
            <div className="space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
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

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3 
                        className="text-lg font-bold mb-1"
                        style={{ color: colors.carbonBlack }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ 
                          color: colors.carbonBlack,
                          opacity: 0.7,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;