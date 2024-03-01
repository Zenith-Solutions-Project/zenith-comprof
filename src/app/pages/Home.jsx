import React from "react";
import Hero from "../components/ui/hero/Hero";
import OurServices from "../components/ui/ourservice/OurServices";
import OurTeams from "../components/ui/teams/OurTeams";
import Portofolio from "../components/ui/portofolio/Portofolio";
import SliderPorto from "./SliderPorto"
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <OurServices />
        <OurTeams />
     
        <SliderPorto />
      </div>
    </>
  );
};

export default Home;
