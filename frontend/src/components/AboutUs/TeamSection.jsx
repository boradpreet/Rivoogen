import React from "react";
import colors from "../../theme/color";

const TeamSection = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Leading our technical vision with 15+ years of experience in scalable cloud architecture and AI systems.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Driving product strategy and innovation with expertise in user-centric design and agile methodologies.",
    },
    {
      name: "Emma Thompson",
      role: "VP of Engineering",
      bio: "Building high-performing teams and delivering cutting-edge automation solutions for enterprise clients.",
    }
  ];

  return (
    <section
      className="px-6 py-12 md:px-16 lg:px-32"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: colors.platinum,
              border: `1px solid ${colors.border}`,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: colors.carbonBlack }}></span>
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              Our Leadership
            </p>
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: '-0.02em',
            }}
          >
            Meet Our Leadership
          </h2>

          <p 
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ 
              color: colors.text, 
              opacity: 0.7,
              lineHeight: '1.6',
            }}
          >
            Rivoogen is led by passionate engineers and innovators with experience across AI, cloud computing, and automation.
          </p>
        </div>

        {/* Team Cards - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
              style={{
                background: colors.platinum,
                border: `2px solid ${colors.border}`,
              }}
            >
              {/* Avatar Circle */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${colors.carbonBlack} 0%, ${colors.text} 100%)`,
                    color: colors.ghostWhite,
                    boxShadow: '0 8px 24px rgba(28, 28, 28, 0.15)',
                  }}
                >
                  {member.name.charAt(0)}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                {/* Name */}
                <h3 
                  className="text-xl font-bold mb-1"
                  style={{ color: colors.carbonBlack }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p 
                  className="text-xs font-semibold mb-3"
                  style={{ 
                    color: colors.text,
                    opacity: 0.6,
                  }}
                >
                  {member.role}
                </p>

                {/* Bio */}
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ 
                    color: colors.text,
                    opacity: 0.7,
                  }}
                >
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: colors.border,
                      color: colors.carbonBlack,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.carbonBlack;
                      e.currentTarget.style.color = colors.ghostWhite;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.border;
                      e.currentTarget.style.color = colors.carbonBlack;
                    }}
                  >
                    <span className="text-xs">in</span>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: colors.border,
                      color: colors.carbonBlack,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.carbonBlack;
                      e.currentTarget.style.color = colors.ghostWhite;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.border;
                      e.currentTarget.style.color = colors.carbonBlack;
                    }}
                  >
                    <span className="text-xs">@</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;