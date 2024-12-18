import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Teams1 from "../../../../assets/teams/gilang.jpg";
import Teams3 from "../../../../assets/teams/rizqi.jpg";
import Teams2 from "../../../../assets/teams/dib.jpeg";
import Teams4 from "../../../../assets/teams/singgih.jpeg";
import Teams5 from "../../../../assets/teams/ana.jpeg";
import Teams6 from "../../../../assets/teams/mandela.jpeg";
import Teams7 from "../../../../assets/teams/rindia.jpeg";

import "./teams.css";
const OurTeams = () => {
  const teams = [
    {
      name: "Gilang Aditia",
      role1: "UI/UX | Front End Developer",
      image: Teams1,
      github: " https://github.com/gilang-aditia",
      linkedin: "https://www.linkedin.com/in/gilang-aditia-b79461231/",
    },
    {
      name: "Singgih Septian",
      role1: "Front End Developer",
      image: Teams4,
      github: "https://github.com/singgihseptiann",
      linkedin: "linkedin.com/in/singgihseptian",
    },
    {
      name: "Rizqi Ramadhanianto",
      role1: "Front End Developer",
      image: Teams3,
      github: "https://github.com/ramarizqiunstopable",
      linkedin: "https://www.linkedin.com/in/rizqi-ramadhanianto-b09558a8/",
    },
    {
      name: "Adib Alfaini Afifi",
      role1: "Back End Developer",
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
    {
      name: "Denna Mandela Putra",
      role1: "DevOps Engineer",
      image: Teams6,
      github: "https://github.com/dennamandela",
      linkedin: "https://www.linkedin.com/in/dennamandela/",
    },
    {
      name: "Rindia Aulia Rahma",
      role1: "Content Planner | Digital Marketer",
      image: Teams7,
      github: "#",
      linkedin: "https://www.linkedin.com/in/rindiaaulia/",
    },
  ];

  const imageStyle = {
    filter: "grayscale(100%)",
    height: "200px",
    width: "175px",
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h3 className="text-center text-dark">Our Expert Teams</h3>
          <h5 className="text-secondary text-center">
            Top-notch Web Developers!
          </h5>
          <div className="d-flex flex-wrap mt-1">
            {teams.map((teamMember, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <Card className="border-0 align-items-center">
                  <Image
                    src={teamMember.image}
                    style={imageStyle}
                    className="mt-3 img-style text-center"
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
                        <FaGithubSquare
                          className="rounded-5"
                          size={30}
                          color="black"
                        />
                      </a>
                      <a
                        href={teamMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          className="rounded-5"
                          size={30}
                          color="black"
                        />
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurTeams;
