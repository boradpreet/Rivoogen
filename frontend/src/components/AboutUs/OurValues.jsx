import React from "react";
import colors from "../../theme/color";

const OurValues = () => {
  const values = [
    { 
      title: "Innovation", 
      desc: "We adopt the latest technologies to build future-ready solutions.",
      number: "01"
    },
    { 
      title: "Quality", 
      desc: "Precision, performance, and reliability in every project.",
      number: "02"
    },
    { 
      title: "Transparency", 
      desc: "Clear communication and honest collaboration.",
      number: "03"
    },
    { 
      title: "Customer Success", 
      desc: "We measure our success through our clients' growth.",
      number: "04"
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT - Heading */}
          <div className="lg:sticky lg:top-24">
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
                Our Values
              </p>
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: '-0.02em',
              }}
            >
              What Drives Us Forward
            </h2>
          </div>

          {/* RIGHT - Step-by-Step List */}
          <div className="space-y-0">
            {values.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group transition-all duration-300 cursor-pointer"
                style={{
                  borderBottom: i < values.length - 1 ? `1px solid ${colors.border}` : 'none',
                  paddingTop: i === 0 ? '0' : '24px',
                  paddingBottom: '24px',
                }}
              >
                <div className="flex gap-6 items-start">
                  {/* Vertical Line Connector */}
                  <div className="flex flex-col items-center">
                    {/* Number Badge */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 flex-shrink-0"
                      style={{
                        background: hoveredIndex === i ? colors.carbonBlack : colors.platinum,
                        color: hoveredIndex === i ? colors.ghostWhite : colors.carbonBlack,
                        border: `2px solid ${hoveredIndex === i ? colors.carbonBlack : colors.border}`,
                        transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {item.number}
                    </div>

                    {/* Connecting Line */}
                    {i < values.length - 1 && (
                      <div 
                        className="w-0.5 flex-1 mt-2"
                        style={{ 
                          background: colors.border,
                          minHeight: '40px',
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      {/* Title */}
                      <h3 
                        className="text-xl md:text-2xl font-bold leading-tight transition-colors duration-300"
                        style={{ 
                          color: hoveredIndex === i ? colors.carbonBlack : colors.text,
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Arrow Icon */}
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{ 
                          background: hoveredIndex === i ? colors.carbonBlack : 'transparent',
                          transform: hoveredIndex === i ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      >
                        <span 
                          className="text-lg font-bold"
                          style={{ 
                            color: hoveredIndex === i ? colors.ghostWhite : colors.carbonBlack,
                          }}
                        >
                          →
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-base leading-relaxed transition-opacity duration-300"
                      style={{ 
                        color: colors.text,
                        opacity: hoveredIndex === i ? 0.8 : 0.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;