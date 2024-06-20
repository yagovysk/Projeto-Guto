import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import fundo from "../../assets/fundo-guto.jpg";
import mente from "../../assets/mente-magra.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);

  return (
    <section id="home" className="section-home">
      <Helmet>
        <title>Guto Personal Trainer - Emagrecimento Definitivo.</title>
        <meta
          name="description"
          content="+ de 1000 alunas transformadas com o protocolo os segredos da mente magra. Conheça o método pensado em você que quer perder peso, consiga seu melhor resultado."
        />
        <meta
          name="keywords"
          content="Personal, Personal Trainer, segredos da mente magra, emagrecimento definitivo, perder peso, ficar magro, emagrecimento, emagrecer, perder peso"
        />
        <meta name="author" content="Yago Cerqueira Regis" />
        <meta
          property="og:title"
          content="Guto Personal Trainer - Emagrecimento Definitivo"
        />
        <meta
          property="og:description"
          content="Mais de 1000 alunas transformadas com o protocolo os segredos da mente magra. Conheça o método pensado em você que quer perder peso, consiga seu melhor resultado."
        />
        <meta
          property="og:image"
          content={`${window.location.origin}/guto-img-teste.png`}
        />
        <meta property="og:url" content="https://garotinhasfitness.com.br/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Carousel
        className="carousel-home"
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow arrow-prev"
            >
              <MdArrowBackIosNew className="arrow-icon" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow arrow-next"
            >
              <MdOutlineArrowForwardIos className="arrow-icon" />
            </button>
          )
        }
      >
        <div className="carousel-1">
          <div className="img-overlay">
            <img
              className="img-carousel-1"
              src={fundo}
              alt="Imagem de Homem de costas sentado, segurando um peso em cada mão, com camisa vermelha"
            />
          </div>
          <article className="article-home">
            <img
              className="img-mente"
              src={mente}
              alt="imagem da logo escrito mente magra, magra está esccrito em vermelho e tem uma nuvem ao lado esquerdo da logo"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <p data-aos="fade-up" data-aos-delay="100">
              + de <span>1000</span> alunas transformadas com o protocolo{" "}
              <span>Segredos</span> da mente magra. Diga adeus ao efeito
              sanfona.
            </p>
            <a
              className="contact-button"
              href="https://wa.me/+556195111383?text=Olá, vim pelo site, gostaria de fazer um teste gratuito."
              target="blank"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Faça um teste gratuito!
            </a>
          </article>
        </div>
        <div className="carousel-2">
          <article className="article-home2">
            <h2 data-aos="fade-up" data-aos-delay="200">
              O seu corpo muda quando a sua mentalidade muda
            </h2>
            <div className="video-container">
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/Ypp5OHLdq6k"
                title="Vídeo Guto explicando a melhor maneira de perder peso"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Conheça o método pensado em você que quer perder peso, consiga seu
              melhor resultado.
            </p>
            <a
              className="contact-button"
              href="https://wa.me/+556195111383?text=Olá, vim pelo site, gostaria de fazer um teste gratuito."
              target="blank"
            >
              Clique aqui para saber mais!
            </a>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
