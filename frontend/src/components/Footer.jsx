import colors from "../theme/color";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: colors.carbonBlack }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1: Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://res.cloudinary.com/djh2ro9tm/image/upload/v1764413088/1001163459_2_ycbkvj.jpg"
              alt="Rivoogen Logo"
              className="w-12 h-12 object-contain"
            />
            <h2
              className="text-2xl font-bold"
              style={{ color: colors.ghostWhite }}
            >
              Rivoogen
            </h2>
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: colors.surfaceSoft }}
          >
            We build intelligent, secure, and scalable digital solutions using
            AI, automation, cloud, and modern engineering.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: colors.ghostWhite }}
          >
            Services
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              { label: "AI & Machine Learning", link: "/ai-ml" },
              { label: "Automation", link: "/automation-tools" },
              { label: "Web Development", link: "/web-services" },
              { label: "Custom Software", link: "/custom-software" },
              { label: "QA & Testing", link: "/qa-testing" },
              { label: "Cloud Services", link: "/cloud-services" },
              { label: "Support & Maintenance", link: "/support-maintenance" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="hover:underline cursor-pointer"
                  style={{ color: colors.surfaceSoft }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: colors.ghostWhite }}
          >
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", link: "/about-us" },
              { label: "Industries", link: "/industries" },
              { label: "Contact", link: "/contact-us" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="hover:underline cursor-pointer"
                  style={{ color: colors.surfaceSoft }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: colors.ghostWhite }}
          >
            Contact
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2" style={{ color: colors.surfaceSoft }}>
              <Mail size={18} /> rivoogen@gmail.com
            </li>

            <li className="flex items-start gap-2" style={{ color: colors.surfaceSoft }}>
              <Phone size={18} /> +91 79843 27489
            </li>

            <li className="flex items-start gap-2" style={{ color: colors.surfaceSoft }}>
              <MapPin size={18} /> Surat, India
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/rivoogen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={22}
                className="cursor-pointer hover:opacity-80 transition"
                style={{ color: colors.ghostWhite }}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/rivoogensolutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={22}
                className="cursor-pointer hover:opacity-80 transition"
                style={{ color: colors.ghostWhite }}
              />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="text-center text-sm mt-12 pt-6 border-t"
        style={{ color: colors.surfaceSoft, borderColor: colors.surfaceSoft }}
      >
        © {new Date().getFullYear()} Rivoogen. All rights reserved.
      </div>
    </footer>
  );
}
