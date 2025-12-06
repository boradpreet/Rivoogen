import React from "react";
import colors from "../../theme/color";
import { CheckSquare, Zap, Activity, Shield, Code, Smartphone, ArrowUpRight } from "lucide-react";

const Services = () => {
  const list = [
    {
      icon: CheckSquare,
      title: "Manual Testing",
      desc: "Functional testing, regression, UI/UX checks, and end-user flow validation.",
      highlight: "Expert-driven"
    },
    {
      icon: Zap,
      title: "Automation Testing",
      desc: "Selenium, Playwright, Cypress automation with CI/CD pipelines.",
      highlight: "Fast & Scalable"
    },
    {
      icon: Activity,
      title: "Performance Testing",
      desc: "Load, stress, and scalability testing using JMeter & modern tools.",
      highlight: "High Load"
    },
    {
      icon: Shield,
      title: "Security Testing",
      desc: "API security, vulnerability detection, authentication testing.",
      highlight: "Protected"
    },
    {
      icon: Code,
      title: "API Testing",
      desc: "Postman collections, automated test suites, validation flows.",
      highlight: "Comprehensive"
    },
    {
      icon: Smartphone,
      title: "Mobile App Testing",
      desc: "Android/iOS testing for UI, flows, performance, and crashes.",
      highlight: "Cross-platform"
    },
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32 relative"
      style={{ background: colors.background }}
    >
      {/* Subtle background decoration */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: colors.alabasterGrey }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with description */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span 
              className="text-sm font-bold tracking-wider uppercase mb-2 block"
              style={{ color: colors.carbonBlack, opacity: 0.6 }}
            >
              Our Expertise
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: colors.carbonBlack }}
            >
              QA & Testing Services
            </h2>
          </div>
          
          <p 
            className="text-lg max-w-md"
            style={{ color: colors.carbonBlack, opacity: 0.7 }}
          >
            Comprehensive solutions for every testing need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                <div
                  className="h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: colors.surface,
                    border: `2px solid ${colors.alabasterGrey}`,
                  }}
                >
                  {/* Decorative corner */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 opacity-5"
                    style={{ 
                      background: colors.carbonBlack,
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                    }}
                  />

                  {/* Header with icon and highlight */}
                  <div className="flex items-start justify-between mb-5">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6"
                      style={{ 
                        background: colors.carbonBlack,
                      }}
                    >
                      <Icon size={28} style={{ color: colors.ghostWhite }} />
                    </div>
                    
                    <span 
                      className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                      style={{ 
                        background: colors.softLinen,
                        color: colors.carbonBlack
                      }}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: colors.carbonBlack }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed mb-4"
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    {item.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div 
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: colors.carbonBlack }}
                  >
                    <ArrowUpRight size={16} style={{ color: colors.ghostWhite }} />
                  </div>

                  {/* Bottom progress bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: colors.carbonBlack }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;