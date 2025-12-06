import React from "react";
import colors from "../../theme/color";

const ServicesOffered = () => {
  const services = [
    {
      title: "Chip Design & Architecture",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 13h6m-9 4h12a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z M3 9h2m14 0h2M3 13h2m14 0h2" />
        </svg>
      ),
      points: [
        "Digital and analog chip design",
        "RTL development (Verilog, VHDL, SystemVerilog)",
        "Chip architecture planning",
        "Low-power design",
        "High-performance SoC design",
      ],
    },
    {
      title: "EDA Tools & Automation",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      points: [
        "Support for Cadence, Synopsys, Mentor, OpenROAD",
        "Design rule checking (DRC)",
        "Layout vs schematic (LVS)",
        "Static timing analysis and sign-off flows",
      ],
    },
    {
      title: "Semiconductor Manufacturing Consultation",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      points: [
        "Cleanroom setup guidance",
        "FAB process planning",
        "Photolithography steps design",
        "Material and machinery selection",
      ],
    },
    {
      title: "AI for Semiconductor",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      points: [
        "AI-based defect detection",
        "Yield prediction and optimisation",
        "Process optimisation using ML",
        "Supply chain forecasting",
        "Chip performance prediction",
      ],
    },
    {
      title: "Testing, Verification & Validation",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      points: [
        "Automated test equipment (ATE) planning",
        "Functional verification and validation",
        "Physical verification",
        "Reliability and stress testing",
      ],
    },
    {
      title: "Packaging & Assembly Support",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      points: [
        "Wire bonding and flip-chip",
        "Wafer-level packaging",
        "3D IC and advanced packaging flows",
      ],
    },
  ];

  return (
    <section
      className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28 md:px-12 lg:px-32 overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.surface} 100%)`,
      }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: colors.platinum }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-15 blur-3xl"
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
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            COMPREHENSIVE SOLUTIONS
          </div>

          {/* Main Heading */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-4 sm:px-0"
            style={{ color: colors.carbonBlack }}
          >
            Our Semiconductor
            <br />
            <span 
              style={{ 
                background: `linear-gradient(135deg, ${colors.carbonBlack} 0%, #4a4a4a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>

          {/* Subheading */}
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4 sm:px-0"
            style={{ color: colors.text }}
          >
            End-to-end semiconductor solutions from concept to production,
            powered by cutting-edge technology and deep industry expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                backgroundColor: colors.ghostWhite,
                border: `2px solid ${colors.border}`,
              }}
            >
              {/* Colored accent bar at top */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: colors.carbonBlack }}
              />

              {/* Card content */}
              <div className="p-5 sm:p-6 lg:p-8">
                {/* Icon and Number */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg"
                    style={{
                      backgroundColor: colors.platinum,
                      border: `2px solid ${colors.border}`,
                      color: colors.carbonBlack,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold opacity-10 leading-none"
                    style={{ color: colors.carbonBlack }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6 leading-tight min-h-[3rem] sm:min-h-[3.5rem]"
                  style={{ color: colors.carbonBlack }}
                >
                  {service.title}
                </h3>

                {/* Points List */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.points.map((point, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base leading-relaxed transition-transform duration-300 hover:translate-x-1"
                      style={{ color: colors.text }}
                    >
                      <span 
                        className="flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 sm:mt-2"
                        style={{ backgroundColor: colors.carbonBlack }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow indicator */}
                <div className="mt-6 sm:mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span 
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: colors.carbonBlack }}
                  >
                    Learn More
                  </span>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke={colors.carbonBlack}
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner gradient */}
              <div 
                className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: colors.carbonBlack }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;