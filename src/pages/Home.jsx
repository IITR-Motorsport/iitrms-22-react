import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="text-white text-[16px] bg-dark-color">
      <div className="header">
        <Navbar />
      </div>
      <div className="recent-events"></div>
      <div className="achievements"></div>
      <div className="our-cars">
        <h1>OUR CARS</h1>
        <div className="flex">
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="our-proud-sponsors"></div>
      <Footer />
    </div>
  );
};

export default Home;
