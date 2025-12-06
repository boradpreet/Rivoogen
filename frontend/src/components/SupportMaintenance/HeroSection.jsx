import React from "react";
import colors from "../../theme/color";

const HeroSection = () => {
  return (
    <section
      className="relative w-full px-6 py-16 md:py-20 md:px-16 lg:px-32 overflow-hidden"
      style={{
        background: colors.carbonBlack,
      }}
    >
      {/* Background Image - Tech/Circuit pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80')`, // Tech circuit board
          opacity: 0.12,
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Dark overlay to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.carbonBlack} 0%, rgba(28, 28, 28, 0.9) 100%)`,
        }}
      />

      {/* Background pattern for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${colors.carbonBlack} 1px, transparent 1px), linear-gradient(90deg, ${colors.carbonBlack} 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          opacity: 0.03,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Smooth curved wave element - bottom only */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: '120px' }}
        >
          <path
            d="M0,60 C240,100 480,100 720,80 C960,60 1200,40 1440,60 L1440,120 L0,120 Z"
            style={{ fill: colors.ghostWhite }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 animate-fadeIn"
          style={{
            background: 'rgba(250, 250, 255, 0.1)',
            border: `2px solid rgba(250, 250, 255, 0.2)`,
          }}
        >
          <span 
            className="w-2.5 h-2.5 rounded-full animate-pulse" 
            style={{ background: colors.ghostWhite }}
          />
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: colors.ghostWhite }}
          >
            Always-On Support
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight animate-slideUp"
          style={{ 
            color: colors.ghostWhite,
            letterSpacing: '-0.02em',
          }}
        >
          Support &{" "}
          <span 
            className="relative inline-block"
            style={{
              background: `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.alabasterGrey} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Maintenance
          </span>
        </h1>

        {/* Description */}
        <p 
          className="text-lg md:text-xl max-w-4xl mb-8 leading-relaxed animate-slideUp"
          style={{ 
            color: colors.alabasterGrey, 
            opacity: 0.9,
            animationDelay: '0.1s',
          }}
        >
          Rivoogen ensures your applications always stay fast, secure, and fully
          optimized with round-the-clock support and maintenance services.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ 
                background: 'rgba(250, 250, 255, 0.1)',
                border: `1px solid rgba(250, 250, 255, 0.2)`,
              }}
            >
              <span style={{ color: colors.ghostWhite }}>✓</span>
            </div>
            <div>
              <div 
                className="text-xl font-bold"
                style={{ color: colors.ghostWhite }}
              >
                24/7
              </div>
              <div 
                className="text-xs font-medium"
                style={{ color: colors.alabasterGrey }}
              >
                Monitoring
              </div>
            </div>
          </div>

          <div 
            className="hidden md:block w-px h-10"
            style={{ background: 'rgba(250, 250, 255, 0.2)' }}
          />

          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ 
                background: 'rgba(250, 250, 255, 0.1)',
                border: `1px solid rgba(250, 250, 255, 0.2)`,
              }}
            >
              <span style={{ color: colors.ghostWhite }}>✓</span>
            </div>
            <div>
              <div 
                className="text-xl font-bold"
                style={{ color: colors.ghostWhite }}
              >
                99.9%
              </div>
              <div 
                className="text-xs font-medium"
                style={{ color: colors.alabasterGrey }}
              >
                Uptime SLA
              </div>
            </div>
          </div>

          <div 
            className="hidden md:block w-px h-10"
            style={{ background: 'rgba(250, 250, 255, 0.2)' }}
          />

          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ 
                background: 'rgba(250, 250, 255, 0.1)',
                border: `1px solid rgba(250, 250, 255, 0.2)`,
              }}
            >
              <span style={{ color: colors.ghostWhite }}>✓</span>
            </div>
            <div>
              <div 
                className="text-xl font-bold"
                style={{ color: colors.ghostWhite }}
              >
                &lt;2h
              </div>
              <div 
                className="text-xs font-medium"
                style={{ color: colors.alabasterGrey }}
              >
                Response Time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out backwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;