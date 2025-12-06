import { CheckCircle, Clock, ArrowRight, Sparkles } from "lucide-react";
import React,{ useState } from "react";
import colors from "../../theme/color";
import GetAQuoteModal from "../Modal/GetAQuoteModal";

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    duration: "1-2 weeks",
    tasks: [
      "Understand business goals",
      "Analyze workflows & datasets",
      "Define problem statements",
    ],
  },
  {
    number: "02",
    title: "Data Preparation",
    duration: "2-3 weeks",
    tasks: [
      "Gather raw data",
      "Clean and label datasets",
      "Structure data pipelines",
    ],
  },
  {
    number: "03",
    title: "Model Development",
    duration: "3-4 weeks",
    tasks: [
      "Build predictive models",
      "Train algorithms",
      "Validate accuracy",
    ],
  },
  {
    number: "04",
    title: "Deployment",
    duration: "2-3 weeks",
    tasks: [
      "Cloud deployment",
      "API integration",
      "System testing",
    ],
  },
  {
    number: "05",
    title: "Optimization",
    duration: "Ongoing",
    tasks: [
      "Track metrics",
      "Monitor drift",
      "Continuous optimization",
    ],
  },
];

export default function AIProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuoteModal, setOpenQuoteModal] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: colors.surface }}>
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(${colors.carbonBlack} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.carbonBlack} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full" style={{ backgroundColor: colors.background }}>
            <Sparkles className="w-4 h-4" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
              OUR APPROACH
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: colors.carbonBlack }}>
            AI Development Process
          </h2>

          <p className="text-base max-w-2xl mx-auto" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
            A systematic approach from discovery to optimization
          </p>
        </div>

        {/* Process Steps - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: isHovered ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                }}
              >
                {/* Background Pattern for Hovered Card */}
                {isHovered && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                )}

                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.softLinen}40 0%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-5">
                  {/* Number Badge */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                      border: `2px solid ${colors.border}`,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-300"
                    style={{ color: isHovered ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {step.title}
                  </h3>

                  {/* Duration */}
                  <div
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium mb-3 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                      opacity: 0.8,
                    }}
                  >
                    <Clock size={12} />
                    {step.duration}
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="flex-shrink-0 mt-0.5 transition-colors duration-300"
                          style={{ 
                            color: isHovered ? colors.ghostWhite : colors.carbonBlack, 
                            opacity: 0.6 
                          }}
                        />
                        <span
                          className="text-xs leading-relaxed transition-colors duration-300"
                          style={{
                            color: isHovered ? colors.alabasterGrey : colors.carbonBlack,
                            opacity: isHovered ? 0.9 : 0.7,
                          }}
                        >
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Border Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: colors.carbonBlack }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            backgroundColor: colors.carbonBlack,
            border: `2px solid ${colors.border}`,
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ color: colors.ghostWhite }}>
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-sm" style={{ color: colors.alabasterGrey }}>
              Let's create a customized roadmap for your AI implementation
            </p>
          </div>
          
          <button
          onClick={()=> setOpenQuoteModal(true)}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:gap-3 whitespace-nowrap"
            style={{
              backgroundColor: colors.ghostWhite,
              color: colors.carbonBlack,
            }}
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <GetAQuoteModal
        open={openQuoteModal}
        onClose={() => setOpenQuoteModal(false)}
      />
    </section>
  );
}