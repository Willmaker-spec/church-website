import React from "react";
import cardimg from "./assets/sunset.jpg";

import Header from "./components/header/Header";
import Hero from "./components/header/hero/Hero";
import About from "./components/header/about/about";
import Testimonial from "./components/header/testimonial/testimonial";
import CTA from "./components/header/cta/CTA";
import Footer from "./components/header/footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
