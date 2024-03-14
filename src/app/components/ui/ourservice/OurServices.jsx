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
    {
      id: 1,
      title: "Software Development",
      icons: <BsFileEarmarkCode size={50} />,
    },
    { id: 2, title: "UI/UX Design", icons: <IoLogoDesignernews size={50} /> },
    { id: 3, title: "IT Support", icons: <FaServer size={50} /> },
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
      id: 6,
      title: "Digital Marketing",
      icons: <SiGooglemarketingplatform size={50} />,
    },
  ];

  return (
    <div className="">
      <Container>
        <Row className=" d-flex align-items-center pt-1 pb-2">
          <Col lg={12}>
            <h3 className="text-center text-dark">Our Services</h3>
            <h5 className="text-secondary text-center">
              A complete package of digital services
            </h5>
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
