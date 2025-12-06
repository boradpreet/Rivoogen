import React from "react";
import colors from "../../theme/color";

const Tools = () => {
  // Support & Maintenance tools
  const tools = [
    { name: "AWS CloudWatch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "Monitoring" },
    { name: "New Relic", icon: "https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg", category: "APM" },
    { name: "Sentry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg", category: "Error Tracking" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", category: "Analytics" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Infrastructure" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Infrastructure" },
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", category: "Monitoring" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: "CI/CD" },
  ];

  const categories = ["All Tools", "Monitoring", "Infrastructure", "Analytics"];
  const [activeCategory, setActiveCategory] = React.useState("All Tools");
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const filteredTools = activeCategory === "All Tools" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
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
              Technology Stack
            </p>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              color: colors.carbonBlack,
              letterSpacing: '-0.02em',
            }}
          >
            Tools & Technologies We Use
          </h2>

          <p 
            className="text-lg md:text-xl max-w-2xl"
            style={{ 
              color: colors.text, 
              opacity: 0.7,
              lineHeight: '1.6',
            }}
          >
            Industry-leading tools powering our support and maintenance excellence
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: activeCategory === category ? colors.carbonBlack : colors.platinum,
                color: activeCategory === category ? colors.ghostWhite : colors.text,
                border: `2px solid ${activeCategory === category ? colors.carbonBlack : colors.border}`,
                boxShadow: activeCategory === category ? '0 4px 12px rgba(28, 28, 28, 0.15)' : 'none',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: hoveredIndex === index ? colors.ghostWhite : colors.platinum,
                border: `2px solid ${hoveredIndex === index ? colors.carbonBlack : colors.border}`,
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index 
                  ? '0 20px 40px rgba(28, 28, 28, 0.12)' 
                  : '0 4px 8px rgba(28, 28, 28, 0.04)',
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`,
              }}
            >
              {/* Vertical accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                style={{
                  background: hoveredIndex === index 
                    ? `linear-gradient(180deg, ${colors.carbonBlack} 0%, ${colors.text} 100%)`
                    : colors.border,
                }}
              />

              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Tool name */}
              <h3 
                className="text-lg font-bold text-center mb-2"
                style={{ color: colors.carbonBlack }}
              >
                {tool.name}
              </h3>

              {/* Category tag */}
              <div className="text-center">
                <span 
                  className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style={{ 
                    background: hoveredIndex === index ? colors.carbonBlack : colors.border,
                    color: hoveredIndex === index ? colors.ghostWhite : colors.text,
                  }}
                >
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div 
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{ 
            background: colors.carbonBlack,
            border: `2px solid ${colors.carbonBlack}`,
          }}
        >
          {/* Subtle pattern overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              backgroundImage: `linear-gradient(${colors.ghostWhite} 1px, transparent 1px), linear-gradient(90deg, ${colors.ghostWhite} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors.ghostWhite }}
                >
                  50+
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.alabasterGrey }}
                >
                  Tools Integrated
                </div>
              </div>
              
              <div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors.ghostWhite }}
                >
                  99.9%
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.alabasterGrey }}
                >
                  Uptime SLA
                </div>
              </div>
              
              <div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors.ghostWhite }}
                >
                  24/7
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.alabasterGrey }}
                >
                  Monitoring
                </div>
              </div>
              
              <div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors.ghostWhite }}
                >
                  &lt;2h
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: colors.alabasterGrey }}
                >
                  Response Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Tools;