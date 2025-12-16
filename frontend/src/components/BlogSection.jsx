import React, { useEffect, useRef } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import colors from "../theme/color";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "How AI Automation is Transforming Businesses",
    excerpt: "Discover how artificial intelligence and automation are revolutionizing modern business operations and driving efficiency.",
    image: "https://i.pinimg.com/1200x/13/bc/3c/13bc3c6bad007d5b1c61a7fb84645265.jpg",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    category: "AI & Automation",
    featured: true,
  },
  {
    title: "Top Cloud Engineering Trends for 2025",
    excerpt: "Explore the latest trends in cloud infrastructure and engineering practices shaping the future of technology.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
    date: "Jan 28, 2025",
    readTime: "7 min read",
    category: "Cloud & DevOps",
  },
  {
    title: "Why Custom Software is Smarter Than SaaS",
    excerpt: "Understanding when custom-built solutions offer better ROI and flexibility compared to off-the-shelf SaaS products.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    category: "Software Development",
  }
];

export default function BlogSection() {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const decorativeLineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge Animation - Fade with slight rotation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        rotation: -5,
        duration: 0.8,
        ease: "back.out(1.5)",
      });

      // Title Animation - Fade in
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

      // Blog Cards Animation - Different effects per card
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const isFeatured = index === 0;

          if (isFeatured) {
            // Featured card - Slide from left with scale
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              x: -80,
              opacity: 0,
              scale: 0.9,
              duration: 1,
              ease: "power3.out",
            });

            // Featured image zoom effect
            const image = card.querySelector(".blog-image");
            if (image) {
              gsap.from(image, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
                scale: 1.3,
                opacity: 0,
                duration: 1.2,
                delay: 0.2,
                ease: "power2.out",
              });
            }

            // Featured badges stagger
            const badges = card.querySelectorAll(".badge");
            gsap.from(badges, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              y: -20,
              opacity: 0,
              duration: 0.6,
              delay: 0.5,
              stagger: 0.1,
              ease: "back.out(1.7)",
            });
          } else {
            // Regular cards - Slide from right with stagger
            const delay = (index - 1) * 0.2;

            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              x: 60,
              opacity: 0,
              duration: 0.8,
              delay: delay,
              ease: "power3.out",
            });

            // Regular image fade and scale
            const image = card.querySelector(".blog-image");
            if (image) {
              gsap.from(image, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
                scale: 1.2,
                opacity: 0,
                duration: 0.8,
                delay: delay + 0.2,
                ease: "power2.out",
              });
            }

            // Regular badge pop in
            const badge = card.querySelector(".badge");
            if (badge) {
              gsap.from(badge, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
                scale: 0,
                opacity: 0,
                duration: 0.5,
                delay: delay + 0.4,
                ease: "back.out(2)",
              });
            }
          }

          // Content animations (all cards)
          const metaInfo = card.querySelector(".meta-info");
          if (metaInfo) {
            gsap.from(metaInfo.children, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              y: 10,
              opacity: 0,
              duration: 0.5,
              delay: isFeatured ? 0.7 : (index - 1) * 0.2 + 0.5,
              stagger: 0.1,
              ease: "power2.out",
            });
          }

          const title = card.querySelector(".blog-title");
          if (title) {
            gsap.from(title, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              duration: 0.6,
              delay: isFeatured ? 0.8 : (index - 1) * 0.2 + 0.6,
              ease: "power2.out",
            });
          }

          const excerpt = card.querySelector(".blog-excerpt");
          if (excerpt) {
            gsap.from(excerpt, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              duration: 0.6,
              delay: isFeatured ? 0.9 : (index - 1) * 0.2 + 0.7,
              ease: "power2.out",
            });
          }

          const readMore = card.querySelector(".read-more");
          if (readMore) {
            gsap.from(readMore, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              x: -20,
              opacity: 0,
              duration: 0.5,
              delay: isFeatured ? 1 : (index - 1) * 0.2 + 0.8,
              ease: "power2.out",
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden" 
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
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left: Title */}
            <div>
              <div 
                ref={badgeRef}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" 
                style={{ backgroundColor: colors.background }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
                  INSIGHTS & ARTICLES
                </span>
              </div>

              <h2 
                ref={titleRef}
                className="text-5xl md:text-6xl font-bold mb-6" 
                style={{ color: colors.carbonBlack }}
              >
                Latest Blog Posts
              </h2>

              <div ref={decorativeLineRef} className="flex items-center gap-3">
                <div className="h-1 w-16 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-8 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid - Featured + Regular Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post, index) => {
            const isFeatured = post.featured;
            
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                  isFeatured ? 'lg:row-span-2' : ''
                }`}
                style={{
                  backgroundColor: colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                  minHeight: isFeatured ? '600px' : '280px',
                }}
              >
                {/* Image Section */}
                <div className={`relative overflow-hidden ${isFeatured ? 'h-[350px]' : 'h-[160px]'}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${colors.carbonBlack}60, transparent 50%)`,
                    }}
                  />

                  {/* Category Badge */}
                  <div
                    className="badge absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      backgroundColor: colors.carbonBlack,
                      color: colors.ghostWhite,
                    }}
                  >
                    {post.category}
                  </div>

                  {/* Featured Badge */}
                  {isFeatured && (
                    <div
                      className="badge absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                      style={{
                        backgroundColor: colors.ghostWhite,
                        color: colors.carbonBlack,
                      }}
                    >
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={`p-6 ${isFeatured ? 'p-8' : ''}`}>
                  {/* Meta Info */}
                  <div className="meta-info flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" style={{ color: colors.carbonBlack, opacity: 0.5 }} />
                      <span className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
                        {post.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" style={{ color: colors.carbonBlack, opacity: 0.5 }} />
                      <span className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`blog-title font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300 ${
                      isFeatured ? 'text-3xl' : 'text-xl'
                    }`}
                    style={{ color: colors.carbonBlack }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className={`blog-excerpt leading-relaxed mb-4 ${isFeatured ? 'text-base' : 'text-sm line-clamp-2'}`}
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="h-px mb-4" style={{ backgroundColor: colors.border }} />

                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <button
                      className="read-more group/btn flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                      style={{ color: colors.carbonBlack }}
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    {/* Bottom Accent */}
                    <div className="flex items-center gap-1">
                      <div
                        className="h-1 w-8 rounded-full group-hover:w-12 transition-all duration-300"
                        style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }}
                      />
                      <div
                        className="h-1 w-4 rounded-full"
                        style={{ backgroundColor: colors.carbonBlack, opacity: 0.15 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Top Border Accent on Hover */}
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