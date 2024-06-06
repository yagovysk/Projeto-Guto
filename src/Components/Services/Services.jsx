import { GiBrain } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import "./Services.css";

export function Services() {
  return (
    <section className="section-services">
      <div className="container-services">
        <h1>Conheça Nossos Serviços</h1>
        <div className="container-cards">
          <div className="card">
            <GiBrain className="icon" />
            <article className="card-text">
              <h2>Emagrecimento com neurociência</h2>
              <p>
                Nosso serviço de emagrecimento utiliza a neurociência para
                oferecer uma abordagem inovadora e eficaz. Compreendemos como os
                hábitos alimentares, emoções e padrões de pensamento influenciam
                o peso, desenvolvendo estratégias personalizadas além das dietas
                tradicionais.
              </p>
            </article>
          </div>
          <div className="card">
            <GiWeightLiftingUp className="icon" />
            <article className="card-text">
              <h2>condicionamento físico</h2>
              <p>
                Nosso serviço de condicionamento físico é projetado para
                melhorar sua saúde, força e resistência de maneira eficiente e
                segura. Com uma abordagem personalizada, ajudamos você a
                alcançar seus objetivos fitness, seja emagrecimento, ganho
                muscular ou bem-estar geral.
              </p>
            </article>
          </div>
          <div className="card">
            <FaRunning className="icon" />
            <article className="card-text">
              <h2>corrida de rua </h2>
              <p>
                Nosso serviço de treinamento de corrida de rua é ideal para
                corredores de todos os níveis, desde iniciantes até maratonistas
                experientes. Com uma abordagem personalizada, ajudamos você a
                melhorar seu desempenho, prevenir lesões e atingir suas metas de
                corrida.
              </p>
            </article>
          </div>
          <div className="card">
            <GiMuscleUp className="icon" />
            <article className="card-text">
              <h2>Hipertrofia muscular</h2>
              <p>
                Nosso serviço de hipertrofia muscular é projetado para quem
                deseja ganhar massa muscular de forma eficaz e segura. Com um
                programa personalizado, ajudamos você a alcançar seus objetivos
                de crescimento muscular e força.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
