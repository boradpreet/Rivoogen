import React, { useState } from "react";
import colors from "../../theme/color";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { 
      q: "Can you automate any business process?", 
      a: "Yes, if it has rules, steps, or repetition — we can automate it. We analyze your workflow and create custom automation solutions that save time and reduce errors." 
    },
    { 
      q: "Do you create custom automation tools?", 
      a: "Yes, we build full automation systems tailored to your workflows. Our team develops bespoke solutions that integrate seamlessly with your existing processes and tools." 
    },
    { 
      q: "Do you support cloud automation?", 
      a: "Yes, we automate AWS, GCP, Azure workflows, tasks, and pipelines. Our expertise covers infrastructure automation, deployment pipelines, and cloud resource management." 
    },
    { 
      q: "Can you integrate CRM/ERP with automation?", 
      a: "Absolutely. We build API-driven smart integrations that connect your CRM, ERP, and other business systems to create seamless automated workflows across your organization." 
    },
    { 
      q: "How long does implementation take?", 
      a: "Implementation time varies based on complexity, typically ranging from 2-8 weeks. We provide detailed timelines after analyzing your specific requirements and current systems." 
    },
  ];

  return (
    <section
      style={{ background: colors.ghostWhite }}
      className="px-6 py-16 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <div className="lg:sticky lg:top-24">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight" 
              style={{ 
                color: colors.carbonBlack,
                letterSpacing: '-0.02em',
              }}
            >
              Any questions?
              <br />
              We got you.
            </h2>
            
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ 
                color: colors.text, 
                opacity: 0.7 
              }}
            >
              Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl transition-all duration-300"
                style={{
                  background: colors.platinum,
                  border: `2px solid ${open === i ? colors.carbonBlack : colors.border}`,
                  boxShadow: open === i ? '0 8px 16px rgba(28, 28, 28, 0.08)' : 'none',
                }}
              >
                <button
                  className="w-full flex justify-between items-start gap-4 p-6 text-left transition-all duration-300"
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    background: open === i ? colors.ghostWhite : 'transparent',
                    borderRadius: '14px',
                  }}
                >
                  <h3 
                    className="text-lg font-bold flex-1 leading-tight"
                    style={{ color: colors.carbonBlack }}
                  >
                    {item.q}
                  </h3>
                  
                  <div 
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <span 
                      className="text-2xl font-light"
                      style={{ color: colors.carbonBlack }}
                    >
                      {open === i ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Answer with smooth animation */}
                <div
                  style={{
                    maxHeight: open === i ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                  }}
                >
                  <p 
                    className="px-6 pb-6 leading-relaxed"
                    style={{ 
                      color: colors.text,
                      opacity: 0.8,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;