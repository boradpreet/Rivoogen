import React, { useState } from "react";
import axios from "axios";
import colors from "../../theme/color";
import { X, Send, MessageCircle, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast"; 

// 🔹 Define backend URL here
const API_URL = "https://rivoogen.onrender.com/api/enquiry";

const GetAQuoteModal = ({ open, onClose }) => {
  if (!open) return null;

  const services = [
    { id: "ai-ml", label: "AI / ML Solutions" },
    { id: "automation", label: "Automation Tools" },
    { id: "cloud", label: "Cloud Services" },
    { id: "web-dev", label: "Web Development" },
    { id: "custom-software", label: "Custom Software" },
    { id: "other", label: "Other" },
  ];

  // 🔹 Form state (no visual UI change)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleServiceToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((x) => x !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple guard, no UI changes
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");  // ❌ ERROR TOAST
      return;
    }

    try {
      setSubmitting(true);
      await axios.post(API_URL, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        services: formData.services,
      });

      toast.success("Message sent successfully! 🎉");  // ✅ SUCCESS TOAST


      // Clear form after success (still no extra UI)
      setFormData({
        name: "",
        email: "",
        message: "",
        services: [],
      });

      // Optional: close modal after submit
      // onClose && onClose();
    } catch (error) {
      console.error("Error sending contact form:", error);
       toast.error("Failed to send message. Try again."); // ❌ BACKEND FAIL TOAST
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
        background: "rgba(28, 28, 28, 0.5)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl rounded-3xl relative overflow-hidden modal-container"
        style={{
          background: colors.ghostWhite,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          .modal-container::-webkit-scrollbar {
            width: 6px;
          }
          .modal-container::-webkit-scrollbar-track {
            background: transparent;
            margin: 24px 0;
          }
          .modal-container::-webkit-scrollbar-thumb {
            background: ${colors.carbonBlack};
            border-radius: 10px;
            background-clip: padding-box;
          }
          .modal-container::-webkit-scrollbar-thumb:hover {
            background: #2a2a2a;
          }
          .modal-container {
            scrollbar-width: thin;
            scrollbar-color: ${colors.carbonBlack} transparent;
          }
        `}</style>

        <div className="grid lg:grid-cols-5">
          {/* Left Sidebar - Contact Info */}
          <div
            className="lg:col-span-2 p-6 sm:p-8 md:p-10"
            style={{
              background: colors.ghostWhite,
              borderRight: `2px solid ${colors.alabasterGrey}`,
            }}
          >
            {/* Logo/Brand */}
            <div className="mb-6 sm:mb-8">
              <h3
                className="text-xl sm:text-2xl font-bold"
                style={{ color: colors.carbonBlack }}
              >
                Rivoogen
              </h3>
            </div>

            {/* Chat to us */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-start gap-3 mb-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: colors.carbonBlack,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={20} style={{ color: colors.ghostWhite }} />
                </div>
                <div>
                  <h4
                    className="font-bold text-base sm:text-lg mb-1"
                    style={{ color: colors.carbonBlack }}
                  >
                    Chat to us
                  </h4>
                  <p
                    className="text-xs sm:text-sm mb-2"
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:rivoogen@gmail.com"
                    className="text-xs sm:text-sm font-semibold break-all"
                    style={{ color: colors.carbonBlack }}
                  >
                    rivoogen@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Visit us */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-start gap-3 mb-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: colors.carbonBlack,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} style={{ color: colors.ghostWhite }} />
                </div>
                <div>
                  <h4
                    className="font-bold text-base sm:text-lg mb-1"
                    style={{ color: colors.carbonBlack }}
                  >
                    Visit us
                  </h4>
                  <p
                    className="text-xs sm:text-sm mb-2"
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    Come say hello at our office HQ.
                  </p>
                  <p
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: colors.carbonBlack }}
                  >
                    Surat, Gujarat
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Call us */}
            <div>
              <div className="flex items-start gap-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: colors.carbonBlack,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} style={{ color: colors.ghostWhite }} />
                </div>
                <div>
                  <h4
                    className="font-bold text-base sm:text-lg mb-1"
                    style={{ color: colors.carbonBlack }}
                  >
                    Call us
                  </h4>
                  <p
                    className="text-xs sm:text-sm mb-2"
                    style={{ color: colors.carbonBlack, opacity: 0.7 }}
                  >
                    Mon-Fri from 10am to 7pm.
                  </p>
                  <a
                    href="tel:+917984327489"
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: colors.carbonBlack }}
                  >
                    +91 79843 27489
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="lg:col-span-3 p-6 sm:p-8 md:p-10"
            style={{
              background: colors.softLinen,
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 transition-all duration-300"
              style={{
                width: "40px",
                height: "40px",
                background: colors.carbonBlack,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
            >
              <X size={20} style={{ color: colors.ghostWhite }} />
            </button>

            {/* Header */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
              style={{
                color: colors.carbonBlack,
                letterSpacing: "-0.02em",
              }}
            >
              Got ideas? We've got
              <br />
              the skills. Let's team up.
            </h2>
            <p
              className="text-sm sm:text-base mb-6 sm:mb-8"
              style={{
                color: colors.carbonBlack,
                opacity: 0.7,
              }}
            >
              Tell us more about yourself and what you've got in mind.
            </p>

            {/* Form */}
            <form
              className="space-y-5 sm:space-y-6"
              onSubmit={handleSubmit} // 🔹 only added handler
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  className="w-full p-3 sm:p-4 transition-all duration-300 outline-none"
                  style={{
                    background: "transparent",
                    borderBottom: `2px solid ${colors.carbonBlack}`,
                    color: colors.carbonBlack,
                    fontSize: "16px",
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="w-full p-3 sm:p-4 transition-all duration-300 outline-none"
                  style={{
                    background: "transparent",
                    borderBottom: `2px solid ${colors.carbonBlack}`,
                    color: colors.carbonBlack,
                    fontSize: "16px",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="3"
                  placeholder="Tell us a little about the project..."
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  className="w-full p-3 sm:p-4 transition-all duration-300 outline-none resize-none"
                  style={{
                    background: "transparent",
                    borderBottom: `2px solid ${colors.carbonBlack}`,
                    color: colors.carbonBlack,
                    fontSize: "16px",
                  }}
                ></textarea>
              </div>

              {/* Services Checkboxes */}
              <div>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: colors.carbonBlack }}
                >
                  How can we help?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        style={{
                          width: "20px",
                          height: "20px",
                          accentColor: colors.carbonBlack,
                        }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: colors.carbonBlack }}
                      >
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: colors.carbonBlack,
                  color: colors.ghostWhite,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(28, 28, 28, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Let's get started!
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteModal;
