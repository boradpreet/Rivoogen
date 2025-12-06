import React,{useState} from "react";
import colors from "../../theme/color";
import { ArrowRight } from "lucide-react";
import GetAQuoteModal from "../Modal/GetAQuoteModal"; // adjust path if needed

const FinalCTA = () => {
    const [openQuoteModal, setOpenQuoteModal] = useState(false);
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: colors.carbonBlack,
      }}
    >
      <div className="px-6 py-16 md:px-16 md:py-20 lg:px-32 lg:py-24">
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

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Main Heading */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
            style={{ 
              color: colors.ghostWhite,
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Ready to Improve Your
            <br />
            Automation Strategy?
          </h2>

          {/* Description */}
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto mb-8"
            style={{ 
              color: colors.alabasterGrey,
              lineHeight: "1.6",
            }}
          >
            Let Rivoogen help you deliver efficient, scalable, and intelligent automation to your business.
            Our expert team is ready to transform your workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
            onClick={()=> setOpenQuoteModal(true)}
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
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(250, 250, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Free Consultation
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