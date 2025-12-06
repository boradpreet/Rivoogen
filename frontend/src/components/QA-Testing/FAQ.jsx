import React, { useState } from "react";
import colors from "../../theme/color";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What types of testing does Rivoogen provide?",
      a: "We provide manual testing, automation testing, security testing, performance testing, and mobile testing.",
    },
    {
      q: "Do you offer automation testing?",
      a: "Yes, using Selenium, Playwright, Cypress along with CI/CD pipelines.",
    },
    {
      q: "Can Rivoogen test existing applications?",
      a: "Absolutely! Even if your software was built by another company, we can test and improve it.",
    },
    {
      q: "How does your QA process work?",
      a: "We follow a detailed workflow: planning → test cases → execution → bug reporting → regression → final sign-off.",
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:px-32"
      style={{ background: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.carbonBlack }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-lg"
            style={{ color: colors.carbonBlack, opacity: 0.7 }}
          >
            Everything you need to know about our QA services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: colors.surface,
                  border: `2px solid ${isOpen ? colors.carbonBlack : colors.alabasterGrey}`,
                }}
              >
                <button
                  className="w-full p-6 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span 
                    className="text-lg md:text-xl font-semibold flex-1"
                    style={{ color: colors.carbonBlack }}
                  >
                    {item.q}
                  </span>

                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                      background: isOpen ? colors.carbonBlack : colors.softLinen,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={18} style={{ color: colors.ghostWhite }} />
                    ) : (
                      <Plus size={18} style={{ color: colors.carbonBlack }} />
                    )}
                  </div>
                </button>

                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                  }}
                >
                  <div className="px-6 pb-6">
                    <p 
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: colors.carbonBlack, opacity: 0.75 }}
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
    </section>
  );
};

export default FAQ;