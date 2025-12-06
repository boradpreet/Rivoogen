import { useEffect, useState } from "react";
import colors from "../theme/color";

export default function FullPageLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
      style={{ backgroundColor: colors.ghostWhite }}
    >
      {/* Animated container that slides up from bottom */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <img
          src="https://res.cloudinary.com/djh2ro9tm/image/upload/v1764928226/rivoogen_logo_ijfnl3.png"
          alt="Loading..."
          className="w-44 h-44 animate-pulse"
        />
      </div>
    </div>
  );
}