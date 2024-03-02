import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import HeroImage from "../../../../assets/hero/hero1.png";
import ButtonCustom from "../../elements/Button";
const Hero = () => {
  const handleClick = () => {
    // Menggunakan prompt untuk mendapatkan respons dari pengguna
    const userConfirmed = confirm("Apakah Anda Bisex?");

    // Menampilkan respons pengguna menggunakan alert
    if (userConfirmed !== null) {
      alert("YA SAYA BISEX");
    } else {
      alert("YA SAYA BISEX");
    }
  };
  return (
    <Container>
      <Row className="d-flex align-items-center py-5 my-5">
        <Col xs={12} lg={6} md={6}>
          <div>
            <h2 className="text-dark display-4 fw-bold">
              Your strategic partner for innovation and efficiency
            </h2>
            <p className="text-secondary fs-5">
              Harmonizing your digital journey with tailored apps and websites
              requires innovation, precision, and perfection.
            </p>
            <ButtonCustom className="btn-outline-dark" onClick={handleClick}>
              Lets Make a Deal!
            </ButtonCustom>
          </div>
        </Col>
        <Col className="mt-4">
          <Image src={HeroImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
