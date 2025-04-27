import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";
import ubicacion from "../assets/img/project2/ubicacion.png"
import masterplan from "../assets/img/project2/masterplan.jpg"
import fachada from "../assets/img/project2/fachada.jpg"
import carrusel1 from "../assets/img/project2/ca1.jpg"
import carrusel2 from "../assets/img/project2/ca2.jpg"
import carrusel3 from "../assets/img/project2/ca3.jpg"
import carrusel4 from "../assets/img/project2/ca4.jpg"
import area1 from "../assets/img/project2/area1.jpg"
import area2 from "../assets/img/project2/area2.jpg"
import area3 from "../assets/img/project2/area3.png"
import area4 from "../assets/img/project2/area4.jpg"
import area5 from "../assets/img/project2/area5.jpg"
import area6 from "../assets/img/project2/area6.jpg"
import area7 from "../assets/img/project2/area7.jpg"


export const ProyectoCidadeArte = () => {
    return (
        <ProyectoDetalle
            nombre="Cidade Arte"
            descripcionDestacada="Cidade Arte es un barrio innovador, diseñado para ofrecer eficiencia, sostenibilidad y alta calidad de vida..."
            fachada={fachada}
            imagenesCarrusel={[carrusel1, carrusel2, carrusel3, carrusel4 ]}
            descripcionMasterplan="Cidade Arte cuenta con infraestructura completa de alto nivel y un concepto de planificación estratégica, amenidades para adultos e niños y facilidades para el dia a dia..."
            galeriaComplementaria={[area1, area2, area3, area4, area5, area6, area7]}
            amenities={["piscina", "cowork", "spa", "churrasqueira", "gimnasio", "playground", "piscina de surf"]}
            ubicacion={{
                imagen: ubicacion,
                link: "https://maps.app.goo.gl/fuB4JyxDcPPusE2g8?g_st=com.google.maps.preview.copy"
            }}
            tipologias={[
                {
                    nombre: "",
                    descripcion: "",
                    planoImg: "src/front/assets/img/project2/tipologia1.png",
                },
                {
                    nombre: "",
                    descripcion: "",
                    planoImg: "src/front/assets/img/project2/tipologia2.png",
                },
                {
                    nombre: "",
                    descripcion: "",
                    planoImg: "src/front/assets/img/project2/tipologia3.png",
                },
                {
                    nombre: "",
                    descripcion: "",
                    planoImg: "src/front/assets/img/project2/tipologia4.png",
                },
                {
                    nombre: "",
                    descripcion: "",
                    planoImg: "src/front/assets/img/project2/tipologia5.png",
                },
                {
                    nombre: "",
                    descripcion: "",
                    planoImg: "src/front/assets/img/project2/tipologia6.png",
                }
            ]}
            fondoMasterplan={masterplan}
            datosDestacados = {["14 pisos", "32 unidades", "20 + amenities"]}
            textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
        />
    );
};


