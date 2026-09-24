import React from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Testimonial from "../testimonial/Testimonial";
import CTA from "../cta/Cta";
import Footer from "../footer/Footer";

const LandingScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingScreen;
