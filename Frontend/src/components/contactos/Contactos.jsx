import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Contactos (){
    return(
        <>
        <Header />
<section className="page-section spad contact-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="comment-title">Contactos</h4>
        <p>Cualquier servicio o pregunta que necesites estamos para servirte.</p>
        <div className="row">
          <div className="col-md-9">
            <ul className="contact-info-list">
              <li><div className="cf-left">Dirrección</div><div className="cf-right">Riobamba-Ecuador</div></li>
              <li><div className="cf-left">Celular</div><div className="cf-right">+593 960950555</div></li>
              <li><div className="cf-left">E-mail</div><div className="cf-right">janicechen@gmail.com</div></li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <a href="#"><i className="fa fa-pinterest" /></a>
          <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-twitter" /></a>
          <a href="#"><i className="fa fa-dribbble" /></a>
          <a href="#"><i className="fa fa-behance" /></a>
          <a href="#"><i className="fa fa-linkedin" /></a>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="contact-form-warp">
          <h4 className="comment-title">Envía tu mensaje</h4>
          <form className="comment-form">
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Nombre" />
              </div>
              <div className="col-md-6">
                <input type="email" placeholder="Email" />
              </div>
              <div className="col-lg-12">
                <input type="text" placeholder="Mensaje" />
                <textarea placeholder="Message" defaultValue={""} />
                <button className="site-btn btn-sm">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


    <Footer />
    </>

    )
}

export default Contactos