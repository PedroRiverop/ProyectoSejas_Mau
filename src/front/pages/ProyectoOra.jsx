import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";

export const ProyectoOra = () => {
  return (
    <ProyectoDetalle
      nombre="ORA"
      descripcionDestacada="Imagina vivir o invertir en un lugar con vistas a nueve postales icónicas: la Bahía de Guanabara, el Pan de 
      Azúcar, el Cristo Redentor, los Arcos de Lapa y mucho más. Todo desde tu balcón, la piscina del rooftop o tomando algo con amigos 
      en el bar. Perfecto para invertir, porque en ORA, la vista es un privilegio y la ubicación, inmejorable..."
      fachada="src/front/assets/img/project3/fachada.jpg"
      imagenesCarrusel={["src/front/assets/img/project3/ora1.png", "src/front/assets/img/project3/ora2.png", "src/front/assets/img/project3/ora3.png"]}
      descripcionMasterplan="ORA cuenta con infraestructura completa para recibir a sus visitantes, disfruta de la maravillosa vista 
      desde el rooftop en la piscina y aprovecha todo lo que ORA tiene para ofrecerte..."
      galeriaComplementaria={["src/front/assets/img/project3/area1.png", "src/front/assets/img/project3/area2.png",
        "src/front/assets/img/project3/area3.png", "src/front/assets/img/project3/area4.png", "src/front/assets/img/project3/area5.png"]}
      amenities={["piscina", "cowork", "gimnasio", "sala de juegos", "bar", "solarium", "lavanderia"]}
      ubicacion={{
        imagen: "src/front/assets/img/project3/ubicacion.jpg",
        link: "https://maps.app.goo.gl/eXJrStDD8LV2mcaJ8?g_st=com.google.maps.preview.copy"
      }}
      tipologias={[
        {
          nombre: "",
          descripcion: "",
          planoImg: "",
        },
        {
          nombre: "",
          descripcion: "",
        },


      ]}
      fondoMasterplan="src/front/assets/img/project2/masterplan.jpg"
      datosDestacados={["16 pisos", "13 unidades", "9 amenities"]}
      textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de 
      Janeiro..."
    />
  );
};


