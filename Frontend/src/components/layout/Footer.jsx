import React from 'react'
import Contactos from '../contactos/Contactos'
import classes from '../layout/Footer.module.css'


export default function Footer() {
  return (
    <div className={classes.footerfin}>
      <footer className="footer-section">
  <div className="container">
    <ul className="footer-menu">
      <li><a href="./inicio">Inicio</a></li>
      <li><a href="./productos">Productos</a></li>
      <li><a href="./contactos">Contactos</a></li>
    </ul>
    <p className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      Copyright © por <a href="https://www.instagram.com/hey.janiz/" target="_blank">Janice Chen</a>
      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    </p>
  </div>
</footer>
    </div>
  )
}
