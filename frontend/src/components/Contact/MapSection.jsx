import React from "react";
import colors from "../../theme/color";
import { MapPin, Navigation, Globe } from "lucide-react";

const MapSection = () => {
  return (
    <section
     id="map-section" 
      className="px-6 py-16 md:px-16 lg:py-20 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.carbonBlack} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: colors.carbonBlack,
              color: colors.ghostWhite,
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            FIND US
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Our Location
          </h2>

          <p
            className="text-base max-w-2xl mx-auto"
            style={{
              color: colors.carbonBlack,
              opacity: 0.7,
            }}
          >
            Visit us at our office in Surat, Gujarat
          </p>
        </div>

        {/* Real Google Map */}
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{
            height: "400px",
            border: `2px solid ${colors.alabasterGrey}`,
            background: colors.ghostWhite,
            boxShadow: "0 4px 20px rgba(28, 28, 28, 0.08)",
          }}
        >
          {/* Google Map Embed */}
          <iframe
            title="Surat Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4545100699323!2d72.83105977484246!3d21.20888918440565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051f28bb2c2b9%3A0xa0e2d829d0c1320!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707220000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(20%) contrast(1.1)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Center Location Pin */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -100%)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                background: colors.carbonBlack,
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(28, 28, 28, 0.3)",
              }}
            >
              <MapPin
                size={28}
                style={{
                  color: colors.ghostWhite,
                  transform: "rotate(45deg)",
                }}
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Location Card */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: colors.ghostWhite,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "16px",
              padding: "20px 28px",
              boxShadow: "0 8px 20px rgba(28, 28, 28, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              maxWidth: "90%",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Navigation size={24} style={{ color: colors.carbonBlack }} strokeWidth={2} />
            </div>

            <div style={{ textAlign: "left" }}>
              <h3
                className="font-bold text-base mb-1"
                style={{ color: colors.carbonBlack }}
              >
                Rivoogen Office
              </h3>
              <p
                className="text-sm"
                style={{ color: colors.carbonBlack, opacity: 0.7 }}
              >
                Surat, Gujarat, India
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/Surat,+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: colors.carbonBlack,
                color: colors.ghostWhite,
                padding: "10px 20px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s ease",
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Globe size={16} />
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
