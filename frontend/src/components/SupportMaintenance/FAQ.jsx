import React, { useState } from "react";
import colors from "../../theme/color";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "Do you offer 24/7 support?",
      a: "Yes, Rivoogen provides round-the-clock application monitoring and issue resolution.",
    },
    {
      q: "Can you maintain apps built by another company?",
      a: "Absolutely! We specialize in taking over existing systems and improving them.",
    },
    {
      q: "What technologies do you support?",
      a: "We support web apps, mobile apps, cloud servers, APIs, databases, and DevOps pipelines.",
    },
    {
      q: "Do you provide security and patch updates?",
      a: "Yes, we regularly deploy security patches, framework updates, and version upgrades.",
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
            Everything you need to know about our Support & Maintenance services
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
                  background: colors.ghostWhite,
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