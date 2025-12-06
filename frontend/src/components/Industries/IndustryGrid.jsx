import React from "react";
import colors from "../../theme/color";

const IndustryGrid = () => {
  const industries = [
    { name: "FinTech", icon: "💳", position: 0 },
    { name: "E-Commerce", icon: "🛒", position: 1 },
    { name: "Healthcare", icon: "🏥", position: 2 },
    { name: "Education", icon: "📚", position: 3 },
    { name: "Automotive", icon: "🚗", position: 4 },
    { name: "AI & SaaS", icon: "🤖", position: 5 },
    { name: "Telecom", icon: "📡", position: 6 },
    { name: "Real Estate", icon: "🏢", position: 7 },
  ];

  // Calculate positions around a circle
  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const radius = 45; // Percentage from center
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-32 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative" style={{ minHeight: '600px' }}>
          
          {/* Orbital circles - decorative - DARKER */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: 0.15 }}
          >
            <div 
              className="rounded-full"
              style={{ 
                width: '80%', 
                paddingBottom: '80%',
                border: `3px dashed ${colors.carbonBlack}`,
              }}
            />
          </div>

          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: 0.1 }}
          >
            <div 
              className="rounded-full"
              style={{ 
                width: '95%', 
                paddingBottom: '95%',
                border: `3px dashed ${colors.carbonBlack}`,
              }}
            />
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-6">
              <div 
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  boxShadow: '0 2px 8px rgba(28, 28, 28, 0.08)',
                }}
              >
                {/* MUCH THICKER, DARKER BLACK DOT */}
                <span 
                  className="rounded-full animate-pulse" 
                  style={{ 
                    width: '12px',
                    height: '12px',
                    background: colors.carbonBlack,
                    boxShadow: `0 0 0 3px ${colors.carbonBlack}33`,
                  }}
                />
                <p
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{ color: colors.carbonBlack, opacity: 0.9 }}
                >
                  Industries We Serve
                </p>
              </div>

              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ 
                  color: colors.carbonBlack,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                }}
              >
                Seamless Solutions Across Industries
              </h2>

              <p 
                className="text-base md:text-lg"
                style={{ 
                  color: colors.text,
                  opacity: 0.7,
                }}
              >
                Rivoogen delivers tailored technology solutions across diverse sectors with expertise and innovation.
              </p>
            </div>
          </div>

          {/* Orbiting Industry Icons */}
          <div className="absolute inset-0">
            {industries.map((item, index) => {
              const pos = getPosition(index, industries.length);
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 hover:scale-110 cursor-pointer group"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Icon Container */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-xl"
                    style={{
                      background: colors.ghostWhite,
                      border: `2px solid ${colors.border}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.carbonBlack;
                      e.currentTarget.style.borderColor = colors.carbonBlack;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.ghostWhite;
                      e.currentTarget.style.borderColor = colors.border;
                    }}
                  >
                    <span 
                      className="text-3xl transition-all duration-300"
                      style={{ filter: 'grayscale(100%)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%)';
                      }}
                    >
                      {item.icon}
                    </span>
                  </div>

                  {/* Label - appears on hover */}
                  <div 
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: colors.carbonBlack,
                      color: colors.ghostWhite,
                    }}
                  >
                    {item.name}
                  </div>

                  {/* Connecting line to center */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${colors.carbonBlack} 0%, transparent 70%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;