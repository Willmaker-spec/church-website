import React from "react";
import "./AboutScreen.css";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";

const AboutScreen = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <span className="badge">Our Story</span>
        <h1 className="headline">
          We&apos;re on a mission to simplify how teams build for the web.
        </h1>
        <p className="subheadline">
          We build intuitive tools that eliminate friction, speed up workflows,
          and help developers launch projects with total confidence.
        </p>
      </section>

      <section className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Uptime SLA</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Global Support</span>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-header">
          <h2>What Drives Us</h2>
          <p>The core principles behind everything we engineer.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3 className="value-title">Built for Simplicity</h3>
            <p className="value-desc">
              We hate bloatware. Every feature we ship is intentionally designed
              to be clean, fast, and easy to use.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🔒</div>
            <h3 className="value-title">Security by Default</h3>
            <p className="value-desc">
              Your data and peace of mind are our top priorities. We employ
              industry-leading encryption protocols.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3 className="value-title">Community Driven</h3>
            <p className="value-desc">
              We don&apos;t build in a vacuum. Our roadmap is constantly shaped
              by feedback from builders like you.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <div className="section-header">
            <h2>Meet the Minds Behind the Screen</h2>
            <p>
              We are a remote-first team of developers, designers, and problem
              solvers.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member group">
              <div className="avatar-frame">
                <img src={user1} alt="Alex Rivera" className="avatar-img" />
              </div>
              <h3 className="member-name">Alex Rivera</h3>
              <p className="member-role">Co-Founder &amp; CEO</p>
            </div>

            <div className="team-member group">
              <div className="avatar-frame">
                <img src={user2} alt="Marcus Chen" className="avatar-img" />
              </div>
              <h3 className="member-name">Marcus Chen</h3>
              <p className="member-role">Head of Engineering</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Ready to upgrade your workflow?</h2>
          <p className="cta-desc">
            Join thousands of developers launching projects faster and more
            reliably. Sign up for a free account today.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
