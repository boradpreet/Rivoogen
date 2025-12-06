import {
  Building2,
  Heart,
  GraduationCap,
  ShoppingBag,
  Smartphone,
  Cpu,
  Plane,
  Factory,
  Truck,
  Home,
  Zap,
  Gamepad2,
  Video,
  Car,
  Briefcase,
  TrendingUp,
  Radio,
  Sparkles,
} from "lucide-react";
import colors from "../../theme/color";

const industries = [
  {
    icon: Building2,
    title: "Finance & Banking",
    desc: "Fraud detection, predictive credit scoring, automated document processing, and risk modeling to improve accuracy and security.",
    category: "Finance",
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    desc: "Medical image analysis, patient monitoring systems, appointment automation, and AI-driven diagnostic support.",
    category: "Healthcare",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Recommendation engines, demand forecasting, sentiment analysis, and AI chatbots to boost sales and customer experience.",
    category: "Commerce",
  },
  {
    icon: Radio,
    title: "Telecom",
    desc: "Network optimization, automated issue resolution, predictive maintenance, and intelligent customer support systems.",
    category: "Technology",
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    desc: "AI-driven assessments, personalized learning engines, attendance automation, result analytics, and smart content generation.",
    category: "Education",
  },
  {
    icon: Home,
    title: "Real Estate & PropTech",
    desc: "Price prediction, lead qualification scoring, property recommendations, and automation for rental/sales workflows.",
    category: "Real Estate",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Route optimization, inventory forecasting, fleet management AI, and automation for end-to-end supply visibility.",
    category: "Operations",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    desc: "Computer vision quality checks, defect detection, predictive maintenance, and robotic automation systems.",
    category: "Industry",
  },
];

export default function IndustriesSection() {
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
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5" style={{ color: colors.carbonBlack }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
                OUR EXPERTISE
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: colors.carbonBlack }}>
              Industries We Serve
            </h2>
            
            <div className="flex items-center gap-3">
              <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
            </div>
          </div>

          <p className="text-lg max-w-xl hidden lg:block" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
            Delivering tailored digital solutions across diverse sectors with deep domain expertise and AI-powered innovation
          </p>
        </div>

        {/* One-Line Grid - 2x4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isDark = index % 2 === 0;
            
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
                <div className="relative p-6 flex items-start gap-4">
                  {/* Category Tag */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                      opacity: 0.7,
                    }}
                  >
                    {item.category}
                  </div>

                  {/* Icon Container */}
                  <div
                    className="flex-shrink-0 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Icon
                      size={32}
                      style={{ color: colors.carbonBlack }}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{
                        color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: isDark ? 0.9 : 0.7,
                      }}
                    >
                      {item.desc}
                    </p>

                    {/* Bottom Accent */}
                    <div className="flex items-center gap-2">
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

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>8+</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Industries Served</p>
          </div>
          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>500+</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Projects Delivered</p>
          </div>
          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>200+</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Global Clients</p>
          </div>
          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>99%</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}