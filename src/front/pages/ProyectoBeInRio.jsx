import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";


export const ProyectoBeInRio = () => {
    return (
        <ProyectoDetalle
            nombre="Be in Rio"
            descripcionDestacada="Aquí, lo mejor de la Zona Sur de Rio se encuentra con un estilo de vida auténtico y vibrante. La Colección Be.in.Rio te permite vivir la esencia carioca..."
            fachada="src/front/assets/img/project1/fachada.png"
            imagenesCarrusel={["src/front/assets/img/project1/beInRio1.png", "src/front/assets/img/project1/beInRio2.png", 
                             "src/front/assets/img/project1/beInRio3.png", "src/front/assets/img/project1/beInRio4.png"]}
            descripcionMasterplan="Be.in.Rio Playa de Ipanema combina confort, diseño contemporáneo y funcionalidad en un espacio donde cada detalle ha sido pensado para armonizar elegancia y autenticidad..."
            galeriaComplementaria={["src/front/assets/img/project1/area1.png", "src/front/assets/img/project1/area2.png",
                 "src/front/assets/img/project1/area3.png", "src/front/assets/img/project1/area4.png", "src/front/assets/img/project1/area5.png", "src/front/assets/img/project1/area6.png"]}
            amenities={["gimnasio", "piscina", "lavanderia"]}
            ubicacion={{
                imagen: "src/front/assets/img/project1/ubicacion.png",
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
            fondoMasterplan="src/front/assets/img/project1/masterplan.png"
            datosDestacados = {["8 pisos", "33 unidades", "7 amenities"]}
            textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
        />
    );
};


