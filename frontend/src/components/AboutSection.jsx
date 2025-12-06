import { Target, Eye, Heart, ArrowRight, Zap } from "lucide-react";
import colors from "../theme/color";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Empower organizations with intelligent, secure, and scalable digital solutions that accelerate growth and innovation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a global leader in AI, automation, cloud engineering, and bespoke software development.",
    },
    {
      icon: Heart,
      title: "Core Values",
      description:
        "Innovation, reliability, transparency, and delivering impactful solutions that shape the digital future.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(${colors.carbonBlack} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.carbonBlack} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full" style={{ backgroundColor: colors.surface }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
            <span className="text-sm font-medium tracking-wide" style={{ color: colors.text }}>
              ABOUT RIVOOGEN
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ color: colors.carbonBlack }}>
            Crafting Digital Excellence
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT CONTENT - 60% */}
          <div className="w-full lg:w-[58%] space-y-8">
            {/* Main Description Card */}
            <div className="p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: colors.carbonBlack }}>
              {/* Subtle Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.ghostWhite} 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed font-light mb-6" style={{ color: colors.ghostWhite }}>
                  Rivoogen is a next-generation technology startup delivering{" "}
                  <span className="font-semibold">AI-powered solutions</span>,{" "}
                  <span className="font-semibold">automation</span>,{" "}
                  <span className="font-semibold">custom software</span>, and full-stack
                  digital engineering services.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1" style={{ backgroundColor: colors.alabasterGrey, opacity: 0.3 }} />
                  <Zap className="w-5 h-5" style={{ color: colors.alabasterGrey }} />
                </div>
              </div>
            </div>

            {/* Image with Layered Design */}
            <div className="relative">
              {/* Background Layer */}
              <div
                className="absolute top-4 left-4 right-0 bottom-0 rounded-2xl"
                style={{ backgroundColor: colors.surface }}
              />

              {/* Middle Layer */}
              <div
                className="absolute top-2 left-2 right-0 bottom-0 rounded-2xl"
                style={{ backgroundColor: colors.softLinen }}
              />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden" style={{ border: `2px solid ${colors.border}` }}>
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1470&auto=format&fit=crop"
                  alt="Rivoogen Team"
                  className="w-full h-[400px] object-cover"
                />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{
                  background: `linear-gradient(to top, ${colors.carbonBlack}dd, transparent)`
                }}>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-4xl font-bold mb-1" style={{ color: colors.ghostWhite }}>25+</p>
                      <p className="text-sm" style={{ color: colors.alabasterGrey }}>Projects Delivered</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-1" style={{ color: colors.ghostWhite }}>15+</p>
                      <p className="text-sm" style={{ color: colors.alabasterGrey }}>Happy Clients</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-1" style={{ color: colors.ghostWhite }}>5+</p>
                      <p className="text-sm" style={{ color: colors.alabasterGrey }}>Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            {/* CTA Section */}
            <div className="flex items-center gap-4">

              {/* Go to ABOUT US PAGE */}
              <Link
                to="/about-us"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:gap-4"
                style={{
                  backgroundColor: colors.carbonBlack,
                  color: colors.ghostWhite,
                }}
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Go to CONTACT PAGE */}
              <Link
                to="/contact-us"
                className="px-8 py-4 rounded-xl font-medium transition-all duration-300"
                style={{
                  backgroundColor: colors.surface,
                  color: colors.carbonBlack,
                  border: `1px solid ${colors.border}`,
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT SIDEBAR - 40% */}
          <div className="w-full lg:w-[42%] space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Card Background */}
                <div
                  className="p-6 rounded-xl transition-all duration-300 relative"
                  style={{
                    backgroundColor: index === 1 ? colors.carbonBlack : colors.surface,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {/* Hover Effect Line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-2"
                    style={{ backgroundColor: colors.carbonBlack }}
                  />

                  <div className="pl-4">
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 rounded-lg" style={{
                      backgroundColor: index === 1 ? colors.ghostWhite : colors.ghostWhite,
                      border: `1px solid ${colors.border}`
                    }}>
                      <value.icon
                        className="w-6 h-6"
                        style={{ color: colors.carbonBlack }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: index === 1 ? colors.ghostWhite : colors.carbonBlack }}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: index === 1 ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: index === 1 ? 0.9 : 0.7
                      }}
                    >
                      {value.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${colors.border}` }}>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-8 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: index === 1 ? 0.3 : 1 }} />
                        <div className="h-1 w-4 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: index === 1 ? 0.2 : 0.5 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Achievement Badge */}
            <div
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: colors.softLinen,
                border: `1px solid ${colors.border}`,
              }}
            >
              <p className="text-sm font-medium mb-2" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
                Growing Excellence
              </p>
              <p className="text-3xl font-bold" style={{ color: colors.carbonBlack }}>
                Rivoogen
              </p>
              <p className="text-sm mt-2" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
                Founded 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}