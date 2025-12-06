import { Menu, X, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetAQuoteModal from "./Modal/GetAQuoteModal";

const colors = {
  carbonBlack: "#1a1a1a",
  ghostWhite: "#f8f8f8",
  softLinen: "#e8e8e8",
  alabasterGrey: "#d0d0d0",
  surface: "#fafafa",
  background: "#ffffff",
  border: "#e0e0e0",
  text: "#1a1a1a",
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Services" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact-us" },
  { name: "Vision", path: "/vision" }
];

const services = [
  { name: "AI/ML", path: "/ai-ml" },
  { name: "Semiconductor", path: "/semiconductor" },
  { name: "Cloud Services", path: "/cloud-services" },
  { name: "Automation Tools", path: "/automation-tools" },
  { name: "Web Development", path: "/web-services" },
  { name: "Custom Software Development", path: "/custom-software" },
  { name: "QA & Testing", path: "/qa-testing" },
  { name: "Support & Maintenance", path: "/support-maintenance" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowServicesDropdown(false);
    if (service && service.path) {
      navigate(service.path);
      setActiveItem("Services");
    }
  };

  const handleMobileServiceClick = (service) => {
    setSelectedService(service);
    setIsOpen(false);
    if (service && service.path) {
      navigate(service.path);
      setActiveItem("Services");
    }
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: colors.background,
          borderBottom: `1px solid ${colors.border}`,
        }}
        className="w-full sticky top-0 z-50 backdrop-blur-sm"
      >
        {/* Decorative Top Border */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${colors.carbonBlack} 0%, ${colors.alabasterGrey} 50%, ${colors.carbonBlack} 100%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            {/* Logo Section */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="https://res.cloudinary.com/djh2ro9tm/image/upload/v1764413088/1001163459_2_ycbkvj.jpg"
                alt="Rivoogen Logo"
                className="w-14 h-14 object-contain"
              />

              <div className="leading-tight">
                <h1
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: colors.carbonBlack }}
                >
                  Rivoogen
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.name} className="relative">
                  {item.name === "Services" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                      <button
                        onClick={() => setActiveItem(item.name)}
                        className="flex items-center gap-1 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 relative group"
                        style={{
                          fontSize: "16px",
                          color:
                            activeItem === item.name ? colors.carbonBlack : colors.text,
                          backgroundColor:
                            activeItem === item.name ? colors.surface : "transparent",
                        }}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                        {activeItem === item.name && (
                          <div
                            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-6 rounded-full"
                            style={{ backgroundColor: colors.carbonBlack }}
                          />
                        )}
                        <div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                          style={{ backgroundColor: colors.surface }}
                        />
                      </button>

                      {/* Services Dropdown - Removed gap */}
                      {showServicesDropdown && (
                        <div
                          className="absolute top-full left-0 pt-2 w-72"
                          style={{ marginTop: '0px' }}
                        >
                          <div
                            className="rounded-2xl shadow-xl overflow-hidden"
                            style={{
                              backgroundColor: colors.background,
                              border: `2px solid ${colors.border}`,
                              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <div className="p-3">
                              {services.map((service) => (
                                <button
                                  key={service.name}
                                  className="w-full text-left px-5 py-3.5 rounded-xl font-medium transition-all duration-200"
                                  style={{
                                    fontSize: "15px",
                                    color: colors.carbonBlack,
                                  }}
                                  onClick={() => handleServiceClick(service)}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      colors.carbonBlack;
                                    e.currentTarget.style.color = colors.ghostWhite;
                                    e.currentTarget.style.transform =
                                      "translateX(4px)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "transparent";
                                    e.currentTarget.style.color =
                                      colors.carbonBlack;
                                    e.currentTarget.style.transform =
                                      "translateX(0)";
                                  }}
                                >
                                  {service.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setActiveItem(item.name);
                        if (item.path) navigate(item.path);
                      }}
                      className="px-5 py-2.5 rounded-lg font-medium transition-all duration-300 relative group"
                      style={{
                        fontSize: "16px",
                        color:
                          activeItem === item.name ? colors.carbonBlack : colors.text,
                        backgroundColor:
                          activeItem === item.name ? colors.surface : "transparent",
                      }}
                    >
                      {item.name}
                      {activeItem === item.name && (
                        <div
                          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-6 rounded-full"
                          style={{ backgroundColor: colors.carbonBlack }}
                        />
                      )}
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        style={{ backgroundColor: colors.surface }}
                      />
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Section - CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <img
                src="https://www.vedantalimited.com/img/contact-icn.gif"
                alt="Globe"
                className="w-6 h-6 object-contain cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/contact-us#map-section");
                }}
              />

              {/* CTA Button */}
              <button
                onClick={() => setQuoteOpen(true)}
                style={{
                  backgroundColor: colors.carbonBlack,
                  color: colors.ghostWhite,
                  fontSize: "15px",
                }}
                className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: isOpen ? colors.carbonBlack : colors.surface,
                  color: isOpen ? colors.ghostWhite : colors.carbonBlack,
                }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className="lg:hidden pb-6 pt-2"
              style={{ borderTop: `1px solid ${colors.border}` }}
            >
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.name === "Services" ? (
                      <div>
                        <button
                          onClick={() => setActiveItem(item.name)}
                          className="w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between"
                          style={{
                            fontSize: "16px",
                            color:
                              activeItem === item.name
                                ? colors.carbonBlack
                                : colors.text,
                            backgroundColor:
                              activeItem === item.name ? colors.surface : "transparent",
                          }}
                        >
                          {item.name}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Mobile Services Submenu */}
                        <div className="ml-4 mt-2 space-y-1">
                          {services.map((service) => (
                            <button
                              key={service.name}
                              className="w-full text-left px-4 py-2 rounded-lg transition-all duration-200"
                              style={{
                                fontSize: "14px",
                                color: colors.carbonBlack,
                                backgroundColor: colors.surface,
                                opacity: 0.8,
                              }}
                              onClick={() => handleMobileServiceClick(service)}
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveItem(item.name);
                          if (item.path) navigate(item.path);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300"
                        style={{
                          fontSize: "16px",
                          color:
                            activeItem === item.name
                              ? colors.carbonBlack
                              : colors.text,
                          backgroundColor:
                            activeItem === item.name ? colors.surface : "transparent",
                        }}
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <button
                onClick={() => setQuoteOpen(true)}
                style={{
                  backgroundColor: colors.carbonBlack,
                  color: colors.ghostWhite,
                  fontSize: "15px",
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Subtle Shadow at bottom of navbar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(
            90deg,
            transparent 0%,
            ${colors.border} 50%,
            transparent 100%
          )`,
          }}
        />
      </nav>
      <GetAQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}