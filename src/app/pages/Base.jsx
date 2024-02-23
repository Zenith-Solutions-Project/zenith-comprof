import React from "react";
import NavigationBar from "../components/partials/NavigationBar";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router";
const Base = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Base;
