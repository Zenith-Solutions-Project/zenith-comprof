import { Image, Container, Row, Col } from "react-bootstrap";

import logoFooter from "../../../assets/logo/ZS2.png";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
const Footer = () => {
  const footerIcons = [
    {
      path: "/",
      icons: <FaInstagram />,
    },
    {
      path: "/",
      icons: <FaTiktok />,
    },
    {
      path: "/",
      icons: <FaLinkedin />,
    },
  ];
  return (
    <>
      <footer className="bg-black">
        <Container>
          <Row>
            <Col lg={4} xs={12} className="mb-3">
              <div className="text-white text-center text-lg-start">
                <Image src={logoFooter} style={{ width: "50px" }} />
                <h1 className="">Zenith Solutions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga expedita vitae magnam voluptatibus. Vel.</p>
              </div>
            </Col>
            <Col lg={4} xs={12} className="mb-4">
              <h1 className="text-white text-center text-lg-start">Social Media</h1>
              <div className="d-flex justify-content-center justify-content-lg-start gap-2">
                {footerIcons.map((icon, index) => (
                  <div key={index}>
                    <a href={icon.path} target="_blank">
                      <span className="text-white fs-1">{icon.icons}</span>
                    </a>
                  </div>
                ))}
              </div>
            </Col>

            <Col>
              <div className="text-white text-center text-lg-start">
                <h1 className="text-center text-lg-start">Alamat</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro sunt harum.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
