import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";

export const ProyectoOra = () => {
  return (
    <ProyectoDetalle
      nombre="ORA"
      descripcionDestacada="ORA: Inversión inteligente en el centro de Rio. Ubicado frente al aeropuerto, en una de las zonas más conectadas y turísticas de la ciudad..."
      fachada="/assets/ora/fachada.jpg"
      imagenesCarrusel={["/assets/ora/hero1.jpg", "/assets/ora/hero2.jpg", "/assets/ora/hero3.jpg"]}
      descripcionMasterplan="ORA ofrece studios, unidades de 1 dormitorio y double suites diseñadas para maximizar rentabilidad. El edificio cuenta con rooftop, coworking, gimnasio..."
      galeriaComplementaria={["/assets/ora/area1.jpg", "/assets/ora/area2.jpg", "/assets/ora/area3.jpg"]}
      amenities={["piscina", "cowork", "gimnasio", "wifi"]}
      ubicacion={{
        imagen: "/assets/ora/mapa.jpg",
        link: "https://goo.gl/maps/Xxx123Ora"
      }}
      tipologias={[]}
      textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
    />
  );
};


