import React from "react";
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom";
import { NavbarProyectos } from "../components/NavbarProyectos"

export const ProjectLayout = () => {
  return (
    <>
      <NavbarProyectos />>
      <Outlet />
      <Footer />
    </>
  );
};


