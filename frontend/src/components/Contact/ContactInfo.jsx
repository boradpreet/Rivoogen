import React from "react";
import colors from "../../theme/color";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      info: "rivoogen@gmail.com",
      link: "mailto:rivoogen@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 79843 27489",
      link: "tel:+917984327489",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Surat, Gujarat, India",
      link: null,
    },
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            GET IN TOUCH
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: "-0.02em",
            }}
          >
            Contact Information
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <div
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                  borderRadius: "20px",
                  padding: "32px 28px",
                  transition: "all 0.3s ease",
                  cursor: item.link ? "pointer" : "default",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (item.link) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(28, 28, 28, 0.12)";
                    e.currentTarget.style.borderColor = colors.carbonBlack;
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.link) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = colors.alabasterGrey;
                  }
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

                {/* Icon */}
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
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon size={32} style={{ color: colors.carbonBlack }} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: colors.carbonBlack }}
                >
                  {item.title}
                </h3>

                {/* Info */}
                <p 
                  className="text-base"
                  style={{ 
                    color: colors.carbonBlack,
                    opacity: 0.7,
                  }}
                >
                  {item.info}
                </p>
              </div>
            );

            return item.link ? (
              <a 
                key={idx} 
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                {content}
              </a>
            ) : (
              <div key={idx}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
