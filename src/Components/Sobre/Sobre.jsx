import React, { useEffect } from "react";
import guto from "../../assets/guto-img-teste.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.css";

export function Sobre() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section id="sobre-mim" className="section-sobre">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Sobre Mim
      </h2>
      <div className="container-sobre">
        <img
          src={guto}
          alt="Imagem do personal Guto de braços cruzados"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <article
          className="article-sobre"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p>
            Meu nome e Gutenberg Sales, sou Personal e Coaching de Emagrecimento
            Consciente especialista em analise comportamental do obeso, trabalho
            na área da saúde desde 2013, atualmente focado no emagrecimento ,
            através de técnicas de coaching usando ferramentas embasadas em
            neurociência e neuroplasticidade e PNL. O treinamentos ajuda
            mulheres a emagrecer resignificando sua forma de pensar através de
            ferramentas especificas que trabalham diretamente nas crenças e nos
            vícios e principalmente na área emocional de quem luta contra a
            balança a muitos anos.
          </p>
        </article>
      </div>
    </section>
  );
}
