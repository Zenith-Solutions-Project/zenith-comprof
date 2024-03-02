import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonCustom from "../elements/Button";
import Image from "react-bootstrap/Image";

import Zenith from "../../../assets/logo/zs.png";
import { NavbarBrand } from "react-bootstrap";
function NavigationBar() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/teams", text: "Teams" },
    { to: "/services", text: "Services" },
    { to: "/portofolio", text: "Portofolio" },
  ];
  const handleClick = () => {
    alert("awowkwokwowko tolol");
  };
  const imageStyle = {
    width: "40px",

    display: "inline-block",
  };
  return (
    <Navbar expand="lg" className="bg-white border-bottom shadow-sm sticky-top">
      <Container>
        <Link
          to="/"
          className="navbar-brand text-uppercase fw-bold fs-1 d-flex gap-3 align-items-center"
          style={{ letterSpacing: "2px" }}>
          {/* <Image src={Zenith} style={imageStyle} fluid /> */}
          <NavbarBrand className="fs-1">ZENITH</NavbarBrand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className="nav-link">
                {link.text}
              </Link>
            ))}
          </Nav>
          <ButtonCustom
            className="btn-outline-dark rounded-3"
            onClick={handleClick}>
            Contact Us
          </ButtonCustom>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
