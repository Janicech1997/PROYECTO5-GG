import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../iniciarsesion/Iniciarsesion.module.css"

function Iniciarsesion() {
  return (
    <>
    <Header />	
      <section className={classes.formlogin}>
        <h5>Login</h5>
        <input
          className={classes.controls}
          type="text"
          name="usuario"
          defaultValue
          placeholder="Usuario"
        />
        <input
          className={classes.controls}
          type="password"
          name="contrasena"
          defaultValue
          placeholder="Contraseña"
        />
        <input className={classes.buttons} type="submit" name defaultValue="Ingresar" />
        <p>
          <a href="./registrarse">¿Olvidastes tu Contraseña?</a>
        </p>
      </section>
      <Footer />
    </>
  );
}
export default Iniciarsesion;
