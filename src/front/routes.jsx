// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { ProjectLayout } from "./pages/ProjectLayout";
import { Home } from "./pages/Home";
import { ProyectoBeInRio } from "./pages/ProyectoBeInRio";
import { ProyectoCidadeArte } from "./pages/ProyectoCidadeArte";
import { ProyectoOra } from "./pages/ProyectoOra";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rutas con layout principal (navbar, footer general) */}
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route index element={<Home />} />
        
      </Route>

      {/* Rutas con layout personalizado para proyectos */}
      <Route element={<ProjectLayout />}>
        <Route path="/proyecto-be-in-rio" element={<ProyectoBeInRio />} />
        <Route path="/proyecto-cidade-arte" element={<ProyectoCidadeArte />} />
        <Route path="/proyecto-ora" element={<ProyectoOra />} />
      </Route>
    </>
  )
);