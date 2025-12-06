import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import colors from "../../theme/color";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim()) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return false;
    if (!formData.subject.trim()) return false;
    if (!formData.message.trim()) return false;
    return true;
  };

  // Update validity when user types
  useEffect(() => {
    setIsValid(validateForm());
  }, [formData]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5001/api/contact", formData);

      if (res.data.success) {
        toast.success("Message sent successfully! 🎉");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Server error. Unable to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      className="px-6 py-16 md:px-16 lg:py-20 lg:px-32 relative overflow-hidden"
      style={{ background: colors.ghostWhite }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.carbonBlack} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: colors.carbonBlack,
              color: colors.ghostWhite,
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            CONTACT FORM
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: colors.carbonBlack, letterSpacing: "-0.02em" }}
          >
            Send us a Message
          </h2>

          <p
            className="text-base"
            style={{ color: colors.carbonBlack, opacity: 0.7 }}
          >
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-sm" style={{ color: colors.carbonBlack }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl"
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                }}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-sm" style={{ color: colors.carbonBlack }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl"
                style={{
                  background: colors.ghostWhite,
                  border: `2px solid ${colors.alabasterGrey}`,
                }}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-semibold text-sm" style={{ color: colors.carbonBlack }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="How can we help you?"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl"
              style={{
                background: colors.ghostWhite,
                border: `2px solid ${colors.alabasterGrey}`,
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold text-sm" style={{ color: colors.carbonBlack }}>
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl resize-none"
              style={{
                background: colors.ghostWhite,
                border: `2px solid ${colors.alabasterGrey}`,
              }}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || loading}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            style={{
              background: colors.carbonBlack,
              color: colors.ghostWhite,
              opacity: !isValid || loading ? 0.5 : 1,
              cursor: !isValid || loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
