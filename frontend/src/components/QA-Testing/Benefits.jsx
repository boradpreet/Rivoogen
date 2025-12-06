import React from "react";
import colors from "../../theme/color";
import { Zap, Shield, TrendingDown, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Release Cycles",
      description: "Faster release cycles with fewer bugs",
      metric: "40%",
      label: "Faster"
    },
    {
      icon: Shield,
      title: "Better Stability",
      description: "Better user experience and stability",
      metric: "99.9%",
      label: "Uptime"
    },
    {
      icon: TrendingDown,
      title: "Cost Efficiency",
      description: "Reduced long-term development costs",
      metric: "30%",
      label: "Savings"
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 support and quality monitoring",
      metric: "24/7",
      label: "Support"
    },
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32 relative overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Decorative background shape */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: colors.alabasterGrey }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span 
              className="text-sm font-bold tracking-widest uppercase mb-2 block"
              style={{ color: colors.carbonBlack, opacity: 0.6 }}
            >
              Why Rivoogen
            </span>
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ color: colors.carbonBlack }}
            >
              Benefits of QA with{" "}
              <span 
                className="inline-block px-3 py-1 rounded-lg"
                style={{ background: colors.carbonBlack, color: colors.ghostWhite }}
              >
                Rivoogen
              </span>
            </h2>
          </div>
          
          <div 
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: colors.surface }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: colors.carbonBlack }}
            />
            <span 
              className="text-sm font-medium"
              style={{ color: colors.carbonBlack }}
            >
              Trusted by 500+ companies
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Main Card */}
                <div
                  className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
                  style={{ 
                    background: colors.surface,
                    border: `2px solid ${colors.alabasterGrey}`
                  }}
                >
                  {/* Top section with icon and metric */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6"
                      style={{ 
                        background: colors.carbonBlack,
                      }}
                    >
                      <Icon size={28} style={{ color: colors.ghostWhite }} />
                    </div>
                    
                    {/* Metric Badge */}
                    <div className="text-right">
                      <div 
                        className="text-2xl font-bold leading-none mb-1"
                        style={{ color: colors.carbonBlack }}
                      >
                        {benefit.metric}
                      </div>
                      <div 
                        className="text-xs font-medium uppercase tracking-wider"
                        style={{ color: colors.carbonBlack, opacity: 0.6 }}
                      >
                        {benefit.label}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.carbonBlack }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    {benefit.description}
                  </p>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: colors.carbonBlack }}
                  />

                  {/* Corner number */}
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm opacity-20"
                    style={{ 
                      background: colors.carbonBlack,
                      color: colors.ghostWhite
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;