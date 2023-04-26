import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../contactos/Contactos.module.css"

function Contactos (){
    return(
        <>
        <Header />
        <div>
  <div id="contact">
    <section>
      <div className={classes.container}>
        <h1>Contactos</h1>
        <div className="row">
          <div className="hello mb-4 mb-lg-0 col-12 col-lg-4 d-grid align-content-center" data-aos="fade-right" data-aos-duration={1000}>
            <span>Tienes alguna duda?</span>
            <p>Puedes escribirme</p>
            <div className="mt-5 more_info">
              <p>
                <i className="bi bi-geo-alt text-accent me-2 fs-5" />
                Ecuador
              </p>
              <p>
                <i className="bi bi-envelope-fill text-accent me-2 fs-5" />
                janicechen31997@hotmail.com
              </p>
            </div>
          </div>
          <div className="contact_form col-12 col-lg-8 d-grid align-content-center">
            <form id="contact_form" name="portfolio_form" data-aos="fade-left" data-aos-duration={1000}>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="form-floating">
                    <input type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
                    <label htmlFor="name">Nombre</label>
                    <div className="invalid-feedback small_label">
                      Escribe tu nombre
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                  <div className="form-floating">
                    <input type="email" name="email" id="email" placeholder="Your Email" className="form-control"/>
                    <label htmlFor="email">Email</label>
                    <div className="invalid-feedback small_label">
                      Valida tu email
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 mt-3">
                  <div className="form-floating">
                    <input type="text" name="subject" id="subject" placeholder="Subject" className="form-control" />
                    <label htmlFor="subject">Asunto</label>
                    <div className="invalid-feedback small_label">
                      Escribe tu duda
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 mt-3">
                  <div className="form-floating">
                    <textarea name="message" id="message" placeholder="Message" className="form-control" rows={5} maxLength={400} style={{maxHeight: 300, minHeight: 200}} required defaultValue={""} />
                    <label htmlFor="message">Mensaje</label>
                    <div className="invalid-feedback small_label">
                      Deja tu mensaje
                    </div>
                  </div>
                  <div className="valid-feedback text-end" style={{fontFamily: 'sans-serif'}} />
                </div>
                <div className="mt-3 text-center text-lg-end">
                <button id="remove-item" className="btn btn-outline-info">
                      <a href="./inicio">Enviar</a>
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


    <Footer />
    </>

    )
}

export default Contactos