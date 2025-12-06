import React from "react";
import colors from "../../theme/color";
import { 
  Workflow, 
  Database, 
  Bot, 
  Wrench, 
  Link2, 
  Bell 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Business Process Automation",
      desc: "Automate workflows like approvals, reporting, notifications, and task routing to streamline your operations and reduce manual overhead.",
      icon: Workflow,
    },
    {
      number: "02",
      title: "Data Automation Pipelines",
      desc: "Automated data extraction, processing, validation & integration across your entire data ecosystem for real-time insights.",
      icon: Database,
    },
    {
      number: "03",
      title: "RPA (Robotic Process Automation)",
      desc: "Intelligent bots that replace repetitive manual tasks—data entry, scraping, scheduling—freeing your team for strategic work.",
      icon: Bot,
    },
    {
      number: "04",
      title: "Custom Automation Tools",
      desc: "Bespoke scripts, dashboards, and workflows designed specifically for your unique business requirements and processes.",
      icon: Wrench,
    },
    {
      number: "05",
      title: "API Integration Automation",
      desc: "Seamlessly connect CRM, ERP, databases, and SaaS systems with automated sync and bi-directional data flow.",
      icon: Link2,
    },
    {
      number: "06",
      title: "Notification & Alert Systems",
      desc: "Real-time SMS, email, WhatsApp, and dashboard alert automations to keep your team informed and responsive.",
      icon: Bell,
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-16 lg:py-28 lg:px-32 relative overflow-hidden"
      style={{ background: colors.carbonBlack }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `linear-gradient(${colors.ghostWhite} 1px, transparent 1px), linear-gradient(90deg, ${colors.ghostWhite} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: colors.alabasterGrey,
              marginBottom: "16px",
              opacity: 0.7,
            }}
          >
            OUR SERVICES
          </div>

          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ 
              color: colors.ghostWhite,
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Services We Provide
            <br />
            at Rivoogen
          </h2>

          {/* Underline */}
          <div
            style={{
              width: "100px",
              height: "4px",
              background: colors.ghostWhite,
            }}
          />
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                style={{
                  borderTop: `1px solid rgba(250, 250, 255, 0.1)`,
                  paddingTop: "40px",
                  paddingBottom: "40px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "20px";
                  e.currentTarget.style.backgroundColor = "rgba(250, 250, 255, 0.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <div
                      style={{
                        fontSize: "80px",
                        fontWeight: "900",
                        color: colors.alabasterGrey,
                        opacity: 0.15,
                        lineHeight: "1",
                      }}
                    >
                      {service.number}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="lg:col-span-5 flex items-start gap-4">
                    {/* Icon */}
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        background: "rgba(250, 250, 255, 0.1)",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={28} style={{ color: colors.ghostWhite }} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: colors.ghostWhite,
                        lineHeight: "1.3",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p
                      style={{
                        fontSize: "16px",
                        color: colors.alabasterGrey,
                        lineHeight: "1.7",
                        opacity: 0.9,
                      }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Border */}
        <div
          style={{
            borderTop: `1px solid rgba(250, 250, 255, 0.1)`,
            marginTop: "0",
          }}
        />

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p
            className="text-lg mb-6"
            style={{
              color: colors.alabasterGrey,
              maxWidth: "600px",
              margin: "0 auto 24px",
            }}
          >
            Ready to transform your business with intelligent automation? 
            Let's discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;