import { Image, Container, Row, Col } from "react-bootstrap";
import Zenith from "../../../assets/logo/zsnew.png";
import logoFooter from "../../../assets/logo/ZS2.png";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const footerIcons = [
    {
      path: "https://www.instagram.com/zelution.inc/",
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
    {
      path: "/",
      icons: <FaWhatsapp />,
    },
  ];
  return (
    <>
      <footer className="bg-black rounded-top-4">
        <Container>
          <Row className="p-3">
            <Col lg={4} xs={12} className="mb-3">
            <div className="text-white d-flex justify-content-center ">
    <div className="text-center">
        <Image src={Zenith} style={{ width: "80px" }} />
        <h4 className="mt-2">Zenith Solutions</h4>
    </div>
</div>
            </Col>
            <Col lg={4} xs={12} className="mb-4">
              <h4 className="text-white text-center text-lg-start">Social Media</h4>
              <div className="d-flex justify-content-center justify-content-lg-start gap-2">
                {footerIcons.map((icon, index) => (
                  <div key={index}>
                    <a href={icon.path} target="_blank">
                      <span className="text-white fs-3 ">{icon.icons}</span>
                    </a>
                  </div>
                ))}
              </div>
            </Col>

            <Col>
              <div className="text-white text-center text-lg-start">
                <h4 className="text-center text-lg-start">Alamat</h4>
                <p>KO Arzelia Garden C4/7,Daru, Jambe, Kab. Tangerang Banten</p>
              </div>
            </Col>
          </Row>
          <Row>
          <hr className="" style={{ backgroundColor: 'white', height: '1px', border: 'none' }} />
            <p className="text-center text-white">Copyright © 2024 • Zenith • All rights reserved</p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
