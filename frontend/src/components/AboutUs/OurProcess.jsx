import React from "react";
import colors from "../../theme/color";

const OurProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Understanding Requirements",
      description: "Deep dive into your business needs and objectives",
      position: { top: '0%', left: '5%', rotation: -5 }
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description: "Strategic design and technology stack selection",
      position: { top: '10%', right: '10%', rotation: 8 }
    },
    {
      number: "03",
      title: "Agile Development",
      description: "Iterative development with continuous feedback",
      position: { top: '35%', right: '5%', rotation: -3 }
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous quality assurance and bug fixing",
      position: { top: '40%', left: '8%', rotation: 6 }
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth launch with performance tuning",
      position: { top: '65%', left: '12%', rotation: -4 }
    },
    {
      number: "06",
      title: "Support & Scaling",
      description: "Long-term maintenance and growth support",
      position: { bottom: '5%', right: '15%', rotation: 7 }
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-32 lg:px-32 relative overflow-hidden"
      style={{ 
        background: colors.ghostWhite,
        minHeight: '900px',
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header - Left Side */}
        <div className="max-w-md mb-16 relative z-20">
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
              Our Process
            </p>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Let us show you how we drive your brand to new heights
          </h2>

          <p 
            className="text-base md:text-lg leading-relaxed"
            style={{ 
              color: colors.text,
              opacity: 0.7,
            }}
          >
            Driven down our lane with the best methodologies and modern tech stack.
          </p>
        </div>

        {/* Scattered Cards */}
        <div className="relative" style={{ minHeight: '700px' }}>
          {/* Dotted connecting lines between cards with connection dots */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {/* Card 1 to Card 2 connection */}
            <path 
              d="M 15%,8% Q 50%,5% 82%,15%"
              stroke={colors.carbonBlack}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
            <circle cx="15%" cy="8%" r="5" fill={colors.carbonBlack} opacity="0.6" />
            <circle cx="82%" cy="15%" r="5" fill={colors.carbonBlack} opacity="0.6" />

            {/* Card 2 to Card 3 connection */}
            <path 
              d="M 82%,20% Q 88%,28% 87%,38%"
              stroke={colors.carbonBlack}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
            <circle cx="87%" cy="38%" r="5" fill={colors.carbonBlack} opacity="0.6" />

            {/* Card 3 to Card 4 connection */}
            <path 
              d="M 87%,42% Q 60%,48% 18%,48%"
              stroke={colors.carbonBlack}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
            <circle cx="18%" cy="48%" r="5" fill={colors.carbonBlack} opacity="0.6" />

            {/* Card 4 to Card 5 connection */}
            <path 
              d="M 20%,52% Q 18%,60% 22%,68%"
              stroke={colors.carbonBlack}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
            <circle cx="22%" cy="68%" r="5" fill={colors.carbonBlack} opacity="0.6" />

            {/* Card 5 to Card 6 connection */}
            <path 
              d="M 26%,72% Q 55%,82% 78%,88%"
              stroke={colors.carbonBlack}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
            <circle cx="78%" cy="88%" r="5" fill={colors.carbonBlack} opacity="0.6" />
          </svg>

          {/* Cards */}
          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute rounded-2xl p-6 transition-all duration-500 cursor-pointer"
              style={{
                background: colors.ghostWhite,
                border: `2px solid ${hoveredIndex === idx ? colors.carbonBlack : colors.border}`,
                boxShadow: hoveredIndex === idx 
                  ? '0 20px 60px rgba(28, 28, 28, 0.2)' 
                  : '0 8px 24px rgba(28, 28, 28, 0.08)',
                width: '280px',
                transform: hoveredIndex === idx 
                  ? `rotate(0deg) scale(1.05)` 
                  : `rotate(${step.position.rotation}deg)`,
                zIndex: hoveredIndex === idx ? 10 : 2,
                ...step.position,
              }}
            >
              {/* Number Badge - Circle */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 transition-all duration-300"
                style={{
                  background: hoveredIndex === idx ? colors.carbonBlack : colors.platinum,
                  color: hoveredIndex === idx ? colors.ghostWhite : colors.carbonBlack,
                  border: `2px solid ${hoveredIndex === idx ? colors.carbonBlack : colors.border}`,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-bold mb-2 leading-tight"
                style={{ 
                  color: colors.carbonBlack,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  color: colors.text,
                  opacity: 0.7,
                }}
              >
                {step.description}
              </p>

              {/* Bottom accent */}
              <div 
                className="mt-4 h-1 rounded-full transition-all duration-300"
                style={{
                  width: hoveredIndex === idx ? '100%' : '40px',
                  background: colors.carbonBlack,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;