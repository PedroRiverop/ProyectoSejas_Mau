import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";

export const ProyectoCidadeArte = () => {
    return (
        <ProyectoDetalle
            nombre="Cidade Arte"
            descripcionDestacada="Cidade Arte es un barrio innovador, diseñado para ofrecer eficiencia, sostenibilidad y alta calidad de vida con el menor impacto ambiental..."
            fachada="/assets/cidadearte/fachada.jpg"
            imagenesCarrusel={["../src/front/assets/cidadearte/hero1.jpg", "/assets/cidadearte/hero2.jpg", "/assets/cidadearte/hero3.jpg"]}
            descripcionMasterplan="Con calles arboladas y vegetación nativa de la Mata Atlántica integrada al entorno urbano, el proyecto ofrece un trazado inusual y armonioso..."
            galeriaComplementaria={["/assets/cidadearte/area1.jpg", "/assets/cidadearte/area2.jpg", "/assets/cidadearte/area3.jpg"]}
            amenities={["piscina", "cowork", "spa", "churrasqueira", "gimnasio", "playground"]}
            ubicacion={{
                imagen: "/assets/cidadearte/mapa.jpg",
                link: "https://goo.gl/maps/Xxx123CidadeArte"
            }}
            tipologias={[]}
            textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
        />
    );
};


