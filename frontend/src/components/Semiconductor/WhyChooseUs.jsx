import React from "react";
import colors from "../../theme/color";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "AI + Semiconductor Expertise",
      description: "Deep technical knowledge combining artificial intelligence with cutting-edge semiconductor design and fabrication.",
    },
    {
      title: "End-to-End Solutions",
      description: "Complete semiconductor lifecycle management from initial concept through production and quality assurance.",
    },
    {
      title: "Innovation Driven",
      description: "Pioneering approach to complex challenges with creative solutions and forward-thinking methodologies.",
    },
    {
      title: "Quality & Reliability",
      description: "Unwavering commitment to excellence with rigorous testing standards and sustainable engineering practices.",
    },
    {
      title: "India's Tech Future",
      description: "Actively contributing to India's semiconductor ecosystem growth and technological self-reliance.",
    },
    {
      title: "Strategic Partnership",
      description: "Working closely with clients as partners to ensure aligned goals and successful outcomes.",
    },
  ];

  return (
    <section
      className="relative px-6 py-20 md:py-24 lg:py-28 md:px-16 lg:px-32 overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: colors.softLinen }}
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl"
        style={{ background: colors.platinum }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: colors.carbonBlack,
              color: colors.ghostWhite,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            OUR ADVANTAGE
          </div>

          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: colors.carbonBlack }}
          >
            Why Choose Us?
          </h2>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: colors.text }}
          >
            We bring together expertise, innovation, and commitment to deliver
            world-class semiconductor solutions that drive your success.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Left Side - Big Question Mark */}
          <div className="lg:col-span-1">
            <div 
              className="sticky top-8 p-12 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              style={{
                backgroundColor: colors.carbonBlack,
                border: `2px solid ${colors.carbonBlack}`,
              }}
            >
              {/* Giant Question Mark */}
              <div 
                className="text-[12rem] font-bold leading-none mb-6"
                style={{ 
                  color: colors.ghostWhite,
                  fontFamily: 'Georgia, serif',
                }}
              >
                ?
              </div>
              
              {/* Text */}
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ color: colors.ghostWhite }}
              >
                Why Us?
              </h3>
              <p 
                className="text-base"
                style={{ color: colors.alabasterGrey }}
              >
                Discover what makes us the right choice for your semiconductor needs
              </p>

              {/* Decorative dots */}
              <div className="flex gap-2 mt-8">
                {[1, 2, 3].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.alabasterGrey }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - 3x2 Grid of Reasons */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    backgroundColor: colors.ghostWhite,
                    border: `2px solid ${colors.border}`,
                  }}
                >
                  {/* Number badge */}
                  <div 
                    className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    style={{
                      backgroundColor: colors.carbonBlack,
                      color: colors.ghostWhite,
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Enhanced decorative icon - More visible */}
                 
                  {/* Title */}
                  <h3 
                    className="text-lg font-bold mb-3 leading-tight"
                    style={{ color: colors.carbonBlack }}
                  >
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: colors.text, opacity: 0.8 }}
                  >
                    {reason.description}
                  </p>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: colors.carbonBlack,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;