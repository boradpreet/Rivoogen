import { Lightbulb, Palette, Code, Rocket, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import colors from "../../theme/color";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Planning & Strategy",
    description: "Understanding your goals and defining project scope",
    duration: "1 week",
    deliverables: ["Project brief", "Sitemap", "Timeline"],
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating stunning interfaces and seamless experiences",
    duration: "2 weeks",
    deliverables: ["Wireframes", "Mockups", "Style guide"],
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Building robust and scalable web applications",
    duration: "3-4 weeks",
    deliverables: ["Clean code", "Testing", "Documentation"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploying to production and ongoing maintenance",
    duration: "1 week+",
    deliverables: ["Deployment", "Training", "Maintenance"],
  },
];

export default function WebProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  // ✅ NEW SCROLL LOGIC — perfectly detects closest card to viewport center
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const stepCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(viewportCenter - stepCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Checkbox/Grid Pattern Background */}
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

      {/* Continuous Vertical Line */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5"
        style={{
          top: '200px',
          bottom: '100px',
          backgroundColor: colors.border,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full" style={{ backgroundColor: colors.surface }}>
            <Sparkles className="w-4 h-4" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: colors.carbonBlack }}>
            Development Journey
          </h2>

          <p className="text-base max-w-2xl mx-auto" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
            A streamlined process designed to bring your vision to life
          </p>
        </div>

        {/* Unique Layout - Zigzag/Staircase */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-6 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Left / Right Content Box */}
                <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className={`inline-block p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105 shadow-xl' : 'hover:scale-102'
                    }`}
                    style={{
                      backgroundColor: isActive ? colors.carbonBlack : colors.ghostWhite,
                      border: `2px solid ${colors.border}`,
                      maxWidth: '500px',
                      marginLeft: isEven ? 'auto' : '0',
                      marginRight: isEven ? '0' : 'auto',
                    }}
                  >
                    {/* Number + Duration */}
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <div
                        className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? colors.ghostWhite : colors.surface,
                          color: colors.carbonBlack,
                        }}
                      >
                        {step.duration}
                      </div>

                      <div
                        className="text-5xl font-bold transition-colors duration-300"
                        style={{ color: isActive ? colors.ghostWhite : colors.carbonBlack, opacity: 0.2 }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold mb-3 transition-colors duration-300"
                      style={{ color: isActive ? colors.ghostWhite : colors.carbonBlack }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base mb-4 transition-colors duration-300"
                      style={{
                        color: isActive ? colors.alabasterGrey : colors.carbonBlack,
                        opacity: isActive ? 0.9 : 0.7,
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className={`space-y-2 ${isEven ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      {step.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? 'rgba(250,250,255,0.1)' : colors.surface,
                            color: isActive ? colors.alabasterGrey : colors.carbonBlack,
                          }}
                        >
                          <CheckCircle size={12} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Icon Circle */}
                <div className="flex-shrink-0 relative z-20">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'scale-125 shadow-2xl' : ''
                    }`}
                    style={{
                      backgroundColor: isActive ? colors.carbonBlack : colors.ghostWhite,
                      border: `3px solid ${isActive ? colors.carbonBlack : colors.border}`,
                    }}
                  >
                    <Icon size={32} style={{ color: isActive ? colors.ghostWhite : colors.carbonBlack }} />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="transition-all duration-300"
              style={{
                width: activeStep === index ? "40px" : "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: activeStep === index ? colors.carbonBlack : colors.border,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
