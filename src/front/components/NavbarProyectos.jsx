import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logoBlanco.png"
import "./NavbarProyectos.css";


export const NavbarProyectos = () => {
  return (
    <nav className="navbar navbar-project navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" height="50" className="me-2" />
        </Link>

        <div className="d-flex gap-3">
          <Link className="nav-link text-white" to="/proyecto-be-in-rio">Be in Rio</Link>
          <Link className="nav-link text-white" to="/proyecto-cidade-arte">Cidade Arte</Link>
          <Link className="nav-link text-white" to="/proyecto-ora">ORA</Link>
        </div>
      </div>
    </nav>
  );
};


