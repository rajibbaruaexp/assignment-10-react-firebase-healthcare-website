import React from "react";
import CovidKit from "../../../../images/covid-test-kit.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-area-wrapper h-screen bg-center bg-cover flex items-center p-5">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="hero-description  text-left">
              <span className="bg-red-600 text-white p-1 rounded text-sm">
                COVID -19 TEST
              </span>
              <h1 className="text-5xl p-10 pl-0">
                Test your covid-19 symptom with care
              </h1>
              <p className="pb-5">
                Coronavirus disease (COVID-19) is an infectious disease caused
                by the SARS-CoV-2 virus. Most people who fall sick with COVID-19
                will experience mild to moderate symptoms and recover without
                special treatment
              </p>
              <button className="hover:bg-red-600 transition-all bg-blue-500 text-white	p-5 rounded pt-3 pb-3 mt-5 ">
                Find Out More
              </button>
            </div>
            <div className="covid-test-kit">
              <img src={CovidKit} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
