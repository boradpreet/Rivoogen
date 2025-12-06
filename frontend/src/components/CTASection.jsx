import { ArrowRight, Sparkles, CheckCircle, Zap } from "lucide-react";
import colors from "../theme/color";
import React, { useState } from "react";
import GetAQuoteModal from "./Modal/GetAQuoteModal"; // adjust path if needed


export default function CTASection() {
  const [openQuoteModal, setOpenQuoteModal] = useState(false);
  const benefits = [
    "Free Consultation",
    "Custom Solutions",
    "Expert Team",
    "Fast Delivery",
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.carbonBlack }}>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.ghostWhite} 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: colors.ghostWhite }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: colors.ghostWhite }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT - 60% */}
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(250, 250, 255, 0.1)', border: `1px solid ${colors.alabasterGrey}20` }}>
              <Sparkles className="w-4 h-4" style={{ color: colors.ghostWhite }} />
              <span className="text-sm font-medium tracking-wider" style={{ color: colors.ghostWhite }}>
                START YOUR PROJECT TODAY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: colors.ghostWhite }}>
              Ready to Build Your Next{" "}
              <span className="relative inline-block">
                Big Project?
                <div className="absolute -bottom-2 left-0 right-0 h-3" style={{
                  background: `linear-gradient(90deg, ${colors.alabasterGrey}40, transparent)`,
                  borderRadius: '4px'
                }} />
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl leading-relaxed mb-8" style={{ color: colors.alabasterGrey }}>
              Let's innovate, automate and scale your business with modern technology. Our expert team is ready to transform your vision into reality.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(250, 250, 255, 0.05)', border: `1px solid ${colors.alabasterGrey}20` }}
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: colors.ghostWhite }}>
                    <CheckCircle className="w-4 h-4" style={{ color: colors.carbonBlack }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: colors.ghostWhite }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <button
                onClick={() => setOpenQuoteModal(true)}
                className="group flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:gap-4 hover:scale-105"
                style={{
                  backgroundColor: colors.ghostWhite,
                  color: colors.carbonBlack,
                }}
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <GetAQuoteModal
        open={openQuoteModal}
        onClose={() => setOpenQuoteModal(false)}
      />
    </section>
  );
}