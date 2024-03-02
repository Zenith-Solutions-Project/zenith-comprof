import { Col, Container, Row, Card } from "react-bootstrap";
import ButtonCustom from "../../elements/Button";

const Portofolio = ({ title, description, image }) => {
  const handleClick = () => {
    alert("WKWKWKWKWKWKWK BERAK");
  };

  return (
    <Container>
      <Row className="d-flex gap-2 align-items-center pt-3 pb-5">
        {/* <Col>
            <div className="d-flex gap-5 justify-content-center">
              <h6 className="text-white mt-2">Our Portofolio</h6>
              <p className="text-white fw-bold fs-5 w-75">Our Portfolio We envision a world where every idea, product, or service is brought to life through exceptional design.</p>
            </div>
          </Col> */}
        <div className="ms-2">
          <Card className="border" style={{ backgroundColor: "transparent" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <div className="d-flex gap-1 text-light mb-3">
                <Card.Title className="text-black">{title}</Card.Title>
                <span>-</span>
                <Card.Text className="text-dark">{description}</Card.Text>
              </div>
              <ButtonCustom className="btn-outline-dark" onClick={handleClick}>
                Launch Site
              </ButtonCustom>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Portofolio;
