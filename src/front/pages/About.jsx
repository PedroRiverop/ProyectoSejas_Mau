import React from "react";

const About = () => {
  return (
    <section id="about" className="section-space bg-light py-5">
  <div className="container d-flex flex-column flex-md-row align-items-center">
    <div className="col-md-6 mb-4 mb-md-0">
      <img src="https://picsum.photos/500/350?grayscale" alt="nosotros" className="img-fluid rounded-4 shadow" />
    </div>
    <div className="col-md-6 ps-md-5">
      <h2 className="mb-3">¿Quiénes Somos?</h2>
      <p className="lead">
        Inversiones Raíces nace con la visión de acercar oportunidades inmobiliarias reales,
        sustentables y rentables a todos. Nuestro equipo está comprometido con la transparencia
        y el acompañamiento integral.
      </p>
    </div>
  </div>
</section>

  );
};

export default About;
