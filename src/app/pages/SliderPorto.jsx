import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import Portofolio from "../components/ui/portofolio/Portofolio";
import Stay from "../../assets/projects/p1.png";
import movie from "../../assets/projects/movie.png";
import furniture from "../../assets/projects/myfurniture.png";
import boga from "../../assets/projects/boga.png";
import ssayomart from "../../assets/projects/ssayomart.png";
import jsf from "../../assets/projects/jsf.png";
import sipdesa from "../../assets/projects/sipdesa.png";
import cashier from "../../assets/projects/cashier.png";

const SliderPorto = () => {
  const portfolioItems = [

    {
      title: "Ssayomart E-Commerce",
      description:
        "Ssayomart is a web-based e-commerce application built with CodeIgniter 4 framework. The app integrates GoSend API for delivery, Midtrans API for secure payments",
      image: ssayomart,
      demo: "https://ssayomart.com/",
    },
    {
      title: "Sistem Integrasi Pelayanan Desa",
      description:
        "The village service system application or we also call it SIPDESA is a web-based application using the Code Igniter 4 framework, jQuery and MySQL for the database.",
      image: sipdesa,
      demo: "https://drive.google.com/file/d/1sNmpmpW1pcSkqMDV_yBiKQuP-pq27J7h/view?usp=drive_link",
    },
    {
      title: "Boga Eterna Sentosa Company Profile",
      description: "Company Profile website for PT Boga Eterna Sentosa.",
      image: boga,
      demo: "https://boga.vercel.app/",
    },
    {
      title: "Skuy.com",
      description:
        "Staycation website with sticky navbar feature, responsive for all devices and testimonial dropdowns.",
      image: Stay,
      demo: "https://skuy-phi.vercel.app/",
    },
    {
      title: "Movie Chill App",
      description: "Integrate Netflix API with ReactJS",
      image: movie,
      demo: "react-chill-movie.web.app/",
    },
    {
      title: "E-Commerce Furniture",
      description: "An website concept for furniture.",
      image: furniture,
      demo: "https://slicing-silk.vercel.app/",
    },
    {
      title: "Company Profile for named Cashier",
      description: "An cashier app using HTML, CSS, and Javascript.",
      image: cashier,
      demo: "https://gilang-aditia.github.io/Slicing-Bootrape/",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    spacebetween: 10,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h3 className="text-dark text-center">Innovatice App Project</h3>
            <h5 className="text-secondary text-center">
              Check Out Our Latest Creation!
            </h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="slider-container overflow-hidden">
            <Slider {...settings}>
              {portfolioItems.map((item, index) => (
                <div key={index}>
                  <Portofolio
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    demo={item.demo}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SliderPorto;
