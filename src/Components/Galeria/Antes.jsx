import React, { useEffect } from "react";
import AOS from "aos";
import img1 from "../../assets/antes-1.png";
import img2 from "../../assets/antes-2.png";
import img3 from "../../assets/antes-3.png";
import "aos/dist/aos.css";
import "./Antes.css";

export function Antes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section id="galeria" className="section-galeria">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Antes e Depois
      </h2>
      <div
        className="container-cards-antes"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="card-antes" data-aos="fade-up" data-aos-delay="200">
          <img src={img1} alt="" data-aos="fade-up" data-aos-delay="300" />
          <article className="antes-article">
            <h3 data-aos="fade-up" data-aos-delay="400">
              Talita
            </h3>
            <p data-aos="fade-up" data-aos-delay="400">
              emagreceu 19kg após entra na mentoria segredos da mente magra , a
              maior dificuldade que ela tinha era vencer o efeito sanfona.
            </p>
            <a
              href="https://www.youtube.com/watch?v=6DvvkP1mSaI"
              target="blank"
            >
              Saiba mais!
            </a>
          </article>
        </div>
        <div className="card-antes" data-aos="fade-up" data-aos-delay="500">
          <img src={img2} alt="" data-aos="fade-up" data-aos-delay="600" />
          <article className="antes-article">
            <h3 data-aos="fade-up" data-aos-delay="700">
              Bruna Oliveira
            </h3>
            <p data-aos="fade-up" data-aos-delay="800">
              ganhou + de 30kg após a gestação e já tinha buscado ajuda em
              vários profissionais , mais não sabia onde estava o problema que
              não deixava ela ter resultado , até que ativou a mente magra e
              eliminou 35kg.
            </p>
            <a
              href="https://www.youtube.com/watch?v=MdKPJgftRe4"
              target="blank"
            >
              Saiba mais!
            </a>
          </article>
        </div>
        <div className="card-antes" data-aos="fade-up" data-aos-delay="600">
          <img src={img3} alt="" data-aos="fade-up" data-aos-delay="700" />
          <article className="antes-article">
            <h3 data-aos="fade-up" data-aos-delay="800">
              Marcilene
            </h3>
            <p data-aos="fade-up" data-aos-delay="900">
              eliminou 29kg após a reprogramação mental com o protocolo mente
              magra , ganhou de volta a autoestima e a vontade de viver magra
              definitivamente.
            </p>
            <a
              href="https://www.youtube.com/watch?v=hBL9vOYQabY"
              target="blank"
            >
              Saiba mais!
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
