import React from "react";
import colors from "../../theme/color";
import { Shield, Clock, TrendingUp, Wrench } from "lucide-react";

const AboutService = () => {
  const points = [
    {
      icon: Shield,
      title: "Continuous Monitoring",
      description: "Continuous monitoring and issue prevention",
      stat: "24/7"
    },
    {
      icon: Clock,
      title: "Faster Resolution",
      description: "Faster bug resolution and enhancements",
      stat: "< 2hrs"
    },
    {
      icon: TrendingUp,
      title: "Performance Updates",
      description: "Improved performance and security updates",
      stat: "99.9%"
    },
    {
      icon: Wrench,
      title: "Proactive Care",
      description: "Reduced downtime with proactive maintenance",
      stat: "Zero"
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:px-32"
      style={{ background: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Title */}
          <div>
            <div className="inline-block mb-4">
              <span 
                className="text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{ 
                  background: colors.carbonBlack,
                  color: colors.ghostWhite
                }}
              >
                Our Commitment
              </span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: colors.carbonBlack }}
            >
              Why Support & Maintenance Matters
            </h2>
          </div>

          {/* Right - Description */}
          <div>
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: colors.carbonBlack, opacity: 0.8 }}
            >
              Every digital product requires ongoing support to function smoothly.
              Rivoogen helps you maintain high uptime, fix issues instantly, and keep
              your systems updated and secure.
            </p>
          </div>
        </div>

        {/* Points Grid - 4 columns in 1 row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                style={{
                  background: colors.surface,
                  border: `2px solid ${colors.alabasterGrey}`,
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      background: colors.carbonBlack,
                    }}
                  >
                    <Icon size={24} style={{ color: colors.ghostWhite }} />
                  </div>

                  {/* Stat Badge */}
                  <div 
                    className="inline-block px-3 py-1 rounded-lg mb-4"
                    style={{ background: colors.softLinen }}
                  >
                    <div 
                      className="text-lg font-bold"
                      style={{ color: colors.carbonBlack }}
                    >
                      {item.stat}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-lg font-bold mb-2"
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

                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: colors.carbonBlack }}
                />
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div 
          className="mt-12 rounded-2xl p-8 md:p-10"
          style={{ background: colors.surface }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.carbonBlack }}
              >
                99.9%
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: colors.carbonBlack, opacity: 0.7 }}
              >
                Uptime Guarantee
              </div>
            </div>
            
            <div>
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.carbonBlack }}
              >
                &lt;2hrs
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: colors.carbonBlack, opacity: 0.7 }}
              >
                Average Response
              </div>
            </div>
            
            <div>
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.carbonBlack }}
              >
                24/7
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: colors.carbonBlack, opacity: 0.7 }}
              >
                Support Available
              </div>
            </div>
            
            <div>
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.carbonBlack }}
              >
                500+
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: colors.carbonBlack, opacity: 0.7 }}
              >
                Apps Maintained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;