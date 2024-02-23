import React from "react";
import Hero from "../components/ui/hero/Hero";
import OurServices from "../components/ui/ourservice/OurServices";
import OurTeams from "../components/ui/teams/OurTeams";
import Portofolio from "../components/ui/portofolio/Portofolio";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <OurServices />
        <OurTeams />
        <Portofolio />
      </div>
    </>
  );
};

export default Home;
