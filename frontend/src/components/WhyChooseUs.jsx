import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Shield, Zap, Users, Cpu, Award, ArrowRight } from "lucide-react";
import colors from "../theme/color";
import GetAQuoteModal from "./Modal/GetAQuoteModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Cpu,
    title: "AI-Driven Engineering",
    desc: "We use AI, automation and next-gen technology to build smarter, scalable digital solutions.",
    number: "01",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security, reliability and compliance built into every solution we deliver.",
    number: "02",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "A strong team of engineers, designers and cloud experts with deep industry experience.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Agile execution, rapid prototyping, quick iterations and efficient project delivery.",
    number: "04",
  },
  {
    icon: Award,
    title: "Quality First",
    desc: "Every project undergoes rigorous testing, code reviews and quality checks.",
    number: "05",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Services",
    desc: "From ideas to deployment—AI, automation, software development, cloud, QA, and support.",
    number: "06",
  },
];

export default function WhyChooseUs() {
  const [openQuoteModal, setOpenQuoteModal] = useState(false);
  
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const decorativeLineRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge Animation - Slide in from left with fade
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title Animation - Slide up with fade and slight scale
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Decorative Lines Animation - Scale from left
      gsap.from(decorativeLineRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.15,
        ease: "power2.out",
        transformOrigin: "left center",
      });

      // Cards Animation - Staggered entrance with multiple effects
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Main card animation
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotateX: -15,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
          });

          // Icon animation - rotate and scale
          const icon = card.querySelector(".icon-container");
          if (icon) {
            gsap.from(icon, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
              scale: 0,
              rotation: -180,
              opacity: 0,
              duration: 0.6,
              delay: index * 0.1 + 0.3,
              ease: "back.out(1.7)",
            });
          }

          // Background number animation - fade and scale
          const bgNumber = card.querySelector(".bg-number");
          if (bgNumber) {
            gsap.from(bgNumber, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
              scale: 0.5,
              opacity: 0,
              duration: 1,
              delay: index * 0.1 + 0.2,
              ease: "power2.out",
            });
          }

          // Title animation - slide from left
          const title = card.querySelector(".card-title");
          if (title) {
            gsap.from(title, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
              x: -30,
              opacity: 0,
              duration: 0.6,
              delay: index * 0.1 + 0.4,
              ease: "power2.out",
            });
          }

          // Description animation - fade up
          const desc = card.querySelector(".card-desc");
          if (desc) {
            gsap.from(desc, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
              y: 20,
              opacity: 0,
              duration: 0.6,
              delay: index * 0.1 + 0.5,
              ease: "power2.out",
            });
          }

          // Bottom accent animation - scale from left
          const accent = card.querySelector(".bottom-accent");
          if (accent) {
            gsap.from(accent.children, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
              scaleX: 0,
              opacity: 0,
              duration: 0.5,
              delay: index * 0.1 + 0.6,
              stagger: 0.1,
              ease: "power2.out",
              transformOrigin: "left center",
            });
          }
        }
      });

      // CTA Section Animation - Slide up with fade and scale
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
        });

        // CTA Text Animation
        const ctaText = ctaRef.current.querySelector(".cta-text");
        if (ctaText) {
          gsap.from(ctaText, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
          });
        }

        // CTA Button Animation
        const ctaButton = ctaRef.current.querySelector(".cta-button");
        if (ctaButton) {
          gsap.from(ctaButton, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
            x: 30,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden" 
      style={{ backgroundColor: colors.background }}
    >
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
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left: Title */}
            <div>
              <div 
                ref={badgeRef}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" 
                style={{ backgroundColor: colors.surface }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
                  OUR ADVANTAGES
                </span>
              </div>

              <h2 
                ref={titleRef}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6" 
                style={{ color: colors.carbonBlack }}
              >
                Why Choose Us
              </h2>

              <div ref={decorativeLineRef} className="flex items-center gap-3">
                <div className="h-1 w-16 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-8 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid - 3 Columns x 2 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const isDark = index % 3 === 1;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: isDark ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                }}
              >
                {/* Background Pattern for Dark Cards */}
                {isDark && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}

                {/* Large Background Number - Top Right */}
                <div
                  className="bg-number absolute top-4 right-4 text-8xl font-bold leading-none transition-opacity duration-300 group-hover:opacity-20"
                  style={{
                    color: isDark ? colors.ghostWhite : colors.carbonBlack,
                    opacity: 0.08,
                  }}
                >
                  {item.number}
                </div>

                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.softLinen}40 0%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className="icon-container inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Icon
                      size={32}
                      style={{ color: colors.carbonBlack }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="card-title text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="card-desc text-sm leading-relaxed mb-4"
                    style={{
                      color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                      opacity: isDark ? 0.9 : 0.7,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="bottom-accent flex items-center gap-2">
                    <div
                      className="h-1 w-10 rounded-full group-hover:w-16 transition-all duration-300"
                      style={{
                        backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.3,
                      }}
                    />
                    <div
                      className="h-1 w-5 rounded-full"
                      style={{
                        backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.15,
                      }}
                    />
                  </div>
                </div>

                {/* Top Border Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: colors.carbonBlack }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <div
            ref={ctaRef}
            className="p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
            style={{
              backgroundColor: colors.carbonBlack,
              border: `2px solid ${colors.border}`,
            }}
          >
            <div className="cta-text">
              <h3 className="text-2xl font-bold mb-2" style={{ color: colors.ghostWhite }}>
                Ready to Transform Your Business?
              </h3>
              <p className="text-base" style={{ color: colors.alabasterGrey }}>
                Let's discuss how we can help you achieve your goals
              </p>
            </div>

            <button
              onClick={() => setOpenQuoteModal(true)}
              className="cta-button group flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:gap-4 whitespace-nowrap"
              style={{
                backgroundColor: colors.ghostWhite,
                color: colors.carbonBlack,
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
}