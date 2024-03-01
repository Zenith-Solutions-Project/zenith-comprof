import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Projects from "../../../../assets/projects/projects.jpg";
import ButtonCustom from "../../elements/Button";
const Portofolio = () => {
  const portfolioItems = [
    {
      title: "Landing Pages",
      description: "Some description for the first item.",
      image: Projects,
    },
    {
      title: "Landing Pages",
      description: "Some description for the first item.",
      image: Projects,
    },
    {
      title: "Landing Pages",
      description: "Some description for the first item.",
      image: Projects,
    },
    {
      title: "Landing Pages",
      description: "Some description for the first item.",
      image: Projects,
    },
    {
      title: "Landing Pages",
      description: "Some description for the first item.",
      image: Projects,
    },
    // Add more portfolio items as needed
  ];
  const handleClick = () => {
    alert("WKWKWKWKWKWKWK BERAK");
  };
  return (
    <div className="bg-black">
      <Container>
        <Row className="d-flex align-items-center py-5">
          <Col>
            <div className="d-flex gap-5 justify-content-center">
              <h6 className="text-white mt-2">Our Portofolio</h6>
              <p className=" text-white fw-bold fs-5 w-75">Our Portfolio We envision a world where every idea, product, or service is brought to life through exceptional design.</p>
            </div>
          </Col>

          {portfolioItems.map((item, index) => (
            <Col key={index} md={4} className="mb-2">
              <Card className="border" style={{ backgroundColor: "transparent" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <div className="d-flex gap-1 text-light mb-3">
                    <Card.Title>{item.title}</Card.Title>
                    <span>-</span>
                    <Card.Text>{item.description}</Card.Text>
                  </div>
                  <ButtonCustom className="btn-outline-light" onClick={handleClick}>
                    Launch Site
                  </ButtonCustom>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portofolio;
