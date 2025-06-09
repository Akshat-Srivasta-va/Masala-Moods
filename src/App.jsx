import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainItem from "./components/MainItem/MainItem";
import Course from "./components/Course/Course";
import Street from "./components/Street/Street";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer"


const App = () => {
  return <div className="overflow-x-hidden bg-#fffbf2 text-black">
    <div className="relative overflow-hidden">
  <Navbar />
    <Hero />
    </div>
      <MainItem />
      <Course />
      <Street />
      <Testimonial />
      <Footer />
  </div>
};

export default App;
