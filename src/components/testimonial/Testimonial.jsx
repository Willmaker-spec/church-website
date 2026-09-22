import React from "react";
import "./Testimonial.css";
import cardimg from "../../assets/sunset.jpg";

const Testimonial = () => {
  return (
    <div>
      {/* <!-- Testimony Section --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Students</h2>
        <div className="testimonials-container">
          <div className="card">
            <img src={cardimg} alt="sunset" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely changed my Career. I learnt a lot of
              things that changed my life
            </p>
          </div>
          <div className="card">
            <img src={cardimg} alt="sunset" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely changed my Career. I learnt a lot of
              things that changed my life
            </p>
          </div>
          <div className="card">
            <img src={cardimg} alt="sunset" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely changed my Career. I learnt a lot of
              things that changed my life
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
