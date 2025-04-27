import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";
import ubicacion from "../assets/img/project2/ubicacion.png"
import masterplan from "../assets/img/project2/masterplan.jpg"
import fachada from "../assets/img/project2/fachada.jpg"
/*import carrusel1 from "../assets/img/project3/ora1.png"
import carrusel2 from "../assets/img/project3/ora2.png"
import carrusel3 from "../assets/img/project3/ora3.png"
import area1 from "../assets/img/project3/area1.png"
import area2 from "../assets/img/project3/area2.png"
import area3 from "../assets/img/project3/area3.png"
import area4 from "../assets/img/project3/area4.png"
import area5 from "../assets/img/project3/area5.png"*/


export const ProyectoOra = () => {
  return (
    <ProyectoDetalle
      nombre="ORA"
      descripcionDestacada="Imagina vivir o invertir en un lugar con vistas a nueve postales icónicas: la Bahía de Guanabara, el Pan de 
      Azúcar, el Cristo Redentor, los Arcos de Lapa y mucho más. Todo desde tu balcón, la piscina del rooftop o tomando algo con amigos 
      en el bar. Perfecto para invertir, porque en ORA, la vista es un privilegio y la ubicación, inmejorable..."
      fachada={fachada}
      //imagenesCarrusel={[carrusel1, carrusel2, carrusel3 ]}
      descripcionMasterplan="ORA cuenta con infraestructura completa para recibir a sus visitantes, disfruta de la maravillosa vista 
      desde el rooftop en la piscina y aprovecha todo lo que ORA tiene para ofrecerte..."
      //aleriaComplementaria={[area1, area2, area3, area4, area5 ]}
      amenities={["piscina", "cowork", "gimnasio", "sala de juegos", "bar", "solarium", "lavanderia"]}
      ubicacion={{
        imagen: ubicacion,
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
      fondoMasterplan={masterplan}
      datosDestacados={["16 pisos", "13 unidades", "9 amenities"]}
      textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de 
      Janeiro..."
    />
  );
};


