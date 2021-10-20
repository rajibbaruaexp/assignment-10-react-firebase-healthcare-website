import React from "react";
import Services from "../Services/Services";
import EmailSub from "./Sections/EmailSub/EmailSub";
import Hero from "./Sections/Hero/Hero";
import Team from "./Sections/Team/Team";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <EmailSub></EmailSub>
      <Team></Team>
    </>
  );
};

export default Home;
