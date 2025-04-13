import { Link } from "react-scroll";


import './Navbar.css';
import logo from "../assets/img/logo.png"

export const Navbar = () => {

	return (
		<>
			<nav className="navbar fixed-top bg-transparent shadow-none d-flex justify-content-between align-items-center px-4">
				<div className="navbar-brand fw-bold fs-4">
				<a className="navbar-brand" href="#">
					<img
						src={logo}
						alt="Logo de la empresa"
						height="100"
						className="d-inline-block align-middle"
					/>
				</a>
				</div>

				<div className="nav-menu-wrapper d-none d-md-flex justify-content-center">
					<ul className="nav-menu shadow-sm">
						<li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
						<li><Link to="about" smooth={true} duration={500}>Sobre Nosotros</Link></li>
						<li><Link to="services" smooth={true} duration={500}>Servicios</Link></li>
						<li><Link to="projects" smooth={true} duration={500}>Proyectos</Link></li>
						<li><Link to="contact" smooth={true} duration={500}>Contáctanos</Link></li>
					</ul>
				</div>
			</nav>
		</>
	);
};
