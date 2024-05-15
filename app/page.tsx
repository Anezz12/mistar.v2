import React from "react";
import HeroSection from "./mainhome/HeroSection";
import About from "./mainhome/About";
import Service from "./mainhome/Service";
import Clock from "./mainhome/Clock";
import Skills from "./mainhome/Skills";
import Contact from "./mainhome/Contact";

function page() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto p-5 py-10">
        <About />
        <Skills />
      </div>
      <Clock />
      <div className="max-w-7xl mx-auto p-5 ">
        <Service />
        <Contact />
      </div>
    </div>
  );
}

export default page;
