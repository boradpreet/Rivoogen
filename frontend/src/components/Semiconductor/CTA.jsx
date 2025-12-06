import React,{useState} from "react";
import colors from "../../theme/color";
import { ArrowRight } from "lucide-react";
import GetAQuoteModal from "../Modal/GetAQuoteModal";

const CTA = () => {
    const [openQuoteModal, setOpenQuoteModal] = useState(false);
  
  
  return (
    <section
      className="px-6 py-16 md:px-16 md:py-20 lg:px-32 lg:py-24 relative overflow-hidden"
      style={{ background: colors.carbonBlack }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(250, 250, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 250, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Subtle Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: colors.ghostWhite }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6"
          style={{
            backgroundColor: `${colors.ghostWhite}10`,
            border: `1px solid ${colors.ghostWhite}20`,
            color: colors.ghostWhite,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          LET'S COLLABORATE
        </div>

        {/* Heading */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5"
          style={{ 
            color: colors.ghostWhite,
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
          }}
        >
          Let's Build the Future
          <br />
          of Chips Together
        </h2>

        {/* Description */}
        <p 
          className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8"
          style={{ 
            color: colors.alabasterGrey,
            lineHeight: "1.6",
          }}
        >
          Whether you are working on chip design, semiconductor research, AI
          optimisation or building a new manufacturing ecosystem – we would love
          to collaborate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
              onClick={() => setOpenQuoteModal(true)}
            style={{
              background: colors.ghostWhite,
              color: colors.carbonBlack,
              padding: "16px 36px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(250, 250, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Contact Our Semiconductor Team
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
       <GetAQuoteModal
        open={openQuoteModal}
        onClose={() => setOpenQuoteModal(false)}
      />
    </section>
  );
};

export default CTA;