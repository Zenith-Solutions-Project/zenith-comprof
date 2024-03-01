import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Teams1 from "../../../../assets/teams/gilang.jpg";
import Teams3 from "../../../../assets/teams/rizqi.jpg";
import Teams2 from "../../../../assets/teams/dib.jpeg";
import Teams4 from "../../../../assets/teams/singgih.jpeg";
import Teams5 from "../../../../assets/teams/ana.jpeg";

import "./teams.css";
const OurTeams = () => {
  const teams = [
    {
      name: "Gilang Aditia",
      role1: "UI/UX Designer |",
      role2: " Frontend Developer",
      image: Teams1,
      github: " https://github.com/gilang-aditia",
      linkedin: "https://www.linkedin.com/in/gilang-aditia-b79461231/",
    },
    {
      name: "Singgih Septian",
      role1: "Frontend Developer",
      image: Teams4,
      github: "https://github.com/singgihseptiann",
      linkedin: "linkedin.com/in/singgihseptian",
    },
    {
      name: "Rizqi Ramadhani",
      role1: "Frontend Developer",
      image: Teams3,
      github: "https://github.com/ramarizqiunstopable",
      linkedin: "https://www.linkedin.com/in/rizqi-ramadhanianto-b09558a8/",
    },
    {
      name: "Adib Alfaini Afifi",
      role1: "Backend Developer",
      image: Teams2,
      github: " https://github.com/alfalest",
      linkedin: "https://linkedin.com/in/adibalfaini",
    },
    {
      name: "Ana Marisa",
      role1: "Back End Developer",
      image: Teams5,
      github: "https://github.com/AnaMarisa",
      linkedin: "https://www.linkedin.com/in/ana-m-039135131/",
    },
  ];
  const imageStyle = {
    filter: "grayscale(100%)",
    height: "200px",
    width: "150px",
  };

  return (
    <Container>
      <Row className="d-flex align-items-center my-2">
        <Col lg={3}>
          <h3>Our Teams</h3>
        </Col>
        <Col>
          <div className="d-flex flex-wrap gap-4 mt-1">
            {teams.map((teamMember, index) => (
              <Card
                key={index}
                className="border-0 d-flex flex-column align-items-center"
              >
                <Image
                  src={teamMember.image}
                  style={imageStyle}
                  className="mt-3 img-style "
                />
                <Card.Body className="text-center align-items-center">
                  <Card.Title>{teamMember.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted ">
                    {teamMember.role1}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted ">
                    {teamMember.role2}
                  </Card.Subtitle>
                  <Card.Text>
                    <a
                      href={teamMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare size={30} />
                    </a>
                    <a
                      href={teamMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
