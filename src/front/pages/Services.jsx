import React from "react";

const Services = () => {
  return (
    <section id="services" className="section-space bg-light text-center py-5">
      <div className="container">
        <h2 className="mb-4">Servicios</h2>
        <p className="lead mb-5">
          Te acompañamos en cada etapa del proceso de inversión inmobiliaria.
        </p>
        <div className="row">
        <div className="col-md-4 text-center">
            <img src="https://picsum.photos/100?random=3" alt="Servicio" className="rounded-circle mb-3 shadow" />
            <h5>Asesoramiento</h5>
            <p>Consultoría personalizada para identificar las mejores oportunidades.</p>
        </div>
        <div className="col-md-4 text-center">
            <img src="https://picsum.photos/100?random=4" alt="Servicio" className="rounded-circle mb-3 shadow" />
            <h5>Proyectos Exclusivos</h5>
            <p>cceso a desarrollos de alta rentabilidad y bajo riesgo..</p>
        </div>
        <div className="col-md-4 text-center">
            <img src="https://picsum.photos/100?random=1" alt="Servicio" className="rounded-circle mb-3 shadow" />
            <h5>Gestión Integral</h5>
            <p>Administración, seguimiento y soporte legal para tu inversión.</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
