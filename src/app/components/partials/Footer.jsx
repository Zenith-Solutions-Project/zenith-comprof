import { Image } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import logoFooter from "../../../assets/logo/ZS2.png";
import "./footer.css";

const Footer = () => {
  const IconCard = ({ icon: Icon, link, platform }) => {
    return (
      <a href={link} className={`icon-card ${platform}`}>
        <div className="icon">
          <Icon size={20} />
        </div>
      </a>
    );
  };
  return (
    <>
      <footer className="bg-black text-center text-lg-start justify-content-center d-flex">
        <div className="container-fluid p-4">
          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex align-items-center gap-4 text-white">
                  <Image
                    src={logoFooter}
                    style={{ width: "50px" }}
                    className="py-3"
                  />
                  <p className="fs-1 mt-3 text-white"> Zenith Solutions</p>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, debitis sit hic esse nulla ipsum deleniti cum,
                  veritatis inventore voluptate molestias ex magnam, deserunt
                  earum aperiam omnis? Earum tempore laboriosam distinctio ut
                  aspernatur, veritatis cupiditate vitae quae autem sapiente
                  reprehenderit culpa assumenda ab? Laudantium tenetur vitae,
                  debitis culpa laborum eveniet.
                </p>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="icon-container">
                        <IconCard
                          icon={FaYoutube}
                          link="#"
                          platform="youtube"
                        />
                        <IconCard
                          icon={FaInstagram}
                          link="#"
                          platform="instagram"
                        />
                        <IconCard icon={FaTiktok} link="#" platform="tiktok" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    className="text-white"
                    style={{ alignSelf: "center", marginTop: "27px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores accusamus voluptate eligendi, nihil iure autem
                    officia animi vel. Facere magnam ullam rem cupiditate enim?
                    Ipsum architecto esse, nobis deleniti molestias animi
                    voluptatem nihil enim aliquam tempore labore magni, numquam
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center text-white">
              @ 2024 Copyright
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
