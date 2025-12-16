import React from "react";
import colors from "../../theme/color";

const Tools = () => {
  const tools = [
    { name: "Sentry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg", category: "Monitoring" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", category: "Analytics" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Infrastructure" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", category: "Infrastructure" },
    { name: "PM2", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/pm2-icon-de2tnxlx7mpm39v66kkhc9.png/pm2-icon-j1kc5wcz2f8itsbu1k1ey.png?_a=DATAg1AAZAA0", category: "Development" },
    { name: "Node Monitor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Development" },
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", category: "Monitoring" },
    { name: "Datadog", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/datadog/datadog-original.svg", category: "Monitoring" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Infrastructure" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: "Development" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Infrastructure" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Infrastructure" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Infrastructure" },
    { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg", category: "Analytics" },
    { name: "RabbitMQ", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rabbitmq/rabbitmq-original.svg", category: "Infrastructure" },
    { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", category: "Infrastructure" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Development" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "Development" },
    { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", category: "Development" },
    { name: "Splunk", icon: "https://cdn.worldvectorlogo.com/logos/splunk-1.svg", category: "Analytics" },
    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", category: "Analytics" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", category: "Analytics" },
  ];

  const categories = ["All Tools", "Monitoring", "Infrastructure", "Development", "Analytics"];

  const [activeCategory, setActiveCategory] = React.useState("All Tools");
  const [hoveredTool, setHoveredTool] = React.useState(null);

  const filteredTools =
    activeCategory === "All Tools"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section 
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-5 blur-3xl"
        style={{ background: colors.carbonBlack }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: colors.carbonBlack }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT SIDE - TOOLS GRID */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24">

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
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

            {/* TOOLS GRID - RESPONSIVE */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
              {filteredTools.map((tool, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="aspect-square rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-2 sm:p-3 cursor-pointer transition-all duration-300 group relative"
                  style={{
                    background: hoveredTool === index ? colors.ghostWhite : colors.platinum,
                    border: `2px solid ${hoveredTool === index ? colors.carbonBlack : colors.border}`,
                    transform: hoveredTool === index ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredTool === index ? '0 12px 24px rgba(28, 28, 28, 0.12)' : '0 2px 4px rgba(28, 28, 28, 0.05)',
                    animation: `fadeIn 0.3s ease-out ${index * 0.03}s backwards`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.platinum} 100%)`,
                    }}
                  ></div>

                  {/* Icon with scale animation */}
                  <div className="relative z-10 mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Tool name */}
                  <p 
                    className="text-[9px] sm:text-[10px] md:text-xs text-center font-semibold leading-tight relative z-10 transition-colors duration-300"
                    style={{ 
                      color: hoveredTool === index ? colors.carbonBlack : colors.text,
                    }}
                  >
                    {tool.name}
                  </p>

                  {/* Category badge on hover */}
                  {hoveredTool === index && (
                    <div 
                      className="hidden sm:block absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[8px] font-bold z-20 animate-fadeIn"
                      style={{
                        background: colors.carbonBlack,
                        color: colors.ghostWhite,
                      }}
                    >
                      {tool.category}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
              style={{
                background: colors.platinum,
                border: `1px solid ${colors.border}`,
              }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: colors.carbonBlack }}
              ></span>
              <p 
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: colors.text, opacity: 0.8 }}
              >
                Tools & Technologies
              </p>
            </div>

            {/* Heading */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6"
              style={{ color: colors.carbonBlack }}
            >
              Enterprise-grade tools for{" "}
              <span 
                className="relative inline-block"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.carbonBlack} 0%, ${colors.text} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                modern infrastructure
              </span>
            </h2>

            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed max-w-xl"
              style={{ color: colors.text, opacity: 0.75 }}
            >
              <span className="font-bold" style={{ color: colors.carbonBlack }}>Rivoogen's</span> comprehensive toolkit covers monitoring, deployment,
              automation, and analytics. Build resilient systems with
              industry-leading technologies.
            </p>

            {/* STATS CARDS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10">
              {[
                { value: "50+", label: "Tools Integrated" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{
                    background: colors.platinum,
                    border: `2px solid ${colors.border}`,
                  }}
                >
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: colors.carbonBlack }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-[10px] sm:text-xs font-medium"
                    style={{ color: colors.text, opacity: 0.6 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURE LIST */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: "✓", text: "Real-time performance monitoring across all services" },
                { icon: "✓", text: "Automated deployment with zero-downtime updates" },
                { icon: "✓", text: "Enterprise-grade security and compliance" },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div 
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: colors.carbonBlack,
                      color: colors.ghostWhite,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <p 
                    className="text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-300"
                    style={{ color: colors.text }}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Tools;