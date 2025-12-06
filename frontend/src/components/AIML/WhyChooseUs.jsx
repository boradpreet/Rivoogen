import { Target, TrendingUp, Shield, Zap, Users, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";
import colors from "../../theme/color";

const reasons = [
  {
    icon: Target,
    title: "Deep AI & ML Expertise",
    desc: "Our team combines strong data science foundations with real-world engineering experience across multiple domains.",
  },
  {
    icon: TrendingUp,
    title: "Business-First Approach",
    desc: "We align every solution with your business goals, KPIs, and ROI. Every model solves a clear business problem.",
  },
  {
    icon: Shield,
    title: "End-to-End Ownership",
    desc: "From discovery to monitoring, we take full ownership of the AI lifecycle so your teams can focus on operations.",
  },
  {
    icon: Zap,
    title: "Enterprise-Grade Architecture",
    desc: "Scalable, secure, and cloud-ready AI architectures using APIs and best practices that fit your systems.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    desc: "Full visibility into progress and impact. We keep technical conversations clear for all stakeholders.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support & Optimization",
    desc: "We continuously monitor, tune, and enhance your models to stay accurate and aligned with your needs.",
  },
];

export default function WhyChooseUsSection() {
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
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
              WHY RIVOOGEN
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.carbonBlack }}>
                Why Choose Us for AI & ML
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>
            </div>

            <p className="text-base max-w-xl" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
              Partner with <strong>Rivoogen</strong> to build AI solutions that are technically strong and strategically aligned with your vision
            </p>
          </div>
        </div>

        {/* Reasons Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const isDark = index % 2 === 1;
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: isDark ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                }}
              >
                {/* Background Pattern for Dark Cards */}
                {isDark && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                )}

                {/* Number Badge */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                    color: colors.carbonBlack,
                    opacity: 0.5,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.softLinen}40 0%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className="inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: colors.carbonBlack }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                      opacity: isDark ? 0.9 : 0.7,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="h-1 w-10 rounded-full group-hover:w-16 transition-all duration-300"
                      style={{
                        backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.3,
                      }}
                    />
                    <div
                      className="h-1 w-5 rounded-full"
                      style={{
                        backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.15,
                      }}
                    />
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
      </div>
    </section>
  );
}