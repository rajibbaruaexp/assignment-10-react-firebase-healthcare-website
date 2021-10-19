import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="relative  bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="about-us-hero absolute top-0 w-full h-full bg-center bg-cover"></div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">About Us</h1>
                <p className="mt-4 text-lg text-white">
                  Digital Diagnostic Center is committed to render the possible
                  standard service to the people of the country at an affordable
                  cost. This will definitely reduce the burden of the government
                  and will make the path of "Health for all".
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className=" pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Our Goal</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    To establish a referral Diagnostic and Medical Services
                    Centre. To establish a referral Diagnostic and Medical
                    Services Centre.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Our Objective</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    To render the world standard diagnostic service to the
                    people of the country at an affordable cost and in turn to
                    limit the outflow of the patient abroad at the expense of
                    heard earn foreign currency by providing quality diagnostic
                    services.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Transparance</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Out door basis treatment by renowned General Practitioners,
                    Consultants and Professors in different medical fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10 bg-blueGray-200 -mt-24 overflowabout m-0">
        <div className="container mx-auto px-4">
          <div className="justify-center	flex flex-wrap">
            <h2 className="text-4xl mb-4">Who We Are </h2>
            <p>
              Digital Diagnostic Centre Ltd. is an advanced Centre for
              diagnostic and medical services. It is one of the prestigious
              diagnostic complexes of Bangladesh which started its activities in
              1983. Popular Diagnostic Centre Ltd. is the largest diagnostic
              services provider organization in private sector of the country.
              It is been pioneer in introducing world latest medical equipments
              and advanced technology to provide round the clock medical
              investigations and consultancy services. LEGAL STATUS Popular
              Diagnostic Centre Ltd. is a private limited company registered
              with the Ministry of Health & Family Welfare, People’s Republic
              Govt. of Bangladesh having License No. 1275 &688.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
