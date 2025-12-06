import React from "react";
import colors from "../../theme/color";

const HeroSection = () => {
  return (
    <section
      style={{
        background: colors.ghostWhite,
        color: colors.text,
        position: "relative",
        overflow: "hidden",
      }}
      className="px-6 py-24 md:py-32 lg:py-40"
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `linear-gradient(${colors.alabasterGrey} 1px, transparent 1px), linear-gradient(90deg, ${colors.alabasterGrey} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Curved lines connecting elements */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 150 200 Q 300 100, 450 250"
          stroke={colors.alabasterGrey}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 200 400 Q 400 350, 600 450"
          stroke={colors.alabasterGrey}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 800 300 Q 900 200, 1000 350"
          stroke={colors.alabasterGrey}
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Floating Icon 1 - Top Left */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-100px",
            width: "80px",
            height: "80px",
            background: colors.platinum,
            borderRadius: "50%",
            border: `3px solid ${colors.alabasterGrey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(28, 28, 28, 0.08)",
            animation: "float 4s ease-in-out infinite",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill={colors.carbonBlack}>
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Floating Icon 2 - Top Right */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-120px",
            width: "70px",
            height: "70px",
            background: colors.softLinen,
            borderRadius: "16px",
            border: `2px solid ${colors.alabasterGrey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(28, 28, 28, 0.06)",
            animation: "float 3.5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke={colors.carbonBlack} strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        {/* Floating Icon 3 - Left Middle */}
        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "-150px",
            width: "90px",
            height: "90px",
            background: colors.ghostWhite,
            borderRadius: "20px",
            border: `3px solid ${colors.alabasterGrey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(28, 28, 28, 0.1)",
            animation: "float 5s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              background: colors.carbonBlack,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colors.ghostWhite,
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            R
          </div>
        </div>

        {/* Floating Icon 4 - Right Middle */}
        <div
          style={{
            position: "absolute",
            top: "180px",
            right: "-140px",
            width: "75px",
            height: "75px",
            background: colors.platinum,
            borderRadius: "50%",
            border: `2px solid ${colors.alabasterGrey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(28, 28, 28, 0.08)",
            animation: "float 4.5s ease-in-out infinite",
            animationDelay: "0.8s",
          }}
        >
          <svg width="38" height="38" viewBox="0 0 24 24" fill={colors.carbonBlack}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>

        {/* Floating Icon 5 - Bottom Left */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-80px",
            width: "65px",
            height: "65px",
            background: colors.softLinen,
            borderRadius: "12px",
            border: `2px solid ${colors.alabasterGrey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(28, 28, 28, 0.06)",
            animation: "float 3.8s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={colors.carbonBlack} strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="9" x2="15" y2="9" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        </div>

        {/* Floating Icon 6 - Bottom Right with emoji style */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-100px",
            width: "85px",
            height: "85px",
            background: `linear-gradient(135deg, ${colors.platinum} 0%, ${colors.softLinen} 100%)`,
            borderRadius: "50%",
            border: `3px solid ${colors.alabasterGrey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 24px rgba(28, 28, 28, 0.1)",
            animation: "float 4.2s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        >
          <div
            style={{
              fontSize: "36px",
              filter: "grayscale(100%)",
              opacity: 0.6,
            }}
          >
            ☁️
          </div>
        </div>

        {/* Star icon - floating */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "-180px",
            fontSize: "40px",
            animation: "float 5.5s ease-in-out infinite",
            animationDelay: "1.2s",
            opacity: 0.3,
          }}
        >
          ⭐
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            lineHeight: "1.1",
            color: colors.carbonBlack,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          The home for
          <br />
          cloud & DevOps
          <br />
          excellence
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: colors.carbonBlack,
            opacity: 0.7,
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}
        >
          Scale faster, deploy smarter, and build secure cloud infrastructure
          with Rivoogen's enterprise-grade solutions on AWS, Azure, and GCP.
        </p>
      </div>

      {/* Additional floating small dots */}
      {[
        { top: "20%", left: "10%", size: 8 },
        { top: "60%", left: "15%", size: 6 },
        { top: "30%", right: "12%", size: 10 },
        { bottom: "25%", right: "18%", size: 7 },
        { top: "70%", left: "8%", size: 9 },
      ].map((dot, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            ...dot,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: colors.alabasterGrey,
            borderRadius: "50%",
            animation: `float ${4 + idx * 0.5}s ease-in-out infinite`,
            animationDelay: `${idx * 0.3}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;