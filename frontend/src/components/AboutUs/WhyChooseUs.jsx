import React,{useState} from "react";
import colors from "../../theme/color";
import GetAQuoteModal from "../Modal/GetAQuoteModal";


const WhyChooseUs = () => {
  const [openQuoteModal, setOpenQuoteModal] = useState(false);

  const points = [
    {
      title: "Startup-Friendly Pricing",
      desc: "Flexible pricing models designed for startups and growing businesses.",
      icon: "💰"
    },
    {
      title: "Expert Engineers",
      desc: "Proven track record in AI, Cloud & Automation technologies.",
      icon: "👨‍💻"
    },
    {
      title: "Agile Development",
      desc: "Fast delivery with iterative approach and continuous improvement.",
      icon: "⚡"
    },
    {
      title: "Modern Architecture",
      desc: "Beautiful UI/UX built on robust, scalable foundations.",
      icon: "🏗️"
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading at top */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: '-0.02em',
            }}
          >
            Why Choose Us
          </h2>
        </div>

        {/* Main Grid: Question Mark (left) + 2x2 Cards (right) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* LEFT - Question Mark (1 column) */}
          <div className="lg:col-span-1">
            <div 
              className="relative rounded-3xl p-8 flex items-center justify-center h-full overflow-hidden"
              style={{
                background: colors.carbonBlack,
                minHeight: '400px',
                boxShadow: '0 20px 60px rgba(28, 28, 28, 0.4)',
              }}
            >
              {/* Grid pattern */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.08,
                  backgroundImage: `linear-gradient(${colors.alabasterGrey} 1px, transparent 1px), linear-gradient(90deg, ${colors.alabasterGrey} 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Large decorative circle */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full"
                style={{ 
                  background: 'rgba(250, 250, 255, 0.05)',
                  transform: 'translate(30%, -30%)',
                }}
              />

              {/* Question Mark */}
              <div 
                className="relative z-10 text-9xl font-bold"
                style={{ 
                  color: colors.alabasterGrey,
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                ?
              </div>

              {/* Corner dots */}
              <div 
                className="absolute bottom-8 left-8 w-2 h-2 rounded-full"
                style={{ background: colors.alabasterGrey, opacity: 0.6 }}
              />
              <div 
                className="absolute top-8 right-12 w-2 h-2 rounded-full"
                style={{ background: colors.alabasterGrey, opacity: 0.6 }}
              />
            </div>
          </div>

          {/* RIGHT - 2x2 Grid of Cards (2 columns) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                style={{
                  background: hoveredIndex === i ? colors.ghostWhite : colors.platinum,
                  border: `2px solid ${hoveredIndex === i ? colors.carbonBlack : colors.border}`,
                  transform: hoveredIndex === i ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === i 
                    ? '0 20px 40px rgba(28, 28, 28, 0.12)' 
                    : '0 4px 8px rgba(28, 28, 28, 0.04)',
                }}
              >
                {/* Icon Circle - Black */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: hoveredIndex === i ? colors.carbonBlack : colors.border,
                    transform: hoveredIndex === i ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  <span 
                    className="text-2xl"
                    style={{
                      filter: 'grayscale(1)',
                    }}
                  >
                    {point.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-lg md:text-xl font-bold mb-2 leading-tight"
                  style={{ color: colors.carbonBlack }}
                >
                  {point.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed transition-opacity duration-300"
                  style={{ 
                    color: colors.text,
                    opacity: hoveredIndex === i ? 0.8 : 0.6,
                  }}
                >
                  {point.desc}
                </p>

                {/* Bottom accent line */}
                <div 
                  className="mt-4 h-1 rounded-full transition-all duration-300"
                  style={{
                    width: hoveredIndex === i ? '100%' : '30px',
                    background: colors.carbonBlack,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className="mt-12 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{ 
            background: colors.carbonBlack,
          }}
        >
          {/* Grid pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              backgroundImage: `linear-gradient(${colors.ghostWhite} 1px, transparent 1px), linear-gradient(90deg, ${colors.ghostWhite} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: colors.ghostWhite }}
              >
                Ready to Get Started?
              </h3>
              <p 
                className="text-base md:text-lg"
                style={{ color: colors.alabasterGrey }}
              >
                Let's discuss how we can help transform your business with technology.
              </p>
            </div>
            <button 
            onClick={()=> setOpenQuoteModal(true)}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ 
                background: colors.ghostWhite,
                color: colors.carbonBlack,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(250, 250, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      <GetAQuoteModal
        open={openQuoteModal}
        onClose={() => setOpenQuoteModal(false)}
      />
    </section>
  );
};

export default WhyChooseUs;