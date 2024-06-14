import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import perfil1 from "../../assets/perfil-1.jpg";
import perfil2 from "../../assets/perfil-2.jpg";
import perfil3 from "../../assets/perfil-3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Depoiments.css";

const testimonials = [
  {
    id: 1,
    name: "Monica",
    photo: perfil1,
    stars: 5,
    text: "Muito feliz por conseguir ter coragem de me pesar e poder confirmar que meu corpo vem mostrando os resultados. Pude confirmar não só nas medidas como também na balança e fiquei surpresa após o desafio de 21 dias, estava pesando 107 kg e hoje consegui chegar aos 98 kg, sei que ainda falta muito, mas, tenho consciência que estou no caminho certo, muito obrigada Professor Guto!",
  },
  {
    id: 2,
    name: "Ana Paula",
    photo: perfil2,
    stars: 5,
    text: "Gostaria de expressar minha gratidão, já consegui emagrecer 9 kg, eu estava com 74 kg e agora estou com 65 kg. Nem estou acreditando que já consegui isso tudo, muito obrigada pelo incentivo que você e sua equipe nos dá a cada dia.",
  },
  {
    id: 3,
    name: "Neura Santos",
    photo: perfil3,
    stars: 5,
    text: "Finalmente consegui perder peso, perdi mais de 8 kg depois de muito esforço e dedicação que aprendir a ter junto ao Professor Guto. Sou grata por tudo, muito contente com os resultados e finalmente caber nas roupas que tanto gosto.",
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
