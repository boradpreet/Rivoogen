import { Zap, Code2, Scale, HeadphonesIcon, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import colors from "../../theme/color";

const reasons = [
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    metric: "2-8 weeks",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    metric: "100%",
    description: "Latest frameworks and best practices",
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    metric: "Enterprise",
    description: "Built to grow with your business",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    metric: "24/7",
    description: "Continuous maintenance and updates",
  },
];

export default function WhyChooseWebSection() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content & Image */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full" style={{ backgroundColor: colors.surface }}>
                <Sparkles className="w-4 h-4" style={{ color: colors.carbonBlack }} />
                <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
                  WHY RIVOOGEN
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.carbonBlack }}>
                Why Choose Us for Web Development
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>

              <p className="text-lg leading-relaxed mb-8" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
                We combine technical excellence with creative design to deliver web solutions that drive real business results.
              </p>
            </div>

            {/* Feature Image/Visual */}
            <div className="relative">
              {/* Background Layers */}
              <div
                className="absolute top-4 left-4 right-0 bottom-0 rounded-2xl"
                style={{ backgroundColor: colors.surface }}
              />
              <div
                className="absolute top-2 left-2 right-0 bottom-0 rounded-2xl"
                style={{ backgroundColor: colors.softLinen }}
              />
            </div>
          </div>

          {/* RIGHT SIDE - Reason Cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-102 cursor-pointer"
                  style={{
                    backgroundColor: colors.ghostWhite,
                    border: `2px solid ${colors.border}`,
                  }}
                >
                  {/* Hover Gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${colors.softLinen}60 0%, transparent 100%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-6 flex items-center gap-6">
                    {/* Icon Circle */}
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: colors.surface,
                        border: `2px solid ${colors.border}`,
                      }}
                    >
                      <Icon size={28} style={{ color: colors.carbonBlack }} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="text-xl font-bold group-hover:translate-x-1 transition-transform duration-300"
                          style={{ color: colors.carbonBlack }}
                        >
                          {reason.title}
                        </h3>
                        <div
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: colors.carbonBlack,
                            color: colors.ghostWhite,
                          }}
                        >
                          {reason.metric}
                        </div>
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: colors.carbonBlack, opacity: 0.7 }}
                      >
                        {reason.description}
                      </p>
                    </div>

                    {/* Checkmark */}
                    <CheckCircle
                      size={24}
                      className="flex-shrink-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: colors.carbonBlack }}
                    />
                  </div>

                  {/* Left Border Accent */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                    style={{ backgroundColor: colors.carbonBlack }}
                  />
                </div>
              );
            })}

            {/* Bottom CTA */}
            <div
              className="p-6 rounded-2xl flex items-center justify-between gap-4"
              style={{
                backgroundColor: colors.carbonBlack,
                border: `2px solid ${colors.border}`,
              }}
            >
              <div>
                <h4 className="text-lg font-bold mb-1" style={{ color: colors.ghostWhite }}>
                  Ready to Get Started?
                </h4>
                <p className="text-sm" style={{ color: colors.alabasterGrey }}>
                  Let's build something amazing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}