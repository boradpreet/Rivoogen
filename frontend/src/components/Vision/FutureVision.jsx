import React from "react";
import colors from "../../theme/color";

const FutureVision = () => {
  const visionPoints = [
    {
      title: "World-Class Design & Fabrication",
      description: "Establishing world-class chip design and fabrication capability",
    },
    {
      title: "Advanced Innovation",
      description: "Innovating advanced chips for AI, automotive, IoT and 5G",
    },
    {
      title: "Self-Reliance",
      description: "Reducing dependency on international chip imports",
    },
    {
      title: "Talent Development",
      description: "Creating high-skilled jobs in semiconductor engineering",
    },
    {
      title: "Industry Empowerment",
      description: "Empowering Indian industries with locally built chips",
    },
  ];

  const missionPoints = [
    {
      title: "R&D Foundation",
      description: "Start with design and AI-driven semiconductor R&D",
    },
    {
      title: "Prototyping Excellence",
      description: "Gradually expand to prototyping and pilot fabrication",
    },
    {
      title: "Manufacturing Scale",
      description: "Build a fully automated, modern chip manufacturing line",
    },
    {
      title: "Strategic Partnerships",
      description: "Partner with government, universities and global technology leaders",
    },
    {
      title: "Global Impact",
      description: "Deliver high-quality, reliable and affordable chips for global markets",
    },
  ];

  return (
    <section
      className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28 md:px-12 lg:px-32 overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, ${colors.surface} 0%, ${colors.background} 100%)`,
      }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-25 blur-3xl"
        style={{ background: colors.platinum }}
      />
      <div 
        className="absolute bottom-20 right-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: colors.softLinen }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            style={{
              backgroundColor: colors.carbonBlack,
              color: colors.ghostWhite,
            }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            FUTURE VISION
          </div>

          {/* Main Heading */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ color: colors.carbonBlack }}
          >
            Our Future Vision:
            <br />
            <span 
              style={{ 
                background: `linear-gradient(135deg, ${colors.carbonBlack} 0%, #4a4a4a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              India's Semiconductor Ecosystem
            </span>
          </h2>

          {/* Intro Description */}
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed"
            style={{ color: colors.text }}
          >
            Our long-term mission is to help build a complete semiconductor chip
            manufacturing hub in India. We aim to contribute to India's vision of
            becoming a semiconductor powerhouse through deep R&D, design and
            ecosystem development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Vision Column */}
          <div className="lg:col-span-1 space-y-6">
            <div 
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm sticky top-8"
              style={{
                backgroundColor: colors.carbonBlack,
                border: `2px solid ${colors.carbonBlack}`,
              }}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                style={{
                  backgroundColor: `${colors.ghostWhite}20`,
                  border: `2px solid ${colors.ghostWhite}30`,
                }}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke={colors.ghostWhite} viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              
              <h3 
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: colors.ghostWhite }}
              >
                Vision
              </h3>
              
              <p 
                className="text-base leading-relaxed"
                style={{ color: colors.alabasterGrey }}
              >
                Where we see India's semiconductor industry in the future
              </p>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: `${colors.ghostWhite}20` }}>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: `${colors.ghostWhite}30` }} />
                  <span className="text-2xl font-bold" style={{ color: colors.ghostWhite }}>5</span>
                </div>
                <p className="text-sm mt-2" style={{ color: colors.alabasterGrey }}>Key Focus Areas</p>
              </div>
            </div>
          </div>

          {/* Vision Points */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                }}
              >
                <div className="flex gap-4 sm:gap-5">
                  <div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-md"
                    style={{
                      backgroundColor: colors.carbonBlack,
                      color: colors.ghostWhite,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg sm:text-xl font-bold mb-2 leading-tight"
                      style={{ color: colors.carbonBlack }}
                    >
                      {point.title}
                    </h4>
                    <p 
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: colors.text, opacity: 0.8 }}
                    >
                      {point.description}
                    </p>
                  </div>
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: colors.surface }}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke={colors.carbonBlack} 
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 sm:my-16 lg:my-20 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: colors.border }} />
          <div 
            className="px-6 py-2 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: colors.surface,
              color: colors.carbonBlack,
              border: `2px solid ${colors.border}`,
            }}
          >
            OUR ROADMAP
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: colors.border }} />
        </div>

        {/* Mission Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Mission Points */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 order-2 lg:order-1">
            {missionPoints.map((point, index) => (
              <div 
                key={index}
                className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                }}
              >
                <div className="flex gap-4 sm:gap-5">
                  <div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-md"
                    style={{
                      backgroundColor: colors.carbonBlack,
                      color: colors.ghostWhite,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg sm:text-xl font-bold mb-2 leading-tight"
                      style={{ color: colors.carbonBlack }}
                    >
                      {point.title}
                    </h4>
                    <p 
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: colors.text, opacity: 0.8 }}
                    >
                      {point.description}
                    </p>
                  </div>
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: colors.surface }}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke={colors.carbonBlack} 
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Column */}
          <div className="lg:col-span-1 space-y-6 order-1 lg:order-2">
            <div 
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm sticky top-8"
              style={{
                backgroundColor: colors.carbonBlack,
                border: `2px solid ${colors.carbonBlack}`,
              }}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                style={{
                  backgroundColor: `${colors.ghostWhite}20`,
                  border: `2px solid ${colors.ghostWhite}30`,
                }}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke={colors.ghostWhite} viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: colors.ghostWhite }}
              >
                Mission
              </h3>
              
              <p 
                className="text-base leading-relaxed"
                style={{ color: colors.alabasterGrey }}
              >
                How we plan to achieve our vision step by step
              </p>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: `${colors.ghostWhite}20` }}>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: `${colors.ghostWhite}30` }} />
                  <span className="text-2xl font-bold" style={{ color: colors.ghostWhite }}>5</span>
                </div>
                <p className="text-sm mt-2" style={{ color: colors.alabasterGrey }}>Strategic Steps</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FutureVision;