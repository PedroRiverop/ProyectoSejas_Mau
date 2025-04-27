import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";
import ubicacion from "../assets/img/project1/ubicacion.png"
import masterplan from "../assets/img/project1/masterplan.png"
import fachada from "../assets/img/project1/fachada.png"
import carrusel1 from "../assets/img/project1/beInRio1.png"
import carrusel2 from "../assets/img/project1/beInRio2.png"
import carrusel3 from "../assets/img/project1/beInRio3.png"
import carrusel4 from "../assets/img/project1/beInRio4.png"
import area1 from "../assets/img/project1/area1.png"
import area2 from "../assets/img/project1/area2.png"
import area3 from "../assets/img/project1/area3.png"
import area4 from "../assets/img/project1/area4.png"
import area5 from "../assets/img/project1/area5.png"
import area6 from "../assets/img/project1/area6.png"



export const ProyectoBeInRio = () => {
    return (
        <ProyectoDetalle
            nombre="Be in Rio"
            descripcionDestacada="Aquí, lo mejor de la Zona Sur de Rio se encuentra con un estilo de vida auténtico y vibrante. La Colección Be.in.Rio te permite vivir la esencia carioca..."
            fachada={fachada}
            imagenesCarrusel={[carrusel1, carrusel2, carrusel3, carrusel4 ]}
            descripcionMasterplan="Be.in.Rio Playa de Ipanema combina confort, diseño contemporáneo y funcionalidad en un espacio donde cada detalle ha sido pensado para armonizar elegancia y autenticidad..."
            galeriaComplementaria={[area1, area2, area3, area4, area5, area6]}
            amenities={["gimnasio", "piscina", "lavanderia"]}
            ubicacion={{
                imagen: ubicacion,
                link: "https://maps.app.goo.gl/xidbvmthe3c8Jprw6?g_st=com.google.maps.preview.copy"
            }}
            tipologias={[
                {
                    nombre: "Studio",
                    descripcion: "Un encantador studio en Ipanema, diseñado para ofrecer confort y funcionalidad...",
                    planoImg: "",
                },
                {
                    nombre: "Double Suite",
                    descripcion: "Una elegante double suite en Ipanema, diseñada para ofrecer confort y practicidad...",
                },
                {
                    nombre: "Penthouse",
                    descripcion: "Una exclusiva penthouse de 3 habitaciones en Ipanema, donde sofisticación y amplitud se combinan...",
                }
            ]}
            fondoMasterplan={masterplan}
            datosDestacados = {["8 pisos", "33 unidades", "7 amenities"]}
            textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
        />
    );
};


