import React from "react";
import colors from "../../theme/color";

const ImportanceSection = () => {
  const points = [
    {
      title: "Power Every Device",
      description: "From smartphones to supercomputers, semiconductors are the foundation of all modern electronics.",
    },
    {
      title: "Enable Cutting-Edge Tech",
      description: "Driving innovations in AI, robotics, IoT, 5G networks, and industrial automation systems.",
    },
    {
      title: "Critical Infrastructure",
      description: "Essential for defense systems, aerospace technology, telecommunications, and advanced healthcare equipment.",
    },
    {
      title: "Global Economic Driver",
      description: "High-value industry with exponential global demand and strategic national importance.",
    },
    {
      title: "Future of Manufacturing",
      description: "Fundamental to the advancement of technology and the evolution of smart manufacturing ecosystems.",
    },
  ];

  return (
    <section
      className="relative px-6 py-20 md:py-24 lg:py-28 md:px-16 lg:px-32 overflow-hidden"
      style={{ background: colors.surface }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: colors.softLinen }}
      />
      <div 
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: colors.platinum }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: colors.carbonBlack,
              color: colors.ghostWhite,
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            GLOBAL IMPACT
          </div>

          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: colors.carbonBlack }}
          >
            Why Semiconductors Are Important
          </h2>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: colors.text }}
          >
            Semiconductors are the invisible force powering our connected world, 
            driving innovation across every industry and shaping the future of technology.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{
                backgroundColor: colors.ghostWhite,
                border: `2px solid ${colors.border}`,
              }}
            >
              {/* Number indicator */}
              <div 
                className="flex items-center gap-3 mb-5"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: colors.carbonBlack,
                    color: colors.ghostWhite,
                  }}
                >
                  {index + 1}
                </div>
                <div 
                  className="h-px flex-1"
                  style={{ backgroundColor: colors.border }}
                />
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-bold mb-3 leading-tight"
                style={{ color: colors.carbonBlack }}
              >
                {point.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base leading-relaxed"
                style={{ color: colors.text, opacity: 0.8 }}
              >
                {point.description}
              </p>

              {/* Decorative corner accent */}
              <div 
                className="absolute top-4 right-4 w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: `${colors.carbonBlack}10`,
                }}
              >
                <svg 
                  className="w-full h-full p-2" 
                  fill="none" 
                  stroke={colors.carbonBlack} 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300"
                style={{
                  backgroundColor: colors.carbonBlack,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scaleX(0)'}
              />
            </div>
          ))}

          {/* CTA Card - 6th position */}
          <div
            className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            style={{
              backgroundColor: colors.carbonBlack,
              border: `2px solid ${colors.carbonBlack}`,
            }}
          >
            {/* Icon */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `${colors.ghostWhite}20`,
                border: `2px solid ${colors.ghostWhite}30`,
              }}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke={colors.ghostWhite} 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            {/* Text */}
            <h3 
              className="text-xl font-bold mb-3"
              style={{ color: colors.ghostWhite }}
            >
              Learn More
            </h3>
            <p 
              className="text-sm mb-5"
              style={{ color: colors.alabasterGrey }}
            >
              Discover how semiconductors power innovation
            </p>

            {/* Button */}
            <button
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.ghostWhite,
                color: colors.carbonBlack,
              }}
            >
              Explore Our Services
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ImportanceSection;