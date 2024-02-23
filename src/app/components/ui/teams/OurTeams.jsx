import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Teams1 from "../../../../assets/teams/daniel-lincoln-NR705beN_CU-unsplash.jpg";
import "./teams.css";
const OurTeams = () => {
  const teams = [
    {
      name: "Gilang",
      role1: "UI/UX Designer |",
      role2: " Frontend Developer",
      image: Teams1,
      github: "https://github.com/example1",
      linkedin: "https://linkedin.com/in/example1",
    },
    {
      name: "Singgih Septian",
      role1: "Frontend Developer",
      image: Teams1,
      github: "https://github.com/example1",
      linkedin: "https://linkedin.com/in/example1",
    },
    {
      name: "Bang Risky",
      role1: "Frontend Developer",
      image: Teams1,
      github: "https://github.com/example1",
      linkedin: "https://linkedin.com/in/example1",
    },
    {
      name: "Adib Alfaini",
      role1: "Backend Developer",
      image: Teams1,
      github: "https://github.com/example1",
      linkedin: "https://linkedin.com/in/example1",
    },
    {
      name: "Ana Marimas",
      role1: "Back End Developer",
      image: Teams1,
      github: "https://github.com/example1",
      linkedin: "https://linkedin.com/in/example1",
    },
  ];
  const imageStyle = {
    filter: "grayscale(100%)",
    height: "200px",
    width: "150px",
  };

  return (
    <Container>
      <Row className="d-flex align-items-center vh-100">
        <Col lg={3}>
          <h3>Our Teams</h3>
        </Col>
        <Col>
          <div className="d-flex flex-wrap gap-4 mt-5">
            {teams.map((teamMember, index) => (
              <Card key={index} className="border-0 d-flex flex-column align-items-center">
                <Image src={teamMember.image} style={imageStyle} className="mt-3 img-style" />
                <Card.Body className="text-center align-items-center">
                  <Card.Title>{teamMember.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted ">{teamMember.role1}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted ">{teamMember.role2}</Card.Subtitle>
                  <Card.Text>
                    <FaGithubSquare size={30} />
                    <a href={teamMember.github} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} />
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurTeams;
