import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Hero from "./Hero.jsx"
import About from "./About.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

export const Home = () => {


	return (
		<main>
			<Hero />
			<About />
      		<Services />
     		<Projects />
      		<Contact />
			  <a
  href="https://wa.me/5491123456789"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
</a>

		</main>
		
	  );
	};