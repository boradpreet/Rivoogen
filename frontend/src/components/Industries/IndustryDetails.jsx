import React from "react";
import colors from "../../theme/color";

const IndustryDetails = () => {
  const data = [
    {
      title: "FinTech & Banking",
      desc: "Automation, AI risk engines, payment gateways, fraud detection, and secure cloud solutions.",
    },
    {
      title: "Healthcare",
      desc: "HIPAA-safe systems, appointment automation, patient portals, data security & health analytics.",
    },
    {
      title: "E-Commerce",
      desc: "Custom storefronts, automation tools, recommendation engines, and backend order systems.",
    },
    {
      title: "Telecom",
      desc: "Internal portals, CRM systems, networking dashboards, microservices, and cloud infrastructure.",
    },
    {
      title: "Semiconductors",
      desc: "Chip design automation, engineering dashboards, embedded systems, and testing platforms.",
    },
    {
      title: "AI & SaaS Products",
      desc: "AI agents, automation pipelines, cloud SaaS systems, and multi-tenant architectures.",
    },
  ];

  return (
    <section
      className="px-6 py-16 md:px-16 lg:px-32 space-y-10"
      style={{ background: colors.surface, color: colors.text }}
    >
      <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>

      {data.map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-xl shadow"
          style={{
            background: colors.ghostWhite,
            border: `1px solid ${colors.border}`,
          }}
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default IndustryDetails;
