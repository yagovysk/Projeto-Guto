import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import perfil from "../../assets/perfil-anime.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Depoiments.css";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    photo: perfil,
    stars: 5,
    text: "Este é um excelente serviço! Recomendo a todos.",
  },
  {
    id: 2,
    name: "Maria Santos",
    photo: perfil,
    stars: 5,
    text: "Estou muito satisfeito com o atendimento e a qualidade.",
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    photo: perfil,
    stars: 5,
    text: "Excelente experiência, superou minhas expectativas!",
  },
];

export function Depoiments() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section id="depoiments" className="section-depoiments">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Depoimentos
      </h2>
      <div
        className="container-depoiments"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Carousel
          className="testimonial-carousel"
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="arrows arrows-prev"
              >
                <MdArrowBackIosNew />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="arrows arrows-next"
              >
                <MdOutlineArrowForwardIos />
              </button>
            )
          }
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="testimonial-photo"
                data-aos="fade-up"
                data-aos-delay="600"
              />
              <div
                className="testimonial-stars"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                {"★".repeat(testimonial.stars)}
                {"☆".repeat(5 - testimonial.stars)}
              </div>
              <h3 data-aos="fade-up" data-aos-delay="800">
                {testimonial.name}
              </h3>
              <p data-aos="fade-up" data-aos-delay="900">
                {testimonial.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
