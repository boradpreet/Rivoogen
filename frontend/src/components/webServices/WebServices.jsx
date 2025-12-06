import { Globe, ShoppingCart, Code, Database, Palette, Wrench, ArrowRight, Sparkles } from "lucide-react";
import colors from "../../theme/color";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom-built, responsive websites tailored to your brand and business goals",
    features: ["Responsive design", "SEO optimized", "Fast loading"],
  },
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Scalable and secure web apps built with modern frameworks and best practices",
    features: ["React/Next.js", "Real-time features", "Cloud integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Complete online store solutions with payment gateways and inventory management",
    features: ["Payment integration", "Product catalog", "Order management"],
  },
  {
    icon: Database,
    title: "Backend API Development",
    description: "Robust REST and GraphQL APIs for seamless data flow and integrations",
    features: ["RESTful APIs", "Authentication", "Database design"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that delivers intuitive and engaging digital experiences",
    features: ["Wireframing", "Prototyping", "User testing"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and monitoring to keep your site running smoothly",
    features: ["24/7 monitoring", "Security updates", "Performance tuning"],
  },
];

export default function WebServicesSection() {
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
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
              WHAT WE OFFER
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.carbonBlack }}>
                Web Development Services
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>
            </div>

            <p className="text-base max-w-xl" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
              Comprehensive web solutions from design to deployment and beyond
            </p>
          </div>
        </div>

        {/* Services Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                    className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                      opacity: isDark ? 0.9 : 0.7,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: isDark ? colors.ghostWhite : colors.carbonBlack,
                            opacity: 0.5,
                          }}
                        />
                        <span
                          className="text-xs"
                          style={{
                            color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                            opacity: isDark ? 0.8 : 0.6,
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="flex items-center justify-between mt-4">
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

                    {/* Arrow */}
                    <div
                      className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        backgroundColor: isDark ? colors.ghostWhite : colors.carbonBlack,
                      }}
                    >
                      <ArrowRight
                        size={14}
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
      </div>
    </section>
  );
}