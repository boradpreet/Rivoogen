import React from 'react';
import colors from '../../theme/color';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: colors.ghostWhite, height: '85vh' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/13/bc/3c/13bc3c6bad007d5b1c61a7fb84645265.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `linear-gradient(to bottom right, ${colors.carbonBlack}F2, ${colors.carbonBlack}E6, ${colors.carbonBlack}D9)`
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
        <div className="w-full lg:w-3/5 py-8">
          {/* Eyebrow Text */}
          <div 
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full backdrop-blur-sm border"
            style={{
              backgroundColor: `${colors.platinum}1A`,
              borderColor: `${colors.alabasterGrey}33`
            }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: colors.platinum }}
            ></div>
            <span 
              className="text-xs font-medium tracking-wider uppercase"
              style={{ color: colors.softLinen }}
            >
              AI & Machine Learning Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
            style={{ color: colors.ghostWhite }}
          >
            Build Smarter,{' '}
            <span className="relative inline-block">
              <span 
                className="relative z-10"
                style={{
                  background: `linear-gradient(to right, ${colors.platinum}, ${colors.alabasterGrey}, ${colors.softLinen})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Faster
              </span>
              <span 
                className="absolute bottom-1 left-0 w-full h-2 -z-10"
                style={{ backgroundColor: `${colors.platinum}33` }}
              ></span>
            </span>
            , and More Efficient
          </h1>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: colors.ghostWhite }}
          >
            With AI & ML
          </h2>

          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg mb-6 leading-relaxed max-w-2xl"
            style={{ color: colors.alabasterGrey }}
          >
            We design and deploy intelligent AI/ML systems that automate workflows, 
            improve decision-making, and drive business growth.
          </p>
        
        </div>
      </div>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          className="w-full h-16 sm:h-20 lg:h-24" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill={colors.ghostWhite}
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: `${colors.platinum}4D`,
            top: '25%',
            left: '25%',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: `${colors.alabasterGrey}33`,
            top: '33%',
            right: '25%',
            animation: 'float 8s ease-in-out 2s infinite'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: `${colors.softLinen}4D`,
            bottom: '33%',
            left: '33%',
            animation: 'float 10s ease-in-out 4s infinite'
          }}
        ></div>
      </div>

      {/* Add keyframes animation inline */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;