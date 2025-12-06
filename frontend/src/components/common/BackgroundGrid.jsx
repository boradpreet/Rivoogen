import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none opacity-[0.22]">
      {/* radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_70%)]" />

      {/* dotted semiconductor grid */}
      <div className="absolute inset-0 bg-[url('/grid-dots.svg')] bg-repeat opacity-40" />
    </div>
  );
}
