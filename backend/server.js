const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001;

// -------------------------------------------
// 🔥 EMAIL CREDENTIALS
// -------------------------------------------
const MAIL_USER = "boradpreet@gmail.com";
const MAIL_PASS = "ojey yjma pxhx krwm";
const ADMIN_EMAIL = "boradpreet@gmail.com";

// -------------------------------------------
// THEME COLORS
// -------------------------------------------
const colors = {
  carbonBlack: "#1C1C1C",
  alabasterGrey: "#DADDD8",
  softLinen: "#ECEBE4",
  platinum: "#EEF0F2",
  ghostWhite: "#FAFAFF",
};

// -------------------------------------------
// BRANDING
// -------------------------------------------
const LOGO_URL = "https://res.cloudinary.com/djh2ro9tm/image/upload/v1764413088/1001163459_2_ycbkvj.jpg";
const COMPANY_NAME = "Rivoogen";
const COMPANY_WEBSITE = "https://rivoogen.com";

app.use(cors());
app.use(express.json());

// -------------------------------------------
// 🔥 MAIL TRANSPORTER
// -------------------------------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

transporter.verify((error) => {
  console.log(error ? "❌ Mail Error" : "✅ Mail Transporter Ready");
});

// ========================================================================
// ⭐ EMAIL BASE TEMPLATE
// ========================================================================
const emailWrapper = (content) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${COMPANY_NAME}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: ${colors.ghostWhite};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${colors.ghostWhite}; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 2px solid ${colors.softLinen}; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: ${colors.carbonBlack}; padding: 30px 40px; text-align: center;">
              <img src="${LOGO_URL}" alt="${COMPANY_NAME}" style="height: 50px; width: auto; display: inline-block;">
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${colors.softLinen}; padding: 30px 40px; text-align: center; border-top: 2px solid ${colors.alabasterGrey};">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: ${colors.carbonBlack};">
                <strong>${COMPANY_NAME}</strong>
              </p>
              <p style="margin: 0 0 15px 0; font-size: 12px; color: ${colors.carbonBlack}; opacity: 0.7;">
                Digital Engineering • AI Solutions • Custom Software
              </p>
              <p style="margin: 0; font-size: 12px; color: ${colors.carbonBlack}; opacity: 0.6;">
                © ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ========================================================================
// ⭐ 1) CONTACT FORM — ADMIN TEMPLATE
// ========================================================================
const contactAdminTemplate = (name, email, subject, message) => emailWrapper(`
  <h2 style="margin: 0 0 20px 0; font-size: 24px; color: ${colors.carbonBlack}; font-weight: 700;">
    New Contact Form Submission
  </h2>
  
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
    <tr>
      <td style="padding: 15px; background-color: ${colors.ghostWhite}; border-left: 4px solid ${colors.carbonBlack};">
        <p style="margin: 0 0 8px 0; font-size: 14px; color: ${colors.carbonBlack};"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 8px 0; font-size: 14px; color: ${colors.carbonBlack};"><strong>Email:</strong> <a href="mailto:${email}" style="color: ${colors.carbonBlack};">${email}</a></p>
        <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack};"><strong>Subject:</strong> ${subject}</p>
      </td>
    </tr>
  </table>

  <div style="padding: 20px; background-color: ${colors.ghostWhite}; border-radius: 4px;">
    <p style="margin: 0 0 10px 0; font-size: 14px; color: ${colors.carbonBlack}; font-weight: 600;">Message:</p>
    <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack}; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
  </div>
`);

// ========================================================================
// ⭐ 2) CONTACT FORM — USER THANK YOU TEMPLATE
// ========================================================================
const contactUserTemplate = (name) => emailWrapper(`
  <h2 style="margin: 0 0 20px 0; font-size: 24px; color: ${colors.carbonBlack}; font-weight: 700;">
    Thank You, ${name}!
  </h2>
  
  <p style="margin: 0 0 20px 0; font-size: 16px; color: ${colors.carbonBlack}; line-height: 1.6;">
    We've received your message and appreciate you reaching out to us.
  </p>

  <div style="padding: 20px; background-color: ${colors.softLinen}; border-left: 4px solid ${colors.carbonBlack}; margin-bottom: 20px;">
    <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack}; line-height: 1.6;">
      Our team will review your inquiry and get back to you within 24-48 hours.
    </p>
  </div>

  <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack};">
    Best regards,<br>
    <strong>The ${COMPANY_NAME} Team</strong>
  </p>
`);

