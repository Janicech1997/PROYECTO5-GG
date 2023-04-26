import React from "react";
import classes from "../layout/Header.module.css"

export default function Header() {
  return (
    <div>
      <header className={classes.headersection}>
        <div className={classes.container}>
          {/* logo */}
          <a className={classes.sitelogo} width="30px">
            <img src="img/logo.png" />
          </a>
          <div className={classes.userpanel}>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg><a href="./iniciarsesion">Login</a> / <a href="./registrarse">Registrar</a>
          </div>
          {/* responsive */}
          <div className={classes.navswitch}>
          </div>
          {/* site menu */}
          <nav className={classes.mainmenu}>
            <ul>
              <li>
                <a href="./inicio">Inicio</a>
              </li>
              <li>
                <a href="./productos">Productos</a>
              </li>
              <li>
                <a href="./contactos">Contactos</a>
              </li>
              <li>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
