import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import colors from "../theme/color";
import { Link } from "react-router-dom";


// Hero slides (5 slides as requested)
const slides = [
  {
    title: "AI / ML Models & Analytics",
    subtitle:
      "Design, train, and deploy ML models for prediction, recommendation, forecasting, and advanced analytics.",
    button: "AI / ML Offerings",
    link: "/ai-ml",
    image:
      "https://i.pinimg.com/736x/db/29/c7/db29c787516fbb468ea220803f35862a.jpg",
  },
  {
    title: "Semiconductor Engineering & Systems",
    subtitle:
      "From chip design and verification to embedded systems — accelerate your semiconductor innovation pipeline.",
    button: "Semiconductor Services",
    link: "/semiconductor",   // If you enable this page later
    image:
      "https://i.pinimg.com/736x/ef/2d/5e/ef2d5e13183a73833858eb051b8baa4f.jpg",
  },
   {
    title: "AI Automation Solutions",
    subtitle:
      "Automate business workflows, customer journeys, and operations using intelligent AI agents and orchestrated systems.",
    button: "Explore AI Automation",
    link: "/automation-tools",
    image:
      "https://i.pinimg.com/1200x/13/bc/3c/13bc3c6bad007d5b1c61a7fb84645265.jpg",
  },
  {
    title: "Modern Web Development",
    subtitle:
      "Build fast, responsive, and secure web applications with modern engineering practices and UX-focused design.",
    button: "View Web Projects",
    link: "/web-services",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Cloud, DevOps & Scalability",
    subtitle:
      "Deploy, observe, and scale your platforms with robust cloud architectures, DevOps workflows, and SRE practices.",
    button: "Cloud & DevOps",
    link: "/cloud-services",
    image:
      "https://i.pinimg.com/736x/d1/eb/8f/d1eb8f3e2355f0483a50618f571b37c8.jpg",
  },
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`w-full overflow-hidden relative transition-all duration-1000 ${
      isLoaded ? "opacity-100" : "opacity-0"
    }`}>
      {/* Dark Pattern Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: colors.carbonBlack,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(218, 221, 216, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(218, 221, 216, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(218, 221, 216, 0.02) 0%, transparent 30%),
            linear-gradient(135deg, rgba(218, 221, 216, 0.02) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(218, 221, 216, 0.01) 60px,
              rgba(218, 221, 216, 0.01) 120px
            )
          `,
        }}
      />

      {/* Overlay Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${colors.alabasterGrey} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.alabasterGrey} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32">
        <div className="flex items-center md:flex-row flex-col-reverse gap-8 md:gap-12">
          {/* LEFT TEXT CONTENT */}
          <div className="w-full md:w-1/2 z-10">
            {/* Slide Number Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{
                backgroundColor: "rgba(218, 221, 216, 0.1)",
                border: `1px solid rgba(218, 221, 216, 0.2)`,
              }}
            >
              <span
                style={{ color: colors.alabasterGrey }}
                className="text-xs sm:text-sm font-medium"
              >
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            {/* Animated Title */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ color: colors.ghostWhite }}
            >
              {slides[current].title}
            </h1>

            {/* Animated Subtitle */}
            <p
              className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ color: colors.alabasterGrey }}
            >
              {slides[current].subtitle}
            </p>

            {/* CTA Button */}
            <Link
              to={slides[current].link}
              className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-700 delay-300 hover:gap-4 hover:shadow-xl hover:scale-105 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                background: colors.ghostWhite,
                color: colors.carbonBlack,
              }}
            >
              {slides[current].button}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Progress Bars */}
            <div className={`flex gap-2 sm:gap-3 mt-8 sm:mt-12 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(218, 221, 216, 0.2)" }}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${current === index ? "w-full" : "w-0"
                      }`}
                    style={{
                      backgroundColor: colors.ghostWhite,
                      transitionDelay: current === index ? "0ms" : "0ms",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full md:w-1/2 relative">
            {/* Decorative Element */}
            <div
              className={`absolute -top-8 -right-8 w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
                isLoaded ? "scale-100 opacity-20" : "scale-0 opacity-0"
              }`}
              style={{ backgroundColor: colors.alabasterGrey }}
            />

            {/* Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <div
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl transform rotate-3 scale-105 transition-all duration-1000 delay-200 ${
                  isLoaded ? "opacity-100" : "opacity-0 rotate-12"
                }`}
                style={{
                  backgroundColor: "rgba(218, 221, 216, 0.1)",
                  border: `1px solid rgba(218, 221, 216, 0.2)`,
                }}
              />

              {/* Main Image */}
              <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}>
                <img
                  src={slides[current].image}
                  alt="Hero Slide"
                  className={`w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover transition-all duration-700 ${isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"
                    }`}
                  style={{
                    border: `2px solid rgba(218, 221, 216, 0.2)`,
                  }}
                />

                {/* Image Overlay Gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(28, 28, 28, 0.3) 0%, transparent 50%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION DOTS - Bottom Center */}
        <div className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20 transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              className={`rounded-full transition-all duration-300 ${current === index ? "w-8 sm:w-12 h-2 sm:h-3" : "w-2 sm:w-3 h-2 sm:h-3 hover:scale-125"
                }`}
              style={{
                backgroundColor:
                  current === index
                    ? colors.ghostWhite
                    : "rgba(218, 221, 216, 0.3)",
              }}
            />
          ))}
        </div>
      </div>

      {/* LEFT ARROW - CENTER OF SLIDER (OUTSIDE IMAGE) */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-700 hover:scale-110 hover:shadow-2xl active:scale-95 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } z-30`}
        style={{
          backgroundColor: "rgba(28, 28, 28, 0.5)",
          border: `1px solid rgba(218, 221, 216, 0.2)`,
        }}
      >
        <ChevronLeft
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: colors.ghostWhite }}
        />
      </button>

      {/* RIGHT ARROW - CENTER OF SLIDER (OUTSIDE IMAGE) */}
      <button
        onClick={nextSlide}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-700 hover:scale-110 hover:shadow-2xl active:scale-95 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } z-30`}
        style={{
          backgroundColor: "rgba(28, 28, 28, 0.5)",
          border: `1px solid rgba(218, 221, 216, 0.2)`,
        }}
      >
        <ChevronRight
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: colors.ghostWhite }}
        />
      </button>
    </section>
  );
}