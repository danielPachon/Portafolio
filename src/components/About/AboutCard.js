import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Daniel Pachón </span>
            de <span className="purple"> Armenia, Quindio.</span>
            <br />
            Actualmente trabajo como freelancer, especializado en desarrollo
            fullstack.
            <br />
            Estoy en los últimos semestres de la carrera de Ingeniería de
            Software y me apasiona crear soluciones tecnológicas eficientes que
            resuelvan problemas reales.
            <br />
            <br />
            ¡Además de codificar, hay otras actividades que me encanta hacer!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y descubrir nuevas culturas
            </li>
            <li className="about-activity">
              <ImPointRight /> Disfrutar del tiempo al aire libre
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Esfuérzate por construir cosas que hagan la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
