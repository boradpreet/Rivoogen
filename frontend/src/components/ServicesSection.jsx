import {
  Bot,
  Cpu,
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
  Wrench,
  Workflow,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import colors from "../theme/color";

const services = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Intelligent automation, AI agents, predictive models and NLP solutions for enterprise growth.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    desc: "Automate manual workflows, integrate systems, and build custom automation pipelines.",
  },
  {
    icon: Cpu,
    title: "Semiconductor / VLSI",
    desc: "Chip design, VLSI engineering, FPGA/ASIC development, embedded systems & firmware.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern, responsive and high-performance web applications using latest JavaScript frameworks.",
  },
  {
    icon: Layers,
    title: "Custom Software Development",
    desc: "Tailor-made enterprise solutions, SaaS platforms, business tools and scalable backend systems.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    desc: "Automation testing, manual testing, performance testing, and end-to-end quality engineering.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Deploy, scale and secure applications on AWS, Azure and Google Cloud with DevOps pipelines.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    desc: "24/7 support, monitoring, security updates, bug fixing and SLA-based maintenance plans.",
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger card animations
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to determine card background color based on screen size
  const getCardBackground = (index) => {
    // Desktop (lg and above): every 4th card is dark (0, 4, 8...)
    // Mobile/Tablet: alternating pattern (0, 2, 4, 6...)
    return {
      mobile: index % 2 === 0 ? colors.carbonBlack : colors.ghostWhite,
      desktop: index % 4 === 0 ? colors.carbonBlack : colors.ghostWhite,
    };
  };

  // Function to check if card should be dark
  const isCardDark = (index) => {
    // For mobile/tablet: alternating (0, 2, 4, 6...)
    // For desktop: every 4th (0, 4, 8...)
    return {
      mobile: index % 2 === 0,
      desktop: index % 4 === 0,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: colors.surface }}
    >
      {/* Diagonal Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${colors.carbonBlack},
            ${colors.carbonBlack} 2px,
            transparent 2px,
            transparent 20px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.carbonBlack }} />
            <span
              className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
              style={{ color: colors.carbonBlack, opacity: 0.6 }}
            >
              What We Offer
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
            <div>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
                style={{ color: colors.carbonBlack }}
              >
                Our Services
              </h2>
              <div
                className={`flex items-center gap-3 transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              >
                <div
                  className="h-1 w-16 sm:w-20 rounded-full"
                  style={{ backgroundColor: colors.carbonBlack }}
                />
                <div
                  className="h-1 w-8 sm:w-10 rounded-full"
                  style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }}
                />
              </div>
            </div>

            <p
              className={`text-sm sm:text-base lg:text-lg max-w-xl transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              style={{ color: colors.carbonBlack, opacity: 0.7 }}
            >
              We provide end-to-end digital engineering, AI, automation, cloud and
              custom software solutions for businesses of all sizes.
            </p>
          </div>
        </div>

        {/* Services Grid - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isCardVisible = visibleCards.includes(index);
            const isDark = isCardDark(index);
            const backgrounds = getCardBackground(index);

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-2xl ${
                  isCardVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  backgroundColor: backgrounds.mobile,
                  border: `2px solid ${colors.border}`,
                }}
              >
                {/* Desktop background override */}
                <div
                  className="hidden lg:block absolute inset-0 -z-10"
                  style={{
                    backgroundColor: backgrounds.desktop,
                  }}
                />

                {/* Background Pattern for Dark Cards */}
                <div
                  className={`absolute inset-0 opacity-5 ${isDark.mobile ? 'lg:hidden' : 'hidden'}`}
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />
                <div
                  className={`hidden lg:block absolute inset-0 opacity-5 ${isDark.desktop ? '' : 'hidden'}`}
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Hover Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.softLinen}40 0%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-5 sm:p-6">
                  {/* Icon Container */}
                  <div
                    className="inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{
                      backgroundColor: colors.ghostWhite,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Icon
                      size={24}
                      className="sm:w-7 sm:h-7"
                      style={{ color: colors.carbonBlack }}
                    />
                  </div>

                  {/* Title - Mobile */}
                  <h3
                    className="lg:hidden text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:translate-x-1 transition-transform duration-300 leading-tight"
                    style={{
                      color: isDark.mobile ? colors.ghostWhite : colors.carbonBlack,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Title - Desktop */}
                  <h3
                    className="hidden lg:block text-lg font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300 leading-tight"
                    style={{
                      color: isDark.desktop ? colors.ghostWhite : colors.carbonBlack,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description - Mobile */}
                  <p
                    className="lg:hidden text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4"
                    style={{
                      color: isDark.mobile ? colors.alabasterGrey : colors.carbonBlack,
                      opacity: isDark.mobile ? 0.9 : 0.7,
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Description - Desktop */}
                  <p
                    className="hidden lg:block text-sm leading-relaxed mb-4"
                    style={{
                      color: isDark.desktop ? colors.alabasterGrey : colors.carbonBlack,
                      opacity: isDark.desktop ? 0.9 : 0.7,
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Decorative Line - Mobile */}
                    <div className="lg:hidden flex items-center gap-2">
                      <div
                        className="h-px w-8 group-hover:w-12 transition-all duration-300"
                        style={{
                          backgroundColor: isDark.mobile ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.3,
                        }}
                      />
                      <div
                        className="h-px w-4"
                        style={{
                          backgroundColor: isDark.mobile ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.15,
                        }}
                      />
                    </div>

                    {/* Decorative Line - Desktop */}
                    <div className="hidden lg:flex items-center gap-2">
                      <div
                        className="h-px w-8 group-hover:w-12 transition-all duration-300"
                        style={{
                          backgroundColor: isDark.desktop ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.3,
                        }}
                      />
                      <div
                        className="h-px w-4"
                        style={{
                          backgroundColor: isDark.desktop ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.15,
                        }}
                      />
                    </div>

                    {/* Arrow Icon - Mobile */}
                    <div
                      className="lg:hidden p-1.5 sm:p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                      style={{
                        backgroundColor: isDark.mobile ? colors.ghostWhite : colors.carbonBlack,
                      }}
                    >
                      <ArrowUpRight
                        size={12}
                        className="sm:w-3.5 sm:h-3.5"
                        style={{
                          color: isDark.mobile ? colors.carbonBlack : colors.ghostWhite,
                        }}
                      />
                    </div>

                    {/* Arrow Icon - Desktop */}
                    <div
                      className="hidden lg:block p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                      style={{
                        backgroundColor: isDark.desktop ? colors.ghostWhite : colors.carbonBlack,
                      }}
                    >
                      <ArrowUpRight
                        size={14}
                        style={{
                          color: isDark.desktop ? colors.carbonBlack : colors.ghostWhite,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Side Accent - appears on hover - Mobile */}
                <div
                  className="lg:hidden absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                  style={{
                    backgroundColor: isDark.mobile ? colors.ghostWhite : colors.carbonBlack,
                  }}
                />

                {/* Side Accent - Desktop */}
                <div
                  className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                  style={{
                    backgroundColor: isDark.desktop ? colors.ghostWhite : colors.carbonBlack,
                  }}
                />

                {/* Top Right Corner Accent - Mobile */}
                <div
                  className="lg:hidden absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${
                      isDark.mobile ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
                    } 0%, transparent 70%)`,
                  }}
                />

                {/* Top Right Corner Accent - Desktop */}
                <div
                  className="hidden lg:block absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${
                      isDark.desktop ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
                    } 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}