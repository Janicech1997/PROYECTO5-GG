import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header-section">
        <div className="container">
          {/* logo */}
          <a className="site-logo" href="index.html">
            <img src="img/logo.png" alt />
          </a>
          <div className="user-panel">
            <a href="./iniciarsesion">Login</a> / <a href="./registrarse">Registrar</a>
          </div>
          {/* responsive */}
          <div className="nav-switch">
            <i className="fa fa-bars" />
          </div>
          {/* site menu */}
          <nav className="main-menu">
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
               <a href="./contactos"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg></a>

              </li>
              
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
