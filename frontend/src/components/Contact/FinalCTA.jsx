import React, { useState } from "react";
import colors from "../../theme/color";
import { ArrowRight } from "lucide-react";
import GetAQuoteModal from "../Modal/GetAQuoteModal";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  const [openQuoteModal, setOpenQuoteModal] = useState(false);
  return (
    <section
      className="px-6 py-16 md:px-16 lg:py-20 lg:px-32 relative overflow-hidden"
      style={{
        background: colors.carbonBlack,
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `linear-gradient(${colors.ghostWhite} 1px, transparent 1px), linear-gradient(90deg, ${colors.ghostWhite} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, rgba(250, 250, 255, 0.08) 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: colors.ghostWhite,
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Ready to Connect With Rivoogen?
          </h2>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-8"
            style={{
              color: colors.alabasterGrey,
              lineHeight: "1.6",
            }}
          >
            Tell us about your project, and our team will help you build the perfect
            solution with AI, automation, cloud, and modern engineering.
          </p>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenQuoteModal(true)}
              style={{
                background: colors.ghostWhite,
                color: colors.carbonBlack,
                padding: "14px 32px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(250, 250, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Started
              <ArrowRight size={18} />
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

export default FinalCTA;