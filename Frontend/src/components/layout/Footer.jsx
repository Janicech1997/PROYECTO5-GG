import React from 'react'
import Contactos from '../contactos/Contactos'
import classes from '../layout/Footer.module.css'


export default function Footer() {
  return (
    <div className={classes.footerfin}>
      <footer className="footer-section">
  <div className="container">
    <ul className="footer-menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="review.html">Games</a></li>
      <li><a href="categories.html">Blog</a></li>
      <li><a href="community.html">Forums</a></li>
    </ul>
    <p className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    </p>
  </div>
</footer>
    </div>
  )
}
