import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import fundo from "../../assets/fundo-guto.jpg";
import "./Home.css";

export function Home() {
  return (
    <section className="section-home">
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
            <img className="img-carousel-1" src={fundo} alt="" />
          </div>
          <article className="article-home">
            <p>
              Transforme sua vida e alcance seus objetivos com um treinamento
              personalizado. Vamos juntos superar limites e descobrir a sua
              melhor versão!
            </p>
            <a className="contact-button" href="">
              Agende uma aula grátis!
            </a>
          </article>
        </div>
        <div className="carousel-2">
          <article className="article-home2">
            <h2>Mude sua Mentalidade</h2>
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
              href="https://wa.me/SEU_NUMERO_WHATSAPP"
            >
              Clique aqui para saber mais!
            </a>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
