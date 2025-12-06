import React from "react";
import colors from "../../theme/color";
import { ArrowRight, CheckCircle } from "lucide-react";

const SupportMaintenance = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: colors.carbonBlack,
        position: "relative",
      }}
    >
      <div className="px-6 py-20 md:px-16 md:py-24 lg:px-32 lg:py-28">
        {/* Grid Background Pattern */}
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

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(250, 250, 255, 0.1)",
              border: `1px solid rgba(250, 250, 255, 0.2)`,
              borderRadius: "24px",
              fontSize: "13px",
              fontWeight: "600",
              color: colors.ghostWhite,
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: colors.ghostWhite,
                borderRadius: "50%",
              }}
            />
            Always-On Support
          </div>

          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ 
              color: colors.ghostWhite,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Support & Maintenance
          </h2>

          {/* Description */}
          <p 
            className="text-base md:text-lg max-w-3xl mx-auto mb-10"
            style={{ 
              color: colors.alabasterGrey,
              lineHeight: "1.6",
            }}
          >
            Rivoogen ensures your applications always stay fast, secure, and fully optimized with
            round-the-clock support and maintenance services.
          </p>

          {/* Trust Indicators with Checkmarks */}
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div
              style={{
                padding: "10px 18px",
                background: "rgba(250, 250, 255, 0.08)",
                border: `1px solid rgba(250, 250, 255, 0.15)`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle size={16} style={{ color: colors.ghostWhite }} strokeWidth={2.5} />
              <div 
                className="text-sm font-semibold"
                style={{ color: colors.ghostWhite }}
              >
                24/7 Monitoring
              </div>
            </div>

            <div
              style={{
                padding: "10px 18px",
                background: "rgba(250, 250, 255, 0.08)",
                border: `1px solid rgba(250, 250, 255, 0.15)`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle size={16} style={{ color: colors.ghostWhite }} strokeWidth={2.5} />
              <div 
                className="text-sm font-semibold"
                style={{ color: colors.ghostWhite }}
              >
                99.9% Uptime
              </div>
            </div>

            <div
              style={{
                padding: "10px 18px",
                background: "rgba(250, 250, 255, 0.08)",
                border: `1px solid rgba(250, 250, 255, 0.15)`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle size={16} style={{ color: colors.ghostWhite }} strokeWidth={2.5} />
              <div 
                className="text-sm font-semibold"
                style={{ color: colors.ghostWhite }}
              >
                &lt;2h Response
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Pattern - OUTSIDE main content div */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d="M0,40 C300,80 500,0 800,40 C1000,60 1100,40 1200,60 L1200,120 L0,120 Z"
            style={{
              fill: colors.ghostWhite,
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default SupportMaintenance;