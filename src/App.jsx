import React from "react";
import LandingScreen from "./components/screens/LandingScreen";
import { Route, Routes } from "react-router-dom";
import ContactUsScreen from "./components/screens/contactusScreen";
import AboutScreen from "./components/screens/AboutScreen";
import ServicesScreen from "./components/screens/ServicesScreen";

import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/contact-us" element={<ContactUsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
      </Routes>
    </div>
  );
};

export default App;
