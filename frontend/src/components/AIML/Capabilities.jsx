// src/components/ai-ml/Capabilities.jsx
import React from "react";
import colors from "../../theme/color";

const Capabilities = () => {
  const capabilities = [
    {
      number: "01",
      title: "AI-Powered Automation",
      desc: "We build intelligent automation systems that replace repetitive manual tasks using AI-driven efficiency. Ideal for support teams, finance operations, HR workflows, and telecom automation.",
    },
    {
      number: "02",
      title: "Predictive Analytics & Forecasting",
      desc: "Our ML models provide accurate predictions for sales, demand, customer behavior, risks, and financial outcomes to enable smarter business decisions.",
    },
    {
      number: "03",
      title: "Custom Machine Learning Models",
      desc: "From classification to recommendation engines, anomaly detection, clustering, and time-series models — we develop ML solutions tailored to your use cases.",
    },
    {
      number: "04",
      title: "Natural Language Processing (NLP)",
      desc: "We create NLP systems for chatbots, text analysis, document understanding, sentiment detection, and voice-based AI solutions.",
    },
    {
      number: "05",
      title: "Computer Vision Solutions",
      desc: "We build image and video-based AI solutions including object detection, OCR, face recognition, visual inspection automation, and scene understanding.",
    },
    {
      number: "06",
      title: "AI Integration & Deployment",
      desc: "End-to-end integration of AI models with your existing systems, cloud deployment, microservices architecture, and continuous performance monitoring.",
    },
  ];

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: colors.carbonBlack }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <div 
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: colors.alabasterGrey, opacity: 0.6 }}
          >
            What We Do
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.ghostWhite }}
          >
            Our AI/ML Capabilities
          </h2>
          <div 
            className="w-20 h-1"
            style={{ backgroundColor: colors.platinum }}
          ></div>
        </div>

        {/* Capabilities List - Alternating Layout */}
        <div className="space-y-0">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Divider Line */}
              <div 
                className="h-px w-full"
                style={{ backgroundColor: colors.alabasterGrey, opacity: 0.2 }}
              ></div>

              {/* Content Row */}
              <div 
                className="grid md:grid-cols-12 gap-6 py-8 transition-all duration-300 hover:px-4"
                style={{
                  transition: 'padding 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.ghostWhite}05`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Number */}
                <div className="md:col-span-2 flex items-start">
                  <span
                    className="text-5xl md:text-6xl font-bold leading-none"
                    style={{ 
                      color: colors.alabasterGrey,
                      opacity: 0.3
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4 flex items-start">
                  <h3
                    className="text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: colors.ghostWhite }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6 flex items-start">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: colors.alabasterGrey }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Final Bottom Line */}
          <div 
            className="h-px w-full"
            style={{ backgroundColor: colors.alabasterGrey, opacity: 0.2 }}
          ></div>
        </div>

    

      </div>
    </section>
  );
};

export default Capabilities;