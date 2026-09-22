import React from "react";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import CTA from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

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
