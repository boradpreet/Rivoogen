// src/components/ai-ml/FAQ.jsx
import React, { useState } from "react";
import colors from "../../theme/color";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of AI solutions do you build?",
      answer:
        "We develop end-to-end AI systems including predictive analytics, automation agents, NLP-based applications, computer vision models, recommendation engines, and enterprise-grade ML pipelines.",
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "Most AI solutions take 4–12 weeks depending on complexity, data availability, model design, and deployment requirements.",
    },
    {
      question: "Do you integrate AI into existing systems?",
      answer:
        "Yes. We integrate AI through APIs, microservices, cloud deployment, and custom enterprise connectors — ensuring smooth compatibility with your current workflows.",
    },
    {
      question: "Can AI improve my business decision-making?",
      answer:
        "Absolutely. AI helps predict trends, analyze customer behavior, detect risks, automate operations, and provide real-time insights that support faster and better decisions.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer:
        "Yes, we offer continuous monitoring, optimization, and maintenance to ensure your AI models stay accurate, scalable, and aligned with evolving business needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="w-full py-20" 
      style={{ backgroundColor: colors.ghostWhite }}
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div 
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: colors.carbonBlack, opacity: 0.5 }}
          >
            FAQ
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.carbonBlack }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.carbonBlack, opacity: 0.7 }}
          >
            Everything you need to know about our AI & ML services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-2 transition-all duration-300"
              style={{
                backgroundColor: openIndex === index ? colors.softLinen : colors.ghostWhite,
                borderColor: openIndex === index ? colors.carbonBlack : colors.alabasterGrey,
              }}
            >
              {/* Question Button */}
              <button
                className="w-full text-left p-6 flex justify-between items-start gap-4 group"
                onClick={() => toggleFAQ(index)}
                style={{
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Number Badge */}
                  <div 
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm transition-all duration-300"
                    style={{
                      backgroundColor: openIndex === index ? colors.carbonBlack : colors.platinum,
                      color: openIndex === index ? colors.ghostWhite : colors.carbonBlack,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Question Text */}
                  <span
                    className="text-lg md:text-xl font-bold leading-tight flex-1"
                    style={{ color: colors.carbonBlack }}
                  >
                    {item.question}
                  </span>
                </div>

                {/* Toggle Icon */}
                <div 
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                  >
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke={colors.carbonBlack}
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out',
                }}
              >
                <div 
                  className="px-6 pb-6 pl-18"
                  style={{ paddingLeft: '88px' }}
                >
                  <div 
                    className="w-full h-px mb-4"
                    style={{ backgroundColor: colors.alabasterGrey }}
                  ></div>
                  <p 
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;