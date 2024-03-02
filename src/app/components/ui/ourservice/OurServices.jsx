import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FaCode, FaServer } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import { BsFileEarmarkCode } from "react-icons/bs";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { TbSeo } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import "./services.css";
const OurServices = () => {
  const cardData = [
    { id: 1, title: "Development", icons: <BsFileEarmarkCode size={50} /> },
    { id: 2, title: "UI|UX Design", icons: <IoLogoDesignernews size={50} /> },
    { id: 3, title: "It Support", icons: <FaServer size={50} /> },
    {
      id: 4,
      title: "Graphic Design",
      icons: <HiOutlinePaintBrush size={50} />,
    },
    {
      id: 5,
      title: "Seach Engine Optimization",
      icons: <TbSeo size={50} />,
    },
    {
      id: 5,
      title: "Digital Marketing",
      icons: <SiGooglemarketingplatform size={50} />,
    },
  ];

  return (
    <div className="">
      <Container>
<<<<<<< HEAD
        <Row className=" d-flex align-items-center py-5">
          <Col lg={12}>
            <h3 className="text-center mb-5 text-dark">
              A complete package of digital services
            </h3>
=======
        <Row className="bg-black d-flex align-items-center py-5">
          <Col lg={2}>
            <h3 className="text-white mb-3">We Can Offer Many Solutions, Try Our Services</h3>
          </Col>
          <Col>
            {" "}
            <Accordion defaultActiveKey="0" flush className="bg-dark">
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>Visual Branding</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Web Development</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>UI/UX Design</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Web Development</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
>>>>>>> e9fa835b28b416e71a25235cd1952b726c878bdd
          </Col>
          {cardData.map((card) => (
            <Col lg={4} key={card.id}>
              <Card
                className="border-0 card-effect mb-3 "
                style={{ height: "200px" }}>
                <Card.Body className="d-flex align-items-center justify-content-center gap-2 ">
                  <span>{card.icons}</span>
                  <h1 className="shadow-effect">{card.title}</h1>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
