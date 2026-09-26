import React, { useState } from "react";
import "./ContactUsScreen.css";

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
    alert(
      `Thanks for reaching out, ${formData.firstName}! We will reply soon.`,
    );
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-card-wrapper">
        <div className="info-panel">
          <div>
            <h1 className="info-title">Get in touch</h1>
            <p className="info-desc">
              Have questions about features, pricing, or custom builds? Drop us
              a line and our engineering team will get right back to you.
            </p>

            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span className="info-text">
                  123 Innovation Way, Suite 400, San Francisco, CA
                </span>
              </div>

              <div className="info-item">
                <span className="info-icon">✉️</span>
                <span className="info-text">support@yourdomain.com</span>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <span className="info-text">+1 (555) 019-2834</span>
              </div>
            </div>
          </div>

          <div className="socials-wrapper">
            <span className="socials-label">Follow our updates:</span>
            <div className="socials-links">
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

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
