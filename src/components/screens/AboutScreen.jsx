import React from "react";
import "./AboutScreen.css"; // Ensure this matches the name and path of your CSS file

const pageData = {
  hero: {
    badge: "Our Story",
    headline: "We're on a mission to simplify how teams build for the web.",
    subheadline:
      "We build intuitive tools that eliminate friction, speed up workflows, and help developers launch projects with total confidence.",
  },
  stats: [
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Global Support" },
  ],
  values: [
    {
      icon: "💡",
      title: "Built for Simplicity",
      description:
        "We hate bloatware. Every feature we ship is intentionally designed to be clean, fast, and easy to use.",
    },
    {
      icon: "🔒",
      title: "Security by Default",
      description:
        "Your data and peace of mind are our top priorities. We employ industry-leading encryption protocols.",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description:
        "We don't build in a vacuum. Our roadmap is constantly shaped by feedback from builders like you.",
    },
  ],
  team: [
    {
      name: "Alex Rivera",
      role: "Co-Founder & CEO",
      image: "https://unsplash.com",
    },
    {
      name: "Marcus Chen",
      role: "Head of Engineering",
      image: "https://unsplash.com",
    },
  ],
};

const AboutScreen = () => {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <span className="badge">{pageData.hero.badge}</span>
        <h1 className="headline">{pageData.hero.headline}</h1>
        <p className="subheadline">{pageData.hero.subheadline}</p>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stats-grid">
          {pageData.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <div className="section-header">
          <h2>What Drives Us</h2>
          <p>The core principles behind everything we engineer.</p>
        </div>

        <div className="values-grid">
          {pageData.values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE TEAM */}
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
            {pageData.team.map((member, index) => (
              <div key={index} className="team-member group">
                <div className="avatar-frame">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="avatar-img"
                  />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
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
