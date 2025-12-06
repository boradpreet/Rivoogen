import { TrendingUp, ArrowUpRight, Sparkles, Award } from "lucide-react";
import colors from "../../theme/color";

const cases = [
  {
    title: "AI Chatbot for Telecom Support",
    impact: "Reduced customer support workload by 62% using automated issue resolution and NLP-powered query understanding.",
    metric: "62%",
    metricLabel: "Workload Reduction",
    industry: "Telecom",
  },
  {
    title: "Predictive Sales Engine for Retail",
    impact: "Boosted product demand forecasting accuracy to 91%, helping the retailer optimize inventory and reduce losses.",
    metric: "91%",
    metricLabel: "Accuracy Rate",
    industry: "Retail",
  },
  {
    title: "Fraud Detection System for Finance",
    impact: "Implemented ML-based anomaly detection that identified fraudulent patterns with 89% accuracy in real time.",
    metric: "89%",
    metricLabel: "Detection Accuracy",
    industry: "Finance",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
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
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: colors.surface }}>
            <Award className="w-4 h-4" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
              SUCCESS STORIES
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.carbonBlack }}>
            Case Studies
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-6" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
            Real results from AI-powered solutions that transformed businesses across industries
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => {
            const isDark = index === 1; // Middle card dark
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{
                  backgroundColor: isDark ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                }}
              >
                {/* Background Pattern for Dark Card */}
                {isDark && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
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
                <div className="relative p-8">
                  {/* Industry Tag */}
                  <div
                    className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-6"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                    }}
                  >
                    {item.industry}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {item.title}
                  </h3>

                  {/* Impact Description */}
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{
                      color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                      opacity: isDark ? 0.9 : 0.7,
                    }}
                  >
                    {item.impact}
                  </p>

                  {/* Metric Display */}
                  <div
                    className="p-4 rounded-xl mb-4"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-4xl font-bold mb-1" style={{ color: colors.carbonBlack }}>
                          {item.metric}
                        </p>
                        <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
                          {item.metricLabel}
                        </p>
                      </div>
                      <TrendingUp size={32} style={{ color: colors.carbonBlack, opacity: 0.3 }} />
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Decorative Line */}
                    <div className="flex items-center gap-2">
                      <div
                        className="h-1 w-12 rounded-full group-hover:w-20 transition-all duration-300"
                        style={{
                          backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.3,
                        }}
                      />
                      <div
                        className="h-1 w-6 rounded-full"
                        style={{
                          backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.15,
                        }}
                      />
                    </div>

                    {/* Arrow Icon */}
                    <div
                      className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        backgroundColor: isDark ? colors.ghostWhite : colors.carbonBlack,
                      }}
                    >
                      <ArrowUpRight
                        size={18}
                        style={{ color: isDark ? colors.carbonBlack : colors.ghostWhite }}
                      />
                    </div>
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
        <div className="mt-12">
          <div
            className="p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
            style={{
              backgroundColor: colors.carbonBlack,
              border: `2px solid ${colors.border}`,
            }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: colors.ghostWhite }}>
                Want Similar Results for Your Business?
              </h3>
              <p className="text-base" style={{ color: colors.alabasterGrey }}>
                Let's discuss how AI can transform your operations and drive measurable impact
              </p>
            </div>
            
            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:gap-4 whitespace-nowrap"
              style={{
                backgroundColor: colors.ghostWhite,
                color: colors.carbonBlack,
              }}
            >
              View All Case Studies
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}