import React, { useState } from "react";
import "./ServicesScreen.css"; // Ensure this matches the name and path of your CSS file

const pageData = {
  hero: {
    badge: "What We Do",
    headline: "High-performance services tailored to your scale.",
    subheadline:
      "We design, deploy, and maintain custom digital infrastructure so your team can focus exclusively on ship dates and growth metrics.",
  },
  services: [
    {
      icon: "⚡",
      title: "Cloud Infrastructure",
      description:
        "Automated AWS and GCP cluster scaling, zero-downtime migrations, and edge routing designed for ultra-low latency.",
    },
    {
      icon: "🎨",
      title: "UI/UX Engineering",
      description:
        "High-fidelity prototypes built natively in React and Next.js, prioritizing semantic structural layouts and perfect accessibility.",
    },
    {
      icon: "🔒",
      title: "Security Auditing",
      description:
        "End-to-end vulnerability scanning, automated penetration testing, and absolute compliance alignment protocols.",
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description:
        "Database indexing tweaks, image pipeline compression, and asset bundle trimming to pull your Core Web Vitals into green.",
    },
    {
      icon: "📱",
      title: "Cross-Platform Mobile",
      description:
        "Native-quality iOS and Android applications written from a single robust React Native or Flutter codebase.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description:
        "Pipeline connectivity with modern LLM workflows, custom embedding engines, and internal data analysis loops.",
    },
  ],
  faqs: [
    {
      question: "How long does a typical migration project take?",
      answer:
        "Most architecture and infrastructure setups are finished within 2 to 4 weeks, depending on system complexity.",
    },
    {
      question: "Do you offer post-launch emergency support?",
      answer:
        "Yes, our engineering teams provide complete SLA-backed 24/7 technical monitoring solutions for enterprise accounts.",
    },
    {
      question: "Can you work within our pre-existing codebase?",
      answer:
        "Absolutely. We adapt cleanly to your established Git workflows, lint rules, and architectural guidelines.",
    },
  ],
};

const ServicesScreen = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-container">
      {/* 1. HERO SECTION */}
      <section className="services-hero">
        <span className="services-badge">{pageData.hero.badge}</span>
        <h1 className="services-headline">{pageData.hero.headline}</h1>
        <p className="services-subheadline">{pageData.hero.subheadline}</p>
      </section>

      {/* 2. SERVICES CARD GRID */}
      <section className="services-grid-section">
        <div className="services-grid">
          {pageData.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE BENEFITS SPLIT BANNER */}
      <section className="benefits-banner">
        <div className="banner-inner">
          <div className="banner-left">
            <h2>Engineered for exceptional standards.</h2>
            <p>
              We build without cutting corners. Every layer of our codebase is
              tailored to support strict traffic spikes without performance
              regressions.
            </p>
          </div>
          <div className="banner-right">
            <div className="benefit-item">
              <strong>99.99%</strong> System Availability Guarantee
            </div>
            <div className="benefit-item">
              <strong>100%</strong> Documented Internal Architecture
            </div>
            <div className="benefit-item">
              <strong>4x</strong> Acceleration on Deployment Speed
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our workflow and processes.</p>
        </div>

        <div className="faq-list">
          {pageData.faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFaq === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle-icon">
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
