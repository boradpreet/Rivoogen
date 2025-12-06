import React from "react";
import colors from "../../theme/color";

const MissionVision = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const items = [
    {
      number: "01",
      title: "Our Mission",
      description: "To empower startups and enterprises with cutting-edge technology that accelerates growth, reduces manual effort, and enhances digital experiences."
    },
    {
      number: "02",
      title: "Our Vision",
      description: "To become a global leader in AI-driven automation, cloud technology, and intelligent software systems—enabling businesses to scale effortlessly."
    },
    {
      number: "03",
      title: "Our Values",
      description: "Innovation, transparency, and customer success drive everything we do. We believe in building lasting partnerships through quality and reliability."
    },
    {
      number: "04",
      title: "Our Commitment",
      description: "Delivering exceptional results through modern technology, expert teams, and a customer-first approach that ensures your success is our priority."
    }
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: colors.platinum }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: colors.platinum }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
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
              Who We Are
            </p>
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: '-0.02em',
            }}
          >
            Mission, Vision & Values
          </h2>

          <p 
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ 
              color: colors.text,
              opacity: 0.7,
            }}
          >
            The principles that guide us in building innovative solutions for the future.
          </p>
        </div>

        {/* Grid of Cards - 4 columns in 1 row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group rounded-2xl p-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                background: hoveredIndex === index 
                  ? `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.platinum} 100%)`
                  : colors.ghostWhite,
                border: `2px solid ${hoveredIndex === index ? colors.carbonBlack : colors.border}`,
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index 
                  ? '0 20px 40px rgba(28, 28, 28, 0.12)' 
                  : '0 4px 8px rgba(28, 28, 28, 0.04)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{
                  background: hoveredIndex === index 
                    ? `linear-gradient(90deg, ${colors.carbonBlack} 0%, ${colors.text} 100%)`
                    : colors.border,
                }}
              />

              {/* Icon Circle */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hoveredIndex === index ? colors.carbonBlack : colors.platinum,
                    border: `2px solid ${hoveredIndex === index ? colors.carbonBlack : colors.border}`,
                    transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ 
                      color: hoveredIndex === index ? colors.ghostWhite : colors.carbonBlack 
                    }}
                  >
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-lg md:text-xl font-bold mb-3 leading-tight text-center"
                style={{ color: colors.carbonBlack }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p 
                className="text-xs md:text-sm leading-relaxed text-center transition-opacity duration-300"
                style={{ 
                  color: colors.text,
                  opacity: hoveredIndex === index ? 0.8 : 0.6,
                }}
              >
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 flex justify-center">
                <div 
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: hoveredIndex === index ? '60px' : '30px',
                    background: colors.carbonBlack,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;