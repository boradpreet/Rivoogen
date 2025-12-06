import { useState } from "react";
import { Sparkles } from "lucide-react";
import colors from "../../theme/color";

const categories = ["All", "Languages", "Frameworks", "Cloud", "Tools", "Databases"];

const tools = [
  { name: "Python", category: "Languages", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "TensorFlow", category: "Frameworks", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
  { name: "PyTorch", category: "Frameworks", logo: "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg" },
  { name: "Scikit-Learn", category: "Frameworks", logo: "https://img.stackshare.io/service/101699/default_a1af9359f3e2668649d8d83b96a56384dd2d9553.png" },
  { name: "OpenAI GPT", category: "Tools", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "HuggingFace", category: "Tools", logo: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fsusumuota%2Fdevto-github%2Fmain%2Fposts%2Fhf_dl%2Fhf-logo-1000-400.png" },
  { name: "AWS SageMaker", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Azure AI", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
  { name: "Google Cloud AI", category: "Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "LangChain", category: "Tools", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-QRqqtRi8EEyMCDcBawEio86I7MpmwMBTw&s" },
  { name: "Pinecone", category: "Databases", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_Hc3YJVV3UNGtwOs8n37fLD5ejOZuvGqoxm5bxF-G7pW2xGXNyfCRlQikRlhUajJFrg&usqp=CAU" },
  { name: "Weaviate", category: "Databases", logo: "https://images.hasgeek.com/embed/file/e933221ebd4a4ea787ce65c6e3f56787" },
  { name: "Docker", category: "Tools", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  { name: "Kubernetes", category: "Tools", logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg" },
  { name: "FastAPI", category: "Frameworks", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
  { name: "Node.js", category: "Languages", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
];

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = activeCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.surface }}>
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
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: colors.carbonBlack }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: colors.carbonBlack, opacity: 0.6 }}>
              OUR TECH STACK
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: colors.carbonBlack }}>
                Powered by Industry-Leading Technologies
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-1 w-20 rounded-full" style={{ backgroundColor: colors.carbonBlack }} />
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: colors.carbonBlack, opacity: 0.3 }} />
              </div>
            </div>

            <p className="text-lg max-w-xl" style={{ color: colors.carbonBlack, opacity: 0.7 }}>
              We leverage cutting-edge frameworks, cloud platforms, and AI tools to build scalable, efficient solutions
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            
            return (
              <button
                key={index}
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

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => {
            const isDark = index % 2 === 0;
            
            return (
              <div
                key={tool.name}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: isDark ? colors.carbonBlack : colors.ghostWhite,
                  border: `2px solid ${colors.border}`,
                  minHeight: '140px',
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.05}s both`,
                }}
              >
                {/* Background Pattern for Dark Cards */}
                {isDark && (
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
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Category Tag */}
                  <div
                    className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      color: colors.carbonBlack,
                      opacity: 0.6,
                    }}
                  >
                    {tool.category}
                  </div>

                  {/* Logo Container */}
                  <div
                    className="mb-3 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: isDark ? colors.ghostWhite : colors.surface,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  {/* Tech Name */}
                  <h3
                    className="text-sm font-bold"
                    style={{ color: isDark ? colors.ghostWhite : colors.carbonBlack }}
                  >
                    {tool.name}
                  </h3>

                  {/* Bottom Accent */}
                  <div className="flex items-center gap-1 mt-3">
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

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>16+</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Core Technologies</p>
          </div>

          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>Multi-Cloud</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>AWS, Azure & Google Cloud</p>
          </div>

          <div
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
            }}
          >
            <p className="text-4xl font-bold mb-2" style={{ color: colors.carbonBlack }}>100%</p>
            <p className="text-sm" style={{ color: colors.carbonBlack, opacity: 0.6 }}>Production Ready</p>
          </div>
        </div>
      </div>

      {/* Keyframes for fade-in animation */}
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