import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permítanme <span className="purple"> Presentarme </span>
            </h1>
            <p className="home-about-body">
              Soy un ingeniero de software con experiencia en el desarrollo de
              sistemas escalables, capaz de diseñar y construir soluciones
              eficientes que se adaptan a entornos de alta demanda. Mi enfoque
              está en crear aplicaciones robustas que garanticen un rendimiento
              óptimo y crecimiento sostenido.
              <br />
              <br />
              He liderado proyectos complejos, gestionando equipos de desarrollo
              para cumplir con plazos y objetivos. Mi capacidad para estructurar
              tareas y coordinar equipos
              <i>
                <b className="purple">
                  {" "}
                  asegura la entrega de productos de calidad que cumplen con las
                  expectativas del cliente.{" "}
                </b>
              </i>
              <br />
              <br />
              Poseo una excelente comunicación, facilitando la colaboración
              entre departamentos &nbsp;
              <i>
                <b className="purple">técnicos y no técnicos. </b> Esto me
                permite alinear los objetivos del proyecto{" "}
                <b className="purple">
                  con las necesidades del negocio, manteniendo siempre una
                  visión clara y enfocada.
                </b>
              </i>
              <br />
              <br />
              Me mantengo actualizado con las últimas{" "}
              <b className="purple">tecnologías y metodologías</b> de
              desarrollo,
              <i>
                <b className="purple">
                  {" "}
                  lo que me permite abordar nuevos desafíos con agilidad.
                </b>
              </i>
              &nbsp; Mi objetivo es seguir impulsando soluciones
              <i>
                <b className="purple">
                  {" "}
                  innovadoras y contribuir al éxito de los proyectos de
                  software.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectarte </span>
              conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/danielPachon/danielPachon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daniel-steven-rodr%C3%ADguez-pachon-4a0690159/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/daniel._.pachon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
