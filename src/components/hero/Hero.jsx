import React from "react";
import "./Hero.css";
import "../screens/RegisterScreen";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {" "}
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to My Web Page</h1>
            <p>
              Learn FullStack Devlopment, UI/UX, Graphics Design and many more
              tech careers.
            </p>
            <Link to="/register">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
