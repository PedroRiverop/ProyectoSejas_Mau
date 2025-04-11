import React, { useState } from "react";
import "./Contact.css"


const Contact = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: "",
      });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
    
        if (res.ok) {
          alert("¡Gracias por contactarnos!");
          setForm({ nombre: "", email: "", mensaje: "" });
        } else {
          alert("Hubo un error al enviar el formulario.");
        }
      };
    

  return (
    <section id="contact" className="section-space bg-light py-5">
      <div className="container text-center">
      <h2 className="mb-4">¿Querés que te contactemos?</h2>

        <button
            className="btn-contact-modern"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
            >
                Quiero que me contacten
        </button>


        <div className="modal-body">
  <form onSubmit={handleSubmit}>
    <div className="mb-3 text-start">
      <label className="form-label">Nombre</label>
      <input
        type="text"
        className="form-control"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3 text-start">
      <label className="form-label">Correo Electrónico</label>
      <input
        type="email"
        className="form-control"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3 text-start">
      <label className="form-label">Mensaje</label>
      <textarea
        className="form-control"
        name="mensaje"
        rows="4"
        value={form.mensaje}
        onChange={handleChange}
        required
      />
    </div>
    <div className="text-end">
      <button type="submit" className="btn btn-primary">Enviar</button>
    </div>
  </form>
</div>




    </div>
    </section>
  );
};

export default Contact;
