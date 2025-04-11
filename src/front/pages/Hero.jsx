import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section id="home" className="hero-section d-flex align-items-center justify-content-center text-center">
            <div className="hero-overlay"></div>
            <div className="hero-content text-white">
                <h1 className="display-4 fw-bold">Invierte en el Futuro</h1>
                <p className="lead">Proyectos inmobiliarios de alto impacto, seguridad y rentabilidad</p>
                <a href="#contact" className="btn btn-primary mt-4">Contáctanos</a>
            </div>
        </section>
    );
};

export default Hero;
