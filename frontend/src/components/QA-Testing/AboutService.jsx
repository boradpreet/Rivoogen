import React from "react";
import colors from "../../theme/color";
import { Shield, Users, Lock, Zap, ArrowRight } from "lucide-react";

const AboutService = () => {
  const points = [
    {
      icon: Shield,
      title: "Reduce bugs before production",
      description: "Catch critical issues early in development",
      color: colors.carbonBlack
    },
    {
      icon: Users,
      title: "Enhance user experience",
      description: "Deliver smooth, intuitive interfaces",
      color: colors.carbonBlack
    },
    {
      icon: Lock,
      title: "Improve security & reliability",
      description: "Protect against vulnerabilities and threats",
      color: colors.carbonBlack
    },
    {
      icon: Zap,
      title: "Ensure smooth performance at scale",
      description: "Handle growth without compromising speed",
      color: colors.carbonBlack
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:px-32 relative overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Large decorative text background */}
      <div 
        className="absolute top-10 left-0 text-9xl font-bold opacity-5 pointer-events-none hidden lg:block"
        style={{ color: colors.carbonBlack }}
      >
        QA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: colors.carbonBlack }}
          >
            Why QA Matters for Your Business
          </h2>
          <p 
            className="text-xl leading-relaxed"
            style={{ color: colors.carbonBlack, opacity: 0.75 }}
          >
            High-quality software improves user satisfaction, reduces failures,
            and enhances business reliability. At Rivoogen, our QA ensures your
            software is stable, secure, and ready for production.
          </p>
        </div>

        {/* Horizontal Scroll Cards for Mobile, Grid for Desktop */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {points.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div
                    className="h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
                    style={{
                      background: colors.surface,
                      border: `1px solid ${colors.alabasterGrey}`,
                    }}
                  >
                    {/* Number */}
                    <div 
                      className="text-6xl font-bold opacity-10 mb-4"
                      style={{ color: colors.carbonBlack }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ 
                        background: colors.carbonBlack,
                      }}
                    >
                      <Icon size={24} style={{ color: colors.ghostWhite }} />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg font-bold mb-3 leading-snug"
                      style={{ color: colors.carbonBlack }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: colors.carbonBlack, opacity: 0.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section with Stats */}
        <div 
          className="rounded-3xl overflow-hidden"
          style={{ background: colors.carbonBlack }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - CTA */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: colors.ghostWhite }}
              >
                Ready to ensure flawless software delivery?
              </h3>
              <p 
                className="text-lg mb-6"
                style={{ color: colors.alabasterGrey }}
              >
                Let's discuss how our QA expertise can transform your product quality
              </p>
            </div>

            {/* Right - Stats Grid */}
            <div 
              className="p-10 md:p-12 grid grid-cols-2 gap-8"
              style={{ background: colors.surface }}
            >
              <div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.carbonBlack }}
                >
                  99%
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  Bug Detection
                </div>
              </div>
              
              <div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.carbonBlack }}
                >
                  500+
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  Projects Done
                </div>
              </div>
              
              <div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.carbonBlack }}
                >
                  24/7
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  Monitoring
                </div>
              </div>
              
              <div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.carbonBlack }}
                >
                  100%
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;