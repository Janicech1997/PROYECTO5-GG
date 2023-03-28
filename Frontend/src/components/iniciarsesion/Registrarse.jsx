import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../iniciarsesion/Registrarse.module.css"

function Registrarse() {
  return (
    <>
    <Header />
    <div>
      <section className={classes.formregister}>
        <h4>Formulario Registro</h4>
        <input
          className={classes.controls}
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su Nombre"
        />
        <input
          className={classes.controls}
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Ingrese su Apellido"
        />
        <input
          className={classes.controls}
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese su Correo"
        />
        <input
          className={classes.controls}
          type="password"
          name="correo"
          id="correo"
          placeholder="Ingrese su Contraseña"
        />
        <p>
          Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
        </p>
        <input className={classes.botons} type="submit" defaultValue="Registrar" />
        <p>
          <a href="./iniciarsesion">¿Ya tengo Cuenta?</a>
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
}
export default Registrarse;
