import React from "react";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="section-space container text-center">
      <h2 className="mb-4">Proyectos</h2>
      <p className="lead mb-4">
        Descubrí nuestros proyectos actuales y en desarrollo
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
            <img src={project1} className="img-fluid project-image" alt="Proyecto" />
            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white text-center">Be in Rio</h5>
              <a href="/proyecto-be-in-rio" className="btn btn-outline-light btn-sm mt-2">Ver Detalles</a>
            </div>
          </div>
          <p className="project-description mt-3 text-center fw-medium text-dark">Oportunidades de ubicación estratégica en Ipanema y Copacabana</p>
        </div>

        <div className="col-md-4 mb-4">
          <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
            <img src={project2} className="img-fluid project-image" alt="Proyecto" />
            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white text-center">Cidade Arte</h5>
              <a href="/proyecto-cidade-arte" className="btn btn-outline-light btn-sm mt-2">Ver Detalles</a>
            </div>
          </div>
          <p className="project-description mt-3 text-center fw-medium text-dark">Opciones en Barra da Tijuca, donde el diseño y la naturaleza se unen</p>
        </div>

        <div className="col-md-4 mb-4">
          <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
            <img src={project3} className="img-fluid project-image" alt="Proyecto" />
            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white text-center">ORA</h5>
              <a href="/proyecto-ora" className="btn btn-outline-light btn-sm mt-2">Ver Detalles</a>
            </div>
          </div>
          <p className="project-description mt-3 text-center fw-medium text-dark">Inversión inteligente en el centro de Rio, frente al aeropuerto</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
