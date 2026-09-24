import React, { useState } from "react";
import "./ContactUsScreen.css"; // Ensure this matches the name and path of your CSS file

const contactInfo = {
  title: "Get in touch",
  description:
    "Have questions about features, pricing, or custom builds? Drop us a line and our engineering team will get right back to you.",
  details: [
    { icon: "📍", text: "123 Innovation Way, Suite 400, San Francisco, CA" },
    { icon: "✉️", text: "support@yourdomain.com" },
    { icon: "📞", text: "+1 (555) 019-2834" },
  ],
  socials: [
    { name: "Twitter", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
  ],
};

const ContactUsScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    alert(
      `Thanks for reaching out, ${formData.firstName}! We will reply soon.`,
    );
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-card-wrapper">
        {/* LEFT COLUMN: INFO */}
        <div className="info-panel">
          <div>
            <h1 className="info-title">{contactInfo.title}</h1>
            <p className="info-desc">{contactInfo.description}</p>

            <div className="info-list">
              {contactInfo.details.map((item, index) => (
                <div key={index} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="socials-wrapper">
            <span className="socials-label">Follow our updates:</span>
            <div className="socials-links">
              {contactInfo.socials.map((social, index) => (
                <a key={index} href={social.url} className="social-link">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM */}
        <div className="form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsScreen;
