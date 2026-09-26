import React, { useState } from "react";
import "./ServicesScreen.css";

const ServicesScreen = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-container">
      <section className="services-hero">
        <span className="services-badge">What We Do</span>
        <h1 className="services-headline">
          High-performance services tailored to your scale.
        </h1>
        <p className="services-subheadline">
          We design, deploy, and maintain custom digital infrastructure so your
          team can focus exclusively on ship dates and growth metrics.
        </p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-box">⚡</div>
            <h3 className="service-title">Cloud Infrastructure</h3>
            <p className="service-desc">
              Automated AWS and GCP cluster scaling, zero-downtime migrations,
              and edge routing designed for ultra-low latency.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon-box">🎨</div>
            <h3 className="service-title">UI/UX Engineering</h3>
            <p className="service-desc">
              High-fidelity prototypes built natively in React and Next.js,
              prioritizing semantic structural layouts and perfect
              accessibility.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon-box">🔒</div>
            <h3 className="service-title">Security Auditing</h3>
            <p className="service-desc">
              End-to-end vulnerability scanning, automated penetration testing,
              and absolute compliance alignment protocols.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon-box">📈</div>
            <h3 className="service-title">Performance Optimization</h3>
            <p className="service-desc">
              Database indexing tweaks, image pipeline compression, and asset
              bundle trimming to pull your Core Web Vitals into green.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon-box">📱</div>
            <h3 className="service-title">Cross-Platform Mobile</h3>
            <p className="service-desc">
              Native-quality iOS and Android applications written from a single
              robust React Native or Flutter codebase.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon-box">🤖</div>
            <h3 className="service-title">AI Integration</h3>
            <p className="service-desc">
              Pipeline connectivity with modern LLM workflows, custom embedding
              engines, and internal data analysis loops.
            </p>
          </div>
        </div>
      </section>

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

      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our workflow and processes.</p>
        </div>

        <div className="faq-list">
          <div
            className={`faq-item ${openFaq === 0 ? "active" : ""}`}
            onClick={() => toggleFaq(0)}
          >
            <div className="faq-question">
              <h3>How long does a typical migration project take?</h3>
              <span className="faq-toggle-icon">
                {openFaq === 0 ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>
                Most architecture and infrastructure setups are finished within
                2 to 4 weeks, depending on system complexity.
              </p>
            </div>
          </div>

          <div
            className={`faq-item ${openFaq === 1 ? "active" : ""}`}
            onClick={() => toggleFaq(1)}
          >
            <div className="faq-question">
              <h3>Do you offer post-launch emergency support?</h3>
              <span className="faq-toggle-icon">
                {openFaq === 1 ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>
                Yes, our engineering teams provide complete SLA-backed 24/7
                technical monitoring solutions for enterprise accounts.
              </p>
            </div>
          </div>

          <div
            className={`faq-item ${openFaq === 2 ? "active" : ""}`}
            onClick={() => toggleFaq(2)}
          >
            <div className="faq-question">
              <h3>Can you work within our pre-existing codebase?</h3>
              <span className="faq-toggle-icon">
                {openFaq === 2 ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>
                Absolutely. We adapt cleanly to your established Git workflows,
                lint rules, and architectural guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
