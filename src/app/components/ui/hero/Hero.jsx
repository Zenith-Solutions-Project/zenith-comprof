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
      <Row className="d-flex align-items-center vh-100">
        <Col xs={12} lg={6} md={6}>
          <div>
            <h1 className="text-dark display-1 fw-bold">
              Where Design Meets Innovation!
            </h1>
            <p>
              Whether you're a startup looking to establish your brand identity
              or an established business aiming to refresh your image, we've got
              the creative firepower to make it happen. LET’S TALK
            </p>
            <ButtonCustom className="btn-outline-dark" onClick={handleClick}>
              Lets Talk!
            </ButtonCustom>
          </div>
        </Col>
        <Col>
          <Image src={HeroImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
