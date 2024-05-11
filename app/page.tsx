import React from "react";
import HeroSection from "./mainhome/HeroSection";
import About from "./mainhome/About";
import Service from "./mainhome/Service";
import Clock from "./mainhome/Clock";

function page() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto p-5 py-5">
        <About />
        <Service />
      </div>
      <Clock />
    </div>
  );
}

export default page;
