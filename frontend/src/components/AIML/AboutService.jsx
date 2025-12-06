// src/components/ai-ml/AboutService.jsx
import React from "react";
import colors from "../../theme/color";

const AboutService = () => {
  const benefits = [
    "Reduced operational costs",
    "Automated repetitive processes",
    "Improved forecasting accuracy",
    "Enhanced customer insights",
    "Real-time analytics and recommendations"
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "OpenAI", "AWS", 
    "Azure", "Scikit-learn", "Keras", "Docker"
  ];

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: colors.ghostWhite }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Content Block */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          
          {/* Left Sidebar - Vertical Line Accent */}
          <div className="lg:col-span-1 relative">
            <div 
              className="w-1 h-full absolute left-0 top-0"
              style={{ 
                background: `linear-gradient(to bottom, ${colors.carbonBlack}, ${colors.alabasterGrey}, transparent)`
              }}
            ></div>
            <div 
              className="ml-6 sticky top-24"
            >
              <div 
                className="text-sm font-semibold tracking-widest uppercase mb-2"
                style={{ color: colors.carbonBlack, opacity: 0.5 }}
              >
                About
              </div>
              <div 
                className="text-lg font-bold"
                style={{ color: colors.carbonBlack }}
              >
                Our Services
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Title */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-4"
                style={{ color: colors.carbonBlack }}
              >
                AI & Machine Learning Solutions
              </h2>
              <div 
                className="w-24 h-1.5 mb-6"
                style={{ backgroundColor: colors.carbonBlack }}
              ></div>
              <p
                className="text-xl leading-relaxed"
                style={{ color: colors.carbonBlack, opacity: 0.7 }}
              >
                Tailored for Modern Businesses
              </p>
            </div>

            {/* Introduction */}
            <div 
              className="p-8 border-l-4"
              style={{ 
                backgroundColor: colors.softLinen,
                borderLeftColor: colors.carbonBlack
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.carbonBlack }}
              >
                In today's digital world, every company aims to become smarter, faster, and more efficient. 
                At <strong>Blue Data Consulting</strong>, our AI & Machine Learning services help businesses 
                transform raw data into intelligent actions.
              </p>
            </div>

            {/* Two Column Section */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left - Future Ready */}
              <div className="space-y-4">
                <div 
                  className="inline-block px-4 py-1 text-sm font-bold"
                  style={{ 
                    backgroundColor: colors.carbonBlack,
                    color: colors.ghostWhite
                  }}
                >
                  01
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: colors.carbonBlack }}
                >
                  Future-Ready Approach
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  We don't just build models — we build <strong>end-to-end AI systems</strong> that 
                  integrate seamlessly into your existing environment. From developing custom ML algorithms 
                  to deploying AI applications on cloud infrastructure.
                </p>
              </div>

              {/* Right - Business Impact */}
              <div className="space-y-4">
                <div 
                  className="inline-block px-4 py-1 text-sm font-bold"
                  style={{ 
                    backgroundColor: colors.carbonBlack,
                    color: colors.ghostWhite
                  }}
                >
                  02
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: colors.carbonBlack }}
                >
                  Real Business Impact
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: colors.carbonBlack, opacity: 0.7 }}
                >
                  Our solutions are fully customized to your industry needs. We work closely with your team 
                  to understand your goals, evaluate your datasets, and build AI systems that deliver 
                  measurable outcomes.
                </p>
              </div>

            </div>

            {/* Benefits Grid */}
            <div>
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: colors.carbonBlack }}
              >
                Measurable Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border-l-2 transition-all duration-300 hover:pl-6"
                    style={{
                      backgroundColor: colors.platinum,
                      borderLeftColor: colors.carbonBlack
                    }}
                  >
                    <span 
                      className="font-bold text-sm mt-0.5"
                      style={{ color: colors.carbonBlack, opacity: 0.4 }}
                    >
                      →
                    </span>
                    <span
                      className="text-base"
                      style={{ color: colors.carbonBlack }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutService;