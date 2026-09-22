import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <div>
      {/* <!-- CALL TO ACTION --> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready To Start your Learning Journey?</h2>
          <p>
            Join us today and start learning Practical Digital Skills that can
            transform your future.
          </p>
          <a href="#" className="cta-button">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cta;
