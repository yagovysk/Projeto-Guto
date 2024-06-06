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
    <section className="section-sobre">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            at odio deserunt commodi quae voluptates? Officia, cupiditate modi
            qui explicabo ratione ipsam eligendi excepturi magnam, consequatur
            exercitationem reiciendis in. Sequi!
          </p>
        </article>
      </div>
    </section>
  );
}
