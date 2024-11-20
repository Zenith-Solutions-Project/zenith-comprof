import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonCustom from "../elements/Button";
import Image from "react-bootstrap/Image";
import Zenith from "../../../assets/logo/zsnew.png";

function NavigationBar() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/teams", text: "Teams" },
    { to: "/services", text: "Services" },
    { to: "/portofolio", text: "Portofolio" },
  ];

  const handleWhatsAppClick = () => {
    const waNumber = "082298238070";
    const message = "Hello, I want to know more about your services!";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  const imageStyle = {
    width: "65px",
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white border-bottom shadow-sm sticky-top rounded-bottom-4"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-uppercase fw-bold fs-1 d-flex gap-3 align-items-center"
          style={{ letterSpacing: "2px" }}
        >
          <Image src={Zenith} style={imageStyle} alt="Zenith Logo" fluid />{" "}
          Zenith
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="nav-link text-decoration-none"
              >
                {link.text}
              </Link>
            ))}
          </Nav>
          <ButtonCustom
            className="btn-outline-dark rounded-3"
            onClick={handleWhatsAppClick}
          >
            Contact Us
          </ButtonCustom>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
