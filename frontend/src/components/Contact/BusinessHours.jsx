import React from "react";
import colors from "../../theme/color";
import { Clock, Calendar } from "lucide-react";

const BusinessHours = () => {
  const hours = [
    { day: "Monday - Friday", time: "10:00 AM – 7:00 PM", isOpen: true },
    { day: "Saturday", time: "10:00 AM – 4:00 PM", isOpen: true },
    { day: "Sunday", time: "Closed", isOpen: false },
  ];

  return (
    <section
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
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
            WORKING HOURS
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Business Hours
          </h2>

          <p
            className="text-base"
            style={{ 
              color: colors.carbonBlack,
              opacity: 0.7,
            }}
          >
            We're available during the following hours to assist you
          </p>
        </div>

        {/* Hours Card */}
        <div
          style={{
            background: colors.ghostWhite,
            border: `2px solid ${colors.alabasterGrey}`,
            borderRadius: "24px",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top Accent Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: `linear-gradient(90deg, ${colors.carbonBlack} 0%, ${colors.alabasterGrey} 100%)`,
            }}
          />

          {/* Clock Icon */}
          <div
            style={{
              width: "64px",
              height: "64px",
              background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
              border: `2px solid ${colors.alabasterGrey}`,
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <Clock size={32} style={{ color: colors.carbonBlack }} strokeWidth={2} />
          </div>

          {/* Hours List */}
          <div className="space-y-4">
            {hours.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  background: item.isOpen ? colors.ghostWhite : colors.softLinen,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Day */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.isOpen ? colors.carbonBlack : colors.alabasterGrey,
                    }}
                  />
                  <span 
                    className="font-semibold"
                    style={{ color: colors.carbonBlack }}
                  >
                    {item.day}
                  </span>
                </div>

                {/* Time */}
                <span 
                  className="font-bold"
                  style={{ 
                    color: item.isOpen ? colors.carbonBlack : colors.carbonBlack,
                    opacity: item.isOpen ? 1 : 0.5,
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div
            style={{
              marginTop: "24px",
              padding: "16px 20px",
              background: colors.softLinen,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: colors.ghostWhite,
                border: `2px solid ${colors.alabasterGrey}`,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Calendar size={20} style={{ color: colors.carbonBlack }} strokeWidth={2} />
            </div>
            <p 
              className="text-sm"
              style={{ 
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              For urgent inquiries outside business hours, please email us at{" "}
              <a 
                href="mailto:contact@rivoogen.com"
                style={{ 
                  color: colors.carbonBlack,
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                contact@rivoogen.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;