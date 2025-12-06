import React from "react";
import colors from "../../theme/color";

const HeroSection = () => {
  const features = [
    { text: "24/7 Monitoring" },
    { text: "99.9% Uptime" },
    { text: "<2h Response" }
  ];

  return (
    <section
      style={{
        background: colors.carbonBlack,
        position: "relative",
        overflow: "hidden"
      }}
      className="w-full px-6 py-16 md:py-20 md:px-16 lg:px-32"
    >
      {/* Background Image - Tech pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80')`,
          opacity: 0.08,
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Decorative background elements */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
        style={{ background: colors.ghostWhite }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
        style={{ background: colors.ghostWhite }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Center aligned content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              background: 'rgba(250, 250, 255, 0.1)',
              border: `1px solid rgba(250, 250, 255, 0.2)`
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: colors.ghostWhite }}
            />
            <span 
              className="text-sm font-semibold"
              style={{ color: colors.ghostWhite }}
            >
              Always-On Support
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ 
              color: colors.ghostWhite,
              letterSpacing: '-0.02em',
            }}
          >
            Support & Maintenance
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
            style={{ color: colors.alabasterGrey, opacity: 0.9 }}
          >
            Rivoogen ensures your applications always stay fast, secure, and fully
            optimized with round-the-clock support and maintenance services.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ 
                  background: 'rgba(250, 250, 255, 0.1)',
                  border: `1px solid rgba(250, 250, 255, 0.2)`
                }}
              >
                <span style={{ color: colors.ghostWhite }}>✓</span>
                <span 
                  className="text-sm font-medium"
                  style={{ color: colors.ghostWhite }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative shape - Triangle/Angular design */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '100px' }}
      >
        <path
          d="M0,100 L0,40 L720,80 L1440,40 L1440,100 Z"
          style={{ fill: colors.ghostWhite }}
        />
      </svg>
    </section>
  );
};

export default HeroSection;