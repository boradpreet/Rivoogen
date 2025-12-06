import React, { useState } from "react";
import colors from "../../theme/color";
import { Plus, X } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "Do you build software from scratch?",
      a: "Yes, Rivoogen develops fully custom applications tailored to your business requirements. We create scalable, secure solutions from the ground up.",
    },
    {
      q: "Can you modernize old or slow software?",
      a: "Absolutely! We rebuild legacy systems using modern frameworks and cloud-native architecture. Our team specializes in transforming outdated applications into high-performance solutions.",
    },
    {
      q: "Do you provide API development?",
      a: "Yes, we create REST APIs, microservices, and scalable backend architecture. Our APIs are designed for performance, security, and seamless integration with your existing systems.",
    },
    {
      q: "How long does custom software development take?",
      a: "It depends on the project scope, but most applications range from 4–16 weeks. After an initial consultation, we provide a detailed timeline and milestone breakdown.",
    },
    {
      q: "What technologies do you use?",
      a: "We use modern tech stacks including React, Node.js, Python, AWS, Azure, and more. Our technology choices are always aligned with your specific business needs and long-term goals.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer 24/7 support and maintenance packages. Our team ensures your software stays updated, secure, and performs optimally as your business grows.",
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-28 lg:px-32"
      style={{ background: colors.ghostWhite }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Heading and CTA */}
          <div className="lg:sticky lg:top-32 self-start">
            <h2 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Got any questions?
            </h2>
            <p 
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{ 
                color: colors.alabasterGrey,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              We've got answers.
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    background: colors.ghostWhite,
                    border: `2px solid ${colors.alabasterGrey}`,
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <button
                    className="w-full flex justify-between items-center gap-4 p-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <h3 
                      className="text-base font-semibold"
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
                      {isOpen ? (
                        <X
                          size={20}
                          style={{
                            color: colors.carbonBlack,
                          }}
                        />
                      ) : (
                        <Plus
                          size={20}
                          style={{
                            color: colors.carbonBlack,
                          }}
                        />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 pb-5"
                      style={{
                        borderTop: `1px solid ${colors.alabasterGrey}`,
                        paddingTop: "16px",
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
                  )}
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