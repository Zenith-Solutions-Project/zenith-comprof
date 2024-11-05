
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import Portofolio from '../components/ui/portofolio/Portofolio';
import Projects from '../../assets/projects/projects.jpg';
import Stay from '../../assets/projects/p1.png';
import movie from "../../assets/projects/movie.png";

const SliderPorto = () => {
  const portfolioItems = [
    {
      title: "Landing Pages",
      description: "Some description for the first item.",
      image: Projects,
      demo: "buruh",
    },
    {
      title: "Skuy.com",
      description:
        "staycation website with sticky navbar feature, responsive for all devices and testimonial dropdowns.",
      image: Stay,
      demo: "https://skuy-phi.vercel.app/",
    },
    {
      title: "Landing Pages Movie Child",
      description: "Some description for the third item.",
      image: movie,
      demo: "react-chill-movie.web.app/",
    },
    {
      title: "Landing Pages",
      description: "Some description for the fourth item.",
      image: Projects,
      demo: "buruh",
    },
    {
      title: "Landing Pages",
      description: "Some description for the fifth item.",
      image: Projects,
      demo: "Bi",
    },
    // Add more portfolio items as needed
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
