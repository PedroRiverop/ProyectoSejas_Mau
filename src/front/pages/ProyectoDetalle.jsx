import React from "react";
import { FaMapMarkerAlt, FaSwimmer, FaDumbbell, FaHotTub, FaUtensils, FaWifi, FaBuilding, FaBriefcase } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import Contact from "./Contact.jsx";
import "./ProyectoDetalle.css";
import Slider from "react-slick";


const amenityIcons = {
    piscina: <FaSwimmer />, // piscina común
    gimnasio: <FaDumbbell />,
    spa: <FaHotTub />,
    churrasqueira: <FaUtensils />,
    cowork: <FaBriefcase />,
    wifi: <FaWifi />,
    lavanderia: <FaBuilding />,
    ubicacion: <FaMapMarkerAlt />,
};

const ProyectoDetalle = ({
    nombre,
    descripcionDestacada,
    fachada,
    imagenesCarrusel = [],
    descripcionMasterplan,
    galeriaComplementaria = [],
    amenities = [],
    ubicacion,
    tipologias = [],
    textoFinal,
    fondoMasterplan,
    datosDestacados = [],
}) => {
    return (
        <div className="proyecto-detalle">
            {/* Carrusel principal */}
            <Carousel fade className="hero-carousel">
                {imagenesCarrusel.map((img, i) => (
                    <Carousel.Item key={i}>
                        <img className="d-block w-100" src={img} alt={`Slide ${i}`} />
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Descripción destacada */}
            <section className="destacada container py-5 d-flex flex-column flex-md-row align-items-center">
                <div className="col-md-6 pe-md-5 text-container-fachada">
                    <h2 className="text-orange mb-3 animate-text-shadow">{nombre}</h2>
                    <p className="lead text-justify animate-fadein">{descripcionDestacada}</p>
                </div>
                <div className="col-md-6">
                    <img
                        src={fachada}
                        alt="fachada"
                        className="img-fluid rounded-4 shadow fachada-zoom"
                    />
                </div>

            </section>

            {/* Masterplan / descripción */}
            <section
                className="seccion-masterplan text-white py-5"
                style={{
                    backgroundImage: fondoMasterplan ? `url(${fondoMasterplan})` : "none",
                    backgroundColor: fondoMasterplan ? "transparent" : "#00bcd4",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <div className="overlay-masterplan"></div>
                <div className="container text-center position-relative z-2">
                    <div className="datos-destacados mb-4 d-flex flex-wrap justify-content-center gap-3">
                        {datosDestacados.map((item, i) => (
                            <div key={i} className="dato-box p-3 px-4">
                                <h4 className="mb-0 fw-bold">{item}</h4>
                            </div>
                        ))}
                    </div>
                    <p className="lead text-shadow-light">{descripcionMasterplan}</p>
                </div>
            </section>

            {/* Galería complementaria */}
            <section className="galeria container py-5">
                <h4 className="mb-4">Ambientes destacados</h4>
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    responsive={[
                    {
                        breakpoint: 992,
                        settings: { slidesToShow: 2 },
                    },
                    {
                        breakpoint: 768,
                        settings: { slidesToShow: 1 },
                    },
                    ]}
                >
                    {galeriaComplementaria.map((img, i) => (
                    <div key={i} className="px-2">
                        <img
                        src={img}
                        alt={`galeria-${i}`}
                        className="img-fluid rounded-3 shadow-sm ambiente-slider"
                        />
                    </div>
                    ))}
                </Slider>
            </section>


            {/* Amenities */}
            <section className="amenities container py-5">
                <h4 className="mb-4">Amenities del proyecto</h4>
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {amenities.map((am, i) => (
                        <div className="text-center text-orange" key={i}>
                            <div className="icon-circle mb-2">{amenityIcons[am] || <FaBuilding />}</div>
                            <div className="fw-semibold text-capitalize">{am}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ubicación */}
            <section className="ubicacion container py-5 text-center">
                <h4 className="mb-3">Ubicación</h4>
                <a href={ubicacion.link} target="_blank" rel="noopener noreferrer">
                    <img src={ubicacion.imagen} alt="ubicacion" className="img-fluid rounded-3 shadow" />
                </a>
            </section>

            {/* Tipologías */}
            {tipologias.length > 0 && (
                <section className="tipologias container py-5">
                    <h4 className="mb-4">Tipologías disponibles</h4>
                    {tipologias.map((tipo, i) => (
                        <div className="mb-4" key={i}>
                            <h5 className="fw-bold text-orange">{tipo.nombre}</h5>
                            <p className="text-justify">{tipo.descripcion}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* Cierre + Formulario */}
            <section className="formulario container py-5">
                <p className="lead text-center mb-4">{textoFinal}</p>
                <Contact />
            </section>
        </div>
    );
};

export default ProyectoDetalle;
