import { GiBrain } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import "./Services.css";

export function Services() {
  return (
    <section className="section-services">
      <div className="container-services">
        <h1>Conheça Meus Serviços</h1>
        <div className="container-cards">
          <div className="card">
            <GiBrain className="icon" />
          </div>
          <div className="card">
            <GiWeightLiftingUp className="icon" />
          </div>
          <div className="card">
            <FaRunning className="icon" />
          </div>
          <div className="card">
            <GiMuscleUp className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
