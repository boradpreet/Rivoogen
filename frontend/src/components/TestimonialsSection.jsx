import { Quote, Star, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const colors = {
  carbonBlack: "#1a1a1a",
  ghostWhite: "#f8f8f8",
  softLinen: "#e8e8e8",
  alabasterGrey: "#d0d0d0",
  surface: "#fafafa",
  background: "#ffffff",
  border: "#e0e0e0",
};

const testimonials = [
  {
    name: "Amit Verma",
    role: "CTO, Fintech Company",
    company: "PayFlow Solutions",
    feedback:
      "Their AI and automation solutions transformed our operations. Highly reliable and very professional team!",
    image:
      "https://i.pinimg.com/736x/27/59/14/275914b8d8cef934c9284501c64b9bb3.jpg",
    rating: 5,
    project: "AI Trading Platform",
    metric: "40% faster processing",
  },
  {
    name: "Priya Nair",
    role: "Founder, HealthTech Startup",
    company: "MediCare Plus",
    feedback:
      "Exceptional web development and cloud expertise. The project delivery exceeded our expectations.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format",
    rating: 5,
    project: "Management System",
    metric: "3x user engagement",
  },
  {
    name: "Rahul Sharma",
    role: "Product Manager, SaaS Company",
    company: "CloudSync Tech",
    feedback:
      "Super smooth communication, high-quality engineering, and timely delivery. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format",
    rating: 5,
    project: "Enterprise Dashboard",
    metric: "50% cost reduction",
  },
  {
    name: "Sarah Johnson",
    role: "CEO, E-Commerce Platform",
    company: "ShopNest",
    feedback:
      "Outstanding work on our mobile app and backend infrastructure. The team's dedication to quality is unmatched.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format",
    rating: 5,
    project: "Mobile Commerce App",
    metric: "2.5M+ downloads",
  },
  {
    name: "David Chen",
    role: "VP Engineering, IoT Startup",
    company: "SmartHome Innovations",
    feedback:
      "Incredible expertise in embedded systems and cloud integration. They delivered a complex IoT solution flawlessly.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format",
    rating: 5,
    project: "IoT Device Platform",
    metric: "99.9% uptime",
  },
  {
    name: "Maria Garcia",
    role: "Director of IT, Manufacturing",
    company: "AutoTech Industries",
    feedback:
      "Their automation solutions reduced our processing time by 60%. Truly transformative partnership!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format",
    rating: 5,
    project: "Factory Automation",
    metric: "60% time saved",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.surface }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(${colors.carbonBlack} 1px, transparent 1px), linear-gradient(90deg, ${colors.carbonBlack} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Top Right Circle */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.carbonBlack} 0%, transparent 70%)`,
            opacity: 0.03,
          }}
        />
        
        {/* Bottom Left Circle */}
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.carbonBlack} 0%, transparent 70%)`,
            opacity: 0.03,
          }}
        />
        
        {/* Floating Squares */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-2xl rotate-12"
          style={{
            backgroundColor: colors.carbonBlack,
            opacity: 0.02,
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-2xl -rotate-12"
          style={{
            backgroundColor: colors.carbonBlack,
            opacity: 0.02,
          }}
        />
        
        {/* Diagonal Lines */}
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0" stroke={colors.carbonBlack} strokeWidth="0.5" opacity="0.03" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full border" 
               style={{ backgroundColor: colors.background, borderColor: colors.border }}>
            <TrendingUp className="w-4 h-4" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: colors.carbonBlack }}>
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight" style={{ color: colors.carbonBlack }}>
            Client Success Stories
          </h2>

          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
            Real results from real partnerships. See how we've helped businesses scale and succeed.
          </p>

          {/* Metrics Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1" style={{ color: colors.carbonBlack }}>10+</div>
              <div className="text-sm font-medium" style={{ color: colors.carbonBlack, opacity: 0.5 }}>Projects Delivered</div>
            </div>
            <div className="w-px" style={{ backgroundColor: colors.border }} />
            <div className="text-center">
              <div className="text-4xl font-bold mb-1" style={{ color: colors.carbonBlack }}>98%</div>
              <div className="text-sm font-medium" style={{ color: colors.carbonBlack, opacity: 0.5 }}>Client Retention</div>
            </div>
            <div className="w-px" style={{ backgroundColor: colors.border }} />
            <div className="text-center">
              <div className="text-4xl font-bold mb-1" style={{ color: colors.carbonBlack }}>4.9★</div>
              <div className="text-sm font-medium" style={{ color: colors.carbonBlack, opacity: 0.5 }}>Average Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - 3 Dark + 3 Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isDark = index < 3;
            
            return (
              <div
                key={index}
                className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: isDark ? colors.carbonBlack : colors.ghostWhite,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div className="p-8">
                  {/* Quote Icon */}
                  <Quote 
                    className="w-10 h-10 mb-6" 
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack, opacity: 0.3 }} 
                  />
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }} 
                        fill={isDark ? colors.ghostWhite : colors.carbonBlack}
                      />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p 
                    className="text-lg leading-relaxed mb-6"
                    style={{
                      color: isDark ? colors.ghostWhite : colors.carbonBlack,
                      opacity: 0.9,
                    }}
                  >
                    "{testimonial.feedback}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      className="w-14 h-14 rounded-full object-cover"
                      alt={testimonial.name}
                      style={{ border: `3px solid ${isDark ? colors.ghostWhite : colors.carbonBlack}` }}
                    />
                    <div className="flex-1">
                      <div 
                        className="font-bold text-lg mb-1"
                        style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                      >
                        {testimonial.name}
                      </div>
                      <div 
                        className="text-sm"
                        style={{
                          color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.7,
                        }}
                      >
                        {testimonial.role}
                      </div>
                      <div 
                        className="text-xs mt-1"
                        style={{
                          color: isDark ? colors.alabasterGrey : colors.carbonBlack,
                          opacity: 0.5,
                        }}
                      >
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Project Badge and Metric */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: isDark ? colors.ghostWhite : colors.carbonBlack,
                        color: isDark ? colors.carbonBlack : colors.ghostWhite,
                      }}
                    >
                      {testimonial.project}
                    </div>
                    <div 
                      className="flex items-center gap-1 text-xs font-medium"
                      style={{ color: isDark ? colors.alabasterGrey : colors.carbonBlack }}
                    >
                      <TrendingUp size={14} />
                      {testimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}