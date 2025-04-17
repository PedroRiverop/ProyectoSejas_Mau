import React from "react";
import ProyectoDetalle from "./ProyectoDetalle.jsx";

export const ProyectoCidadeArte = () => {
    return (
        <ProyectoDetalle
            nombre="Cidade Arte"
            descripcionDestacada="Cidade Arte es un barrio innovador, diseñado para ofrecer eficiencia, sostenibilidad y alta calidad de vida..."
            fachada="src/front/assets/img/project2/fachada.jpg"
            imagenesCarrusel={["src/front/assets/img/project2/ca1.jpg", "src/front/assets/img/project2/ca2.jpg", 
                "src/front/assets/img/project2/ca3.jpg", "src/front/assets/img/project2/ca4.jpg"]}
            descripcionMasterplan="Cidade Arte cuenta con infraestructura completa de alto nivel y un concepto de planificación estratégica, amenidades para adultos e niños y facilidades para el dia a dia..."
            galeriaComplementaria={["src/front/assets/img/project2/area1.jpg", "src/front/assets/img/project2/area2.jpg", 
                "src/front/assets/img/project2/area3.png", "src/front/assets/img/project2/area4.jpg", "src/front/assets/img/project2/area5.jpg"
                ,"src/front/assets/img/project2/area6.jpg", "src/front/assets/img/project2/area7.jpg"]}
            amenities={["piscina", "cowork", "spa", "churrasqueira", "gimnasio", "playground", "piscina de surf"]}
            ubicacion={{
                imagen: "src/front/assets/img/project2/ubicacion.png",
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
            fondoMasterplan="src/front/assets/img/project2/masterplan.jpg"
            datosDestacados = {["14 pisos", "32 unidades", "20 + amenities"]}
            textoFinal="En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
        />
    );
};


