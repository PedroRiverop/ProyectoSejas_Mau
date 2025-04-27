import React, { useEffect } from "react"
import Hero from "./Hero.jsx"
import About from "./About.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import BotonWhatsappFlotante from "../components/BotonWhatsappFlotante";

export const Home = () => {


	return (
		<main>
			<Hero />
			<About />
      		<Services />
     		<Projects />
      		<Contact />
			<BotonWhatsappFlotante />

		</main>
		
	  );
	};