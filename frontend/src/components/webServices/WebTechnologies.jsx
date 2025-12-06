import { useState } from "react";
import { Code2, Server, Database, Cloud, Palette, Sparkles } from "lucide-react";
import colors from "../../theme/color";

const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "Design"];

const technologies = [
  // Frontend
  { name: "React.js", category: "Frontend", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next.js", category: "Frontend", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "TypeScript", category: "Frontend", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Tailwind CSS", category: "Frontend", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  
  // Backend
  { name: "Node.js", category: "Backend", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "Express.js", category: "Backend", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
  { name: "Python", category: "Backend", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "FastAPI", category: "Backend", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
  
  // Database
  { name: "MongoDB", category: "Database", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "MySQL", category: "Database", logo: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg" },
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "Redis", category: "Database", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
  
  // Cloud
  { name: "AWS", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Azure", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
  { name: "Vercel", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
  { name: "Docker", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  
  // Design
  { name: "Figma", category: "Design", logo: "https://cdn.worldvectorlogo.com/logos/figma-5.svg" },
];

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Cloud: Cloud,
  Design: Palette,
};

export default function WebTechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech = activeCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Group by category for display
  const groupedTech = filteredTech.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: colors.surface }}>
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
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full" style={{ backgroundColor: colors.background }}>
            <Sparkles className="w-4 h-4" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-medium tracking-wider" style={{ color: colors.carbonBlack }}>
              TECH STACK
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: colors.carbonBlack }}>
            Technologies We Use
          </h2>

          <p className="text-base max-w-2xl mx-auto mb-6" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
            Modern tools and frameworks to build fast, scalable web applications
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
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

        {/* Technologies by Category */}
        <div className="space-y-8">
          {Object.entries(groupedTech).map(([category, techs]) => {
            const Icon = categoryIcons[category];
            
            return (
              <div key={category}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: colors.carbonBlack,
                    }}
                  >
                    {Icon && <Icon size={20} style={{ color: colors.ghostWhite }} />}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.carbonBlack }}>
                    {category}
                  </h3>
                  <div className="flex-1 h-px" style={{ backgroundColor: colors.border }} />
                </div>

                {/* Tech Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {techs.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                      style={{
                        backgroundColor: colors.ghostWhite,
                        border: `2px solid ${colors.border}`,
                        animation: `fadeIn 0.4s ease-in-out ${index * 0.05}s both`,
                      }}
                    >
                      {/* Hover Gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${colors.softLinen}40 0%, transparent 100%)`,
                        }}
                      />

                      {/* Content */}
                      <div className="relative p-5 flex flex-col items-center text-center">
                        {/* Logo */}
                        <div
                          className="w-16 h-16 mb-3 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: colors.surface,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Name */}
                        <h4
                          className="text-sm font-bold"
                          style={{ color: colors.carbonBlack }}
                        >
                          {tech.name}
                        </h4>

                        {/* Bottom Accent */}
                        <div className="flex items-center gap-1 mt-3">
                          <div
                            className="h-1 w-6 rounded-full group-hover:w-10 transition-all duration-300"
                            style={{
                              backgroundColor: colors.carbonBlack,
                              opacity: 0.3,
                            }}
                          />
                          <div
                            className="h-1 w-3 rounded-full"
                            style={{
                              backgroundColor: colors.carbonBlack,
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-3xl font-bold mb-1" style={{ color: colors.carbonBlack }}>17+</p>
            <p className="text-xs" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Technologies</p>
          </div>
          <div
            className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-3xl font-bold mb-1" style={{ color: colors.carbonBlack }}>5</p>
            <p className="text-xs" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Categories</p>
          </div>
          <div
            className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-3xl font-bold mb-1" style={{ color: colors.carbonBlack }}>Modern</p>
            <p className="text-xs" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Tech Stack</p>
          </div>
          <div
            className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-3xl font-bold mb-1" style={{ color: colors.carbonBlack }}>100%</p>
            <p className="text-xs" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Production Ready</p>
          </div>
        </div>
      </div>

      {/* Keyframes */}
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
      `}</style>
    </section>
  );
}