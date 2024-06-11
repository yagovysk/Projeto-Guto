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
              Nome da aluna
            </h3>
            <p data-aos="fade-up" data-aos-delay="400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              et ducimus suscipit sit molestiae! Pariatur aut dolorem
              voluptatum. Deleniti dolorum cupiditate, voluptate aliquam
              repudiandae tenetur perferendis expedita adipisci eos vel.
            </p>
            <a href="">Saiba mais!</a>
          </article>
        </div>
        <div className="card-antes" data-aos="fade-up" data-aos-delay="500">
          <img src={img2} alt="" data-aos="fade-up" data-aos-delay="600" />
          <article className="antes-article">
            <h3 data-aos="fade-up" data-aos-delay="700">
              Nome da aluna
            </h3>
            <p data-aos="fade-up" data-aos-delay="800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consequatur, voluptates dolores, repudiandae alias cum
              nihil aliquid magnam sunt ipsum labore minima hic iure ullam! Et
              maxime provident veritatis nihil.
            </p>
            <a href="">Saiba mais!</a>
          </article>
        </div>
        <div className="card-antes" data-aos="fade-up" data-aos-delay="600">
          <img src={img3} alt="" data-aos="fade-up" data-aos-delay="700" />
          <article className="antes-article">
            <h3 data-aos="fade-up" data-aos-delay="800">
              Nome da aluna
            </h3>
            <p data-aos="fade-up" data-aos-delay="900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quos consequatur, dolore ut, sunt earum eius sapiente, id ea saepe
              illo quidem libero ipsum! Veniam magni distinctio explicabo ut
              ipsam.
            </p>
            <a href="">Saiba mais!</a>
          </article>
        </div>
      </div>
    </section>
  );
}
