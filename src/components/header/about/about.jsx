import React from "react";
import "./About.css";
import aboutimg from "../../../assets/marek-studzinski-8T8QTMRZmEg-unsplash.jpg";
const about = () => {
  return (
    <div>
      {/* <!-- About Section --> */}
      <section className="about">
        <div className="about-text">
          <h3>ABOUT US</h3>
          <h2>
            Building Skills, <br />
            Building Future
          </h2>
          <p>
            At Morning className digital academy, we offer a wide range of
            courses in web development, UI/UX design, graphics design, and many
            more tech careers. Our experienced instructors are dedicated to
            helping students achieve their goals and succeed in the tech
            industry.
          </p>
          <ul>
            <li>&#10004; Web Development</li>
            <li>&#10004; UI/UX Design</li>
            <li>&#10004; Graphics Design</li>
            <li>&#10004; Digital Marketing</li>
          </ul>
          <a href="about.html" className="btn">
            Learn More
          </a>
        </div>
        <div>
          <img src={aboutimg} alt="About Us" width="200px" />
        </div>
      </section>
    </div>
  );
};

export default about;
