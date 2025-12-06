import React, { useState } from "react";
import colors from "../../theme/color";
import { ChevronDown, ArrowRight } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { 
      q: "Do you support AWS, Azure & GCP?", 
      a: "Yes, we support all major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform. Our team is certified across all three platforms and can help you choose the right solution for your business needs." 
    },
    { 
      q: "Can you migrate legacy systems to the cloud?", 
      a: "Absolutely. We specialize in zero-downtime migrations from legacy on-premise systems to modern cloud infrastructure. Our proven methodology ensures data integrity and minimal disruption to your operations." 
    },
    { 
      q: "Do you build CI/CD pipelines?", 
      a: "Yes, we design and implement complete CI/CD pipelines using industry-standard tools like Jenkins, GitHub Actions, GitLab CI/CD, and more. We automate your entire deployment process for faster, reliable releases." 
    },
    { 
      q: "How do you ensure cloud security?", 
      a: "We implement comprehensive security measures including IAM policies, encryption at rest and in transit, threat detection, compliance monitoring, and 24/7 security operations to protect your infrastructure." 
    },
    { 
      q: "What are your support hours?", 
      a: "We provide 24/7 support for all cloud infrastructure services. Our expert team is available around the clock to handle incidents, answer questions, and ensure your systems run smoothly." 
    },
    { 
      q: "How long does a typical cloud migration take?", 
      a: "Migration timelines vary based on your infrastructure complexity, typically ranging from 4-12 weeks. We provide a detailed assessment and timeline after understanding your specific requirements." 
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-28 lg:px-32"
      style={{
        background: colors.ghostWhite,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Header and CTA */}
          <div className="lg:sticky lg:top-32 self-start">
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                background: colors.softLinen,
                border: `1px solid ${colors.alabasterGrey}`,
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                color: colors.carbonBlack,
                marginBottom: "24px",
              }}
            >
              Ready to learn more?
            </div>

            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Frequently asked
              <br />
              questions
            </h2>

            {/* CTA Box */}
            <div
              style={{
                background: colors.softLinen,
                border: `2px solid ${colors.alabasterGrey}`,
                borderRadius: "20px",
                padding: "32px",
                marginTop: "48px",
              }}
            >
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ color: colors.carbonBlack }}
              >
                Still have a question?
              </h3>
              <p 
                className="mb-6 text-base"
                style={{ 
                  color: colors.carbonBlack,
                  opacity: 0.7,
                }}
              >
                Can't find the answer to your question? Send us an email and
                we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    background: colors.ghostWhite,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.borderColor = colors.carbonBlack + "30";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.borderColor = colors.alabasterGrey;
                    }
                  }}
                >
                  <button
                    className="w-full flex justify-between items-start gap-4 p-6 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <h3 
                      className="text-lg font-bold"
                      style={{ color: colors.carbonBlack }}
                    >
                      {item.q}
                    </h3>
                    
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ChevronDown
                        size={20}
                        style={{
                          color: colors.carbonBlack,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </button>

                  {/* Answer with smooth expand */}
                  <div
                    style={{
                      maxHeight: isOpen ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <div
                      className="px-6 pb-6"
                      style={{
                        paddingTop: "8px",
                      }}
                    >
                      <p 
                        className="text-base leading-relaxed"
                        style={{ 
                          color: colors.carbonBlack,
                          opacity: 0.7,
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;