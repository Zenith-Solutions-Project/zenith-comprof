import React from "react";
import Hero from "../components/ui/hero/Hero";
import OurServices from "../components/ui/ourservice/OurServices";
import OurTeams from "../components/ui/teams/OurTeams";
import Portofolio from "../components/ui/portofolio/Portofolio";
import SliderPorto from "./SliderPorto";
import ContactUS from "../components/ui/contacus/ContactUS";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <OurServices />
        <OurTeams />

        <SliderPorto />
        <ContactUS />
      </div>
    </>
  );
};

export default Home;
