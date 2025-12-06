import React from "react";
import colors from "../../theme/color";

const Benefits = () => {
  const benefits = [
    {
      number: "01",
      title: "Better performance & faster loading",
      metric: "+150%",
    },
    {
      number: "02",
      title: "Reduced downtime & improved uptime",
      metric: "99.9%",
    },
    {
      number: "03",
      title: "Improved security & compliance",
      metric: "100%",
    },
    {
      number: "04",
      title: "Long-term reliability & stability",
      metric: "24/7",
    },
    {
      number: "05",
      title: "Proactive monitoring & alerts",
      metric: "Real-time",
    },
    {
      number: "06",
      title: "Regular updates & patches",
      metric: "Weekly",
    },
    {
      number: "07",
      title: "Cost-effective maintenance",
      metric: "-30%",
    },
    {
      number: "08",
      title: "Scalable infrastructure support",
      metric: "∞",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: colors.platinum,
              border: `1px solid ${colors.border}`,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: colors.carbonBlack }}></span>
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              Our Impact
            </p>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: '-0.02em',
            }}
          >
            Benefits of Rivoogen Support
          </h2>

          <p
            className="text-lg md:text-xl max-w-2xl"
            style={{ 
              color: colors.text, 
              opacity: 0.7,
              lineHeight: '1.6',
            }}
          >
            Measurable improvements across performance, security, and reliability for your applications.
          </p>
        </div>

        {/* 4x2 Grid - 8 Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`,
              }}
            >
              <div
                className="h-full rounded-2xl p-7 transition-all duration-300 relative overflow-hidden flex flex-col"
                style={{
                  background: hoveredIndex === index ? colors.ghostWhite : colors.platinum,
                  border: `2px solid ${hoveredIndex === index ? colors.carbonBlack : colors.border}`,
                  transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === index 
                    ? '0 20px 40px rgba(28, 28, 28, 0.12)' 
                    : '0 4px 8px rgba(28, 28, 28, 0.04)',
                }}
              >
                {/* Accent bar on left */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                  style={{
                    background: hoveredIndex === index 
                      ? `linear-gradient(180deg, ${colors.carbonBlack} 0%, ${colors.text} 100%)`
                      : colors.border,
                  }}
                />

                {/* Top section - Number and Metric */}
                <div className="flex items-start justify-between mb-6">
                  {/* Number */}
                  <div 
                    className="text-sm font-bold tracking-wider"
                    style={{
                      color: hoveredIndex === index ? colors.carbonBlack : colors.text,
                      opacity: hoveredIndex === index ? 1 : 0.4,
                    }}
                  >
                    {benefit.number}
                  </div>

                  {/* Metric - Large and prominent */}
                  <div 
                    className="text-4xl font-bold leading-none transition-all duration-300"
                    style={{ 
                      color: colors.carbonBlack,
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {benefit.metric}
                  </div>
                </div>

                {/* Title - Main content */}
                <h3 
                  className="text-lg font-semibold leading-tight mb-auto"
                  style={{ 
                    color: colors.carbonBlack,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {benefit.title}
                </h3>

                {/* Bottom arrow indicator */}
                <div className="mt-6 flex justify-end">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ 
                      background: hoveredIndex === index ? colors.carbonBlack : colors.border,
                      transform: hoveredIndex === index ? 'translate(4px, -4px) rotate(45deg)' : 'translate(0, 0) rotate(0deg)',
                    }}
                  >
                    <span 
                      className="text-xl font-bold"
                      style={{ 
                        color: hoveredIndex === index ? colors.ghostWhite : colors.carbonBlack,
                        transform: 'rotate(-45deg)',
                        display: 'inline-block',
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div 
          className="mt-12 rounded-2xl p-8 relative overflow-hidden"
          style={{ 
            background: colors.carbonBlack,
            border: `2px solid ${colors.carbonBlack}`,
          }}
        >
          {/* Subtle pattern overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              backgroundImage: `linear-gradient(${colors.ghostWhite} 1px, transparent 1px), linear-gradient(90deg, ${colors.ghostWhite} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <h3 
              className="text-2xl font-bold mb-6 text-center"
              style={{ 
                color: colors.ghostWhite,
                letterSpacing: '-0.02em',
              }}
            >
              Proven Track Record
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center">
              
              <div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors.ghostWhite }}
                >
                  99.9%
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.alabasterGrey }}
                >
                  Uptime SLA
                </div>
              </div>
              
              <div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors.ghostWhite }}
                >
                  &lt;2h
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.alabasterGrey }}
                >
                  Response Time
                </div>
              </div>
              
              <div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;