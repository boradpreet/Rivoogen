import React, { useState, useEffect, useRef } from "react";
import colors from "../theme/color";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const technologies = [
  // Frontend
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    category: "Frontend",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    category: "Frontend",
  },
  
  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    category: "Backend",
  },
  {
    name: "Python",
    logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    category: "Backend",
  },
  {
    name: "Django",
    logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
    category: "Backend",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
    category: "Backend",
  },
  {
    name: "Go",
    logo: "https://cdn.worldvectorlogo.com/logos/go-logo-1.svg",
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    category: "Database",
  },
  {
    name: "Redis",
    logo: "https://cdn.worldvectorlogo.com/logos/redis.svg",
    category: "Database",
  },
  {
    name: "MySQL",
    logo: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
    category: "Database",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    category: "Cloud",
  },
  {
    name: "Azure",
    logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
    category: "Cloud",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    category: "Cloud",
  },
  {
    name: "Docker",
    logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
    category: "DevOps",
  },
  {
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    category: "DevOps",
  },

  // AI & ML
  {
    name: "TensorFlow",
    logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
    category: "AI/ML",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg",
    category: "AI/ML",
  },
  {
    name: "OpenAI",
    logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
    category: "AI/ML",
  },

  // Mobile
  {
    name: "React Native",
    logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    category: "Mobile",
  },
  {
    name: "Flutter",
    logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
    category: "Mobile",
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "AI/ML", "Mobile"];

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const decorativeLineRef = useRef(null);
  const categoriesRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  const filteredTechnologies = activeCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge Animation - Scale and fade
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Title Animation - Fade
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

      // Description Animation - Fade
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });

      // Decorative Lines Animation - Scale from center
      gsap.from(decorativeLineRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        transformOrigin: "center",
      });

      // Category Pills Animation - Fade in from bottom with stagger
      if (categoriesRef.current) {
        gsap.from(categoriesRef.current.children, {
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
        });
      }

      // Tech Cards Animation - Spiral pattern
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Calculate spiral/circular pattern
          const angle = (index * 30) % 360;
          const radius = 40;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;
          
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            x: x,
            y: y,
            opacity: 0,
            scale: 0.8,
            rotation: angle / 4,
            duration: 0.7,
            delay: index * 0.03,
            ease: "power2.out",
          });

          // Logo rotation effect
          const logo = card.querySelector(".tech-logo-container");
          if (logo) {
            gsap.from(logo, {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
              rotation: -180,
              scale: 0,
              duration: 0.6,
              delay: index * 0.03 + 0.2,
              ease: "back.out(2)",
            });
          }
        }
      });

      // Stats Animation - Count up effect
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          const number = stat.querySelector(".stat-number");
          
          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)",
          });

          // Number animation if present
          if (number) {
            gsap.from(number, {
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              scale: 0.5,
              duration: 0.8,
              delay: index * 0.1 + 0.2,
              ease: "elastic.out(1, 0.5)",
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, [filteredTechnologies]); // Re-run when filtered technologies change

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" 
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full" 
            style={{ backgroundColor: colors.surface }}
          >
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.6 }} />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
              OUR TECH STACK
            </span>
          </div>

          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4" 
            style={{ color: colors.carbonBlack }}
          >
            Technologies We Work With
          </h2>

          <p 
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4" 
            style={{ color: colors.carbonBlack, opacity: 0.7 }}
          >
            Leveraging cutting-edge technologies to build scalable, secure, and high-performance solutions
          </p>

          <div ref={decorativeLineRef} className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-1 w-16 sm:w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
            <div className="h-1 w-8 sm:w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
          </div>
        </div>

        {/* Category Pills - Horizontal scroll on mobile */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div 
            ref={categoriesRef}
            className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide px-4 sm:px-0"
          >
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0"
                  style={{
                    backgroundColor: isActive ? colors.carbonBlack : colors.ghostWhite,
                    color: isActive ? colors.ghostWhite : colors.carbonBlack,
                    border: `2px solid ${isActive ? colors.carbonBlack : colors.border}`,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technologies Grid - Responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {filteredTechnologies.map((tech, index) => {
            const cardIndex = technologies.indexOf(tech);
            
            return (
              <div
                key={tech.name}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                style={{
                  backgroundColor: cardIndex % 2 === 0 ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                  minHeight: '140px',
                }}
              >
                {/* Background Pattern for Dark Cards */}
                {cardIndex % 2 === 0 && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
                      backgroundSize: "16px 16px",
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
                <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
                  {/* Category Tag */}
                  <div
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium"
                    style={{
                      backgroundColor: cardIndex % 2 === 0 ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                      opacity: 0.7,
                    }}
                  >
                    {tech.category}
                  </div>

                  {/* Logo Container */}
                  <div
                    className="tech-logo-container mb-3 sm:mb-4 p-3 sm:p-4 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: cardIndex % 2 === 0 ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                    />
                  </div>

                  {/* Tech Name */}
                  <h3
                    className="text-xs sm:text-sm font-semibold text-center leading-tight"
                    style={{ color: cardIndex % 2 === 0 ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {tech.name}
                  </h3>

                  {/* Bottom Accent */}
                  <div className="mt-2 sm:mt-3 flex items-center gap-1">
                    <div
                      className="h-0.5 sm:h-1 w-4 sm:w-6 rounded-full group-hover:w-8 sm:group-hover:w-10 transition-all duration-300"
                      style={{
                        backgroundColor: cardIndex % 2 === 0 ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.3,
                      }}
                    />
                    <div
                      className="h-0.5 sm:h-1 w-2 sm:w-3 rounded-full"
                      style={{
                        backgroundColor: cardIndex % 2 === 0 ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: 0.15,
                      }}
                    />
                  </div>
                </div>

                {/* Top Border Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: colors.carbonBlack }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Stats - Responsive grid */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div
            ref={(el) => (statsRef.current[0] = el)}
            className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: colors.carbonBlack }}>25+</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Technologies</p>
          </div>
          <div
            ref={(el) => (statsRef.current[1] = el)}
            className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: colors.carbonBlack }}>10+</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Projects Built</p>
          </div>
          <div
            ref={(el) => (statsRef.current[2] = el)}
            className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: colors.carbonBlack }}>7</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Tech Categories</p>
          </div>
          <div
            ref={(el) => (statsRef.current[3] = el)}
            className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: colors.carbonBlack }}>100%</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Modern Stack</p>
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}