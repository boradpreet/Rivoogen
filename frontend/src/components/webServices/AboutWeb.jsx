import React from 'react';
import colors from '../../theme/color';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.carbonBlack }}
    >

      {/* Decorative SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill={colors.ghostWhite}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <div 
              className="inline-block px-4 py-1 rounded-full mb-6 text-sm font-medium"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: colors.ghostWhite 
              }}
            >
              Best IT Company
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: colors.ghostWhite }}
            >
              Get Our Business
              <br />
              This It Solution
            </h1>

            <p 
              className="text-base md:text-lg mb-8 leading-relaxed max-w-xl"
              style={{ color: colors.alabasterGrey }}
            >
              We create fast, secure and responsive websites that help businesses connect with customers, automate work and increase revenu.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ 
                backgroundColor: colors.surface,
                aspectRatio: '4 / 3'
              }}
            >
              <img 
                src="https://img.freepik.com/premium-vector/website-loading-line-glyph-illustration-download_203633-3768.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Web Services Illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative circles */}
            <div 
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: colors.ghostWhite }}
            />
            <div 
              className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-20"
              style={{ backgroundColor: colors.ghostWhite }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
