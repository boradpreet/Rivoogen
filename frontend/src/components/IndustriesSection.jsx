import React, { useEffect, useRef } from "react";
import {
  Building2,
  Heart,
  GraduationCap,
  ShoppingBag,
  Smartphone,
  Cpu,
  Plane,
  Factory,
  Truck,
  Home,
  Zap,
  Gamepad2,
  Video,
  Car,
  Briefcase,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const colors = {
  carbonBlack: "#1a1a1a",
  ghostWhite: "#f8f8f8",
  softLinen: "#e8e8e8",
  alabasterGrey: "#d0d0d0",
  surface: "#fafafa",
  background: "#ffffff",
  border: "#e0e0e0",
};

const industries = [
  { icon: Cpu, name: "Semiconductor & Electronics", category: "Technology" },
  { icon: Smartphone, name: "IT & Software", category: "Technology" },
  { icon: ShoppingBag, name: "E-Commerce & Retail", category: "Commerce" },
  { icon: Heart, name: "Healthcare & Medical", category: "Healthcare" },
  { icon: Building2, name: "Finance & Banking", category: "Finance" },
  { icon: GraduationCap, name: "Education & E-Learning", category: "Education" },
  { icon: Plane, name: "Travel & Hospitality", category: "Services" },
  { icon: Factory, name: "Manufacturing & Industrial", category: "Industry" },
  { icon: Truck, name: "Logistics & Supply Chain", category: "Operations" },
  { icon: Home, name: "Real Estate & PropTech", category: "Real Estate" },
  { icon: Zap, name: "Energy & Utilities", category: "Infrastructure" },
  { icon: Gamepad2, name: "Gaming & Entertainment", category: "Media" },
  { icon: Video, name: "Media & Broadcasting", category: "Media" },
  { icon: Car, name: "Automotive & Mobility", category: "Transport" },
  { icon: Briefcase, name: "Professional Services", category: "Business" },
];

export default function IndustriesSection() {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const decorativeLineRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge Animation - Simple fade
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title Animation - Simple fade
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Decorative Lines Animation - Scale from left
      gsap.from(decorativeLineRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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

      // Description Animation - Simple fade
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      // Industry Cards Animation - Directional slide based on row
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Calculate which row the card is in (5 columns per row)
          const row = Math.floor(index / 5);
          const col = index % 5;
          
          // Alternate direction by row: even rows from left, odd rows from right
          const slideFrom = row % 2 === 0 ? -60 : 60;
          
          // Stagger within each row
          const delay = col * 0.1;

          // Main card animation - Slide from left or right with fade
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            x: slideFrom,
            opacity: 0,
            duration: 0.8,
            delay: delay,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden" 
      style={{ backgroundColor: colors.surface }}
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
        {/* Header */}
        <div className="mb-12">
          <div ref={badgeRef} className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
              OUR EXPERTISE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 
                ref={titleRef}
                className="text-5xl md:text-6xl font-bold mb-4" 
                style={{ color: colors.carbonBlack }}
              >
                Industries We Serve
              </h2>
              <div ref={decorativeLineRef} className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>
            </div>

            <p 
              ref={descriptionRef}
              className="text-lg max-w-xl" 
              style={{ color: colors.carbonBlack, opacity: 0.7 }}
            >
              Delivering tailored digital solutions across diverse sectors with deep domain expertise
            </p>
          </div>
        </div>

        {/* Industries Grid - 5 Columns x 3 Rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isDark = index % 2 === 1; // Alternates: light(0), dark(1), light(2), dark(3)...
            
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: isDark ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                  minHeight: '160px',
                }}
              >
                {/* Background Pattern for Dark Cards */}
                {isDark && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}

                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.softLinen}40 0%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Category Tag */}
                  <div
                    className="category-tag absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                      opacity: 0.6,
                    }}
                  >
                    {item.category}
                  </div>

                  {/* Icon */}
                  <div
                    className="icon-container inline-flex p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: colors.carbonBlack }}
                    />
                  </div>

                  {/* Name */}
                  <h3
                    className="industry-name text-sm font-bold leading-tight"
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {item.name}
                  </h3>

                  {/* Bottom Accent */}
                  <div className="bottom-accent flex items-center gap-1 mt-3">
                    <div
                      className="h-1 w-6 rounded-full group-hover:w-10 transition-all duration-300"
                      style={{
                        backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.3,
                      }}
                    />
                    <div
                      className="h-1 w-3 rounded-full"
                      style={{
                        backgroundColor: isDark ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.15,
                      }}
                    />
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className="hover-arrow absolute bottom-3 right-3 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.carbonBlack,
                    }}
                  >
                    <ArrowUpRight
                      size={12}
                      style={{ color: isDark ? colors.carbonBlack : colors.ghostWhite }}
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
      </div>
    </section>
  );
}