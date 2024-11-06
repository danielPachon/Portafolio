import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle"; // Asegúrate de que esto sea necesario

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Mensaje enviado con éxito");
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="d-flex flex-column" style={{ height: "92vh" }}>
      <Particle
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Container
        className="flex-grow-1 d-flex justify-content-center align-items-center"
        style={{ zIndex: 2 }}
      >
        <div>
          <h1 className="contact-heading">
            <strong className="purple">Contáctame</strong>
          </h1>
          <p style={{ color: "white" }}>
            Si tienes alguna consulta o proyecto en mente, no dudes en enviarme
            un mensaje.
          </p>
          <Row style={{ justifyContent: "center" }}>
            <Col md={6} className="contact-card">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu email"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label style={{ color: "white" }}>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu mensaje"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;
