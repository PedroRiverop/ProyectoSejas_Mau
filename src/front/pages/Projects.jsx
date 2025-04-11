import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section-space container text-center">
      <h2 className="mb-4">Proyectos</h2>
      <p className="lead mb-4">
        Descubrí nuestros proyectos actuales y en desarrollo.
      </p>
      <div className="row">
      <div className="col-md-4 mb-4">
        <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
            <img src="https://picsum.photos/400/300?random=1" className="img-fluid project-image" alt="Proyecto" />
            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-white text-center">Proyecto A</h5>
            <a href="/proyecto-a" className="btn btn-outline-light btn-sm mt-2">Ver Detalles</a>
            </div>
        </div>
        <p className="text-center mt-2 small">Departamentos premium en ubicación estratégica.</p>
    </div>

    <div className="col-md-4 mb-4">
        <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
            <img src="https://picsum.photos/400/300?random=2" className="img-fluid project-image" alt="Proyecto" />
            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-white text-center">Proyecto A</h5>
            <a href="/proyecto-a" className="btn btn-outline-light btn-sm mt-2">Ver Detalles</a>
            </div>
        </div>
        <p className="text-center mt-2 small">Condominios verdes con enfoque sustentable.</p>
    </div>

    <div className="col-md-4 mb-4">
        <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
            <img src="https://picsum.photos/400/300?random=3" className="img-fluid project-image" alt="Proyecto" />
            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-white text-center">Proyecto A</h5>
            <a href="/proyecto-a" className="btn btn-outline-light btn-sm mt-2">Ver Detalles</a>
            </div>
        </div>
        <p className="text-center mt-2 small">Lotes urbanizados listos para construir.</p>
    </div>

      </div>
    </section>
  );
};

export default Projects;