// ========================================================================
// ⭐ 3) ENQUIRY — ADMIN TEMPLATE
// ========================================================================
const enquiryAdminTemplate = (name, email, services, message) => emailWrapper(`
  <h2 style="margin: 0 0 20px 0; font-size: 24px; color: ${colors.carbonBlack}; font-weight: 700;">
    New Service Enquiry
  </h2>
  
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
    <tr>
      <td style="padding: 15px; background-color: ${colors.ghostWhite}; border-left: 4px solid ${colors.carbonBlack};">
        <p style="margin: 0 0 8px 0; font-size: 14px; color: ${colors.carbonBlack};"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack};"><strong>Email:</strong> <a href="mailto:${email}" style="color: ${colors.carbonBlack};">${email}</a></p>
      </td>
    </tr>
  </table>

  <div style="margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0; font-size: 14px; color: ${colors.carbonBlack}; font-weight: 600;">Services of Interest:</p>
    <div style="display: inline-block;">
      ${services.map(s => `
        <span style="display: inline-block; padding: 6px 12px; margin: 4px; background-color: ${colors.carbonBlack}; color: ${colors.ghostWhite}; font-size: 12px; border-radius: 4px; font-weight: 500;">
          ${s}
        </span>
      `).join('')}
    </div>
  </div>

  <div style="padding: 20px; background-color: ${colors.ghostWhite}; border-radius: 4px;">
    <p style="margin: 0 0 10px 0; font-size: 14px; color: ${colors.carbonBlack}; font-weight: 600;">Message:</p>
    <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack}; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
  </div>
`);

// ========================================================================
// ⭐ 4) ENQUIRY — USER THANK YOU TEMPLATE
// ========================================================================
const enquiryUserTemplate = (name, services) => emailWrapper(`
  <h2 style="margin: 0 0 20px 0; font-size: 24px; color: ${colors.carbonBlack}; font-weight: 700;">
    Thank You for Your Interest, ${name}!
  </h2>
  
  <p style="margin: 0 0 20px 0; font-size: 16px; color: ${colors.carbonBlack}; line-height: 1.6;">
    We've received your service enquiry and are excited to help you with your project.
  </p>

  <div style="margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0; font-size: 14px; color: ${colors.carbonBlack}; font-weight: 600;">You're interested in:</p>
    <div style="display: inline-block;">
      ${services.map(s => `
        <span style="display: inline-block; padding: 6px 12px; margin: 4px; background-color: ${colors.softLinen}; color: ${colors.carbonBlack}; font-size: 12px; border-radius: 4px; font-weight: 500;">
          ${s}
        </span>
      `).join('')}
    </div>
  </div>

  <div style="padding: 20px; background-color: ${colors.softLinen}; border-left: 4px solid ${colors.carbonBlack}; margin-bottom: 20px;">
    <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack}; line-height: 1.6;">
      Our team will review your requirements and reach out to you within 24-48 hours to discuss next steps.
    </p>
  </div>

  <p style="margin: 0; font-size: 14px; color: ${colors.carbonBlack};">
    Best regards,<br>
    <strong>The ${COMPANY_NAME} Team</strong>
  </p>
`);

// ========================================================================
// ⭐ ROUTE 1 — CONTACT PAGE FORM
// ========================================================================
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message)
      return res.status(400).json({ success: false, message: "All fields required" });

    // Admin Email
    await transporter.sendMail({
      from: `${COMPANY_NAME} <${MAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: contactAdminTemplate(name, email, subject, message),
    });

    // User Thank You Email
    await transporter.sendMail({
      from: `${COMPANY_NAME} <${MAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting ${COMPANY_NAME}`,
      html: contactUserTemplate(name),
    });

    res.json({ success: true, message: "Contact form sent successfully!" });
  } catch (err) {
    console.log("❌ Contact Error:", err);
    res.status(500).json({ success: false });
  }
});

// ========================================================================
// ⭐ ROUTE 2 — SERVICE ENQUIRY FORM
// ========================================================================
app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, email, services, message } = req.body;

    if (!name || !email || !services || !message)
      return res.status(400).json({ success: false, message: "All fields required" });

    // Admin Email
    await transporter.sendMail({
      from: `${COMPANY_NAME} <${MAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `Service Enquiry from ${name}`,
      html: enquiryAdminTemplate(name, email, services, message),
    });

    // User Thank You Email
    await transporter.sendMail({
      from: `${COMPANY_NAME} <${MAIL_USER}>`,
      to: email,
      subject: `We received your service enquiry - ${COMPANY_NAME}`,
      html: enquiryUserTemplate(name, services),
    });

    res.json({ success: true, message: "Enquiry sent successfully!" });
  } catch (err) {
    console.log("❌ Enquiry Error:", err);
    res.status(500).json({ success: false });
  }
});

// ========================================================================
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);