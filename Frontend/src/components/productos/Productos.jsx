import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../productos/Productos.module.css";

function Productos() {
  return (
    <>
      <Header />

      <div>
        <main className="main">
          <div className="container">
            <div>
              {/* bbdd */}
            </div>

            <h1 className={classes.maintitle}>
              Los mejores videojuegos para disfrutar
            </h1>
            <section className={classes.containerproducts}>
              <div className={classes.product}>
                <img
                  src="https://eu-images.contentstack.com/v3/assets/blt95b381df7c12c15d/blt9f1cf5040a5f30b7/6393326a7af6ab52bc0e68b3/Valorant.png"
                  className={classes.product__img}
                />
                <section className={classes.carritoventa}>
                  <div className="product__description">
                    <h3 className={classes.producttitle}>Valorant</h3>
                    <span className={classes.productprice}>$10.00</span>
                  </div>
                  <div className={classes.buttoncompra}>
                    
                    <button id="remove-item" className="btn btn-outline-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <a href="./productoindividual">Añadir al carrito</a>
                    </button>
                  </div>
                </section>
              </div>
              <div className={classes.product}>
                <img
                  src="https://www.riotgames.com/darkroom/1440/08bcc251757a1f64e30e0d7e8c513d35:be16374e056f8268996ef96555c7a113/wr-cb1-announcementarticle-banner-1920x1080.png"
                  className="product__img"
                />
                <section className={classes.carritoventa}>
                  <div className="product__description">
                    <h3 className={classes.producttitle}>Wilf Rift</h3>
                    <span className={classes.productprice}>$5.00</span>
                  </div>
                  <div className={classes.buttoncompra}>
                   
                    <button id="remove-item" className="btn btn-outline-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <a href="./productoindividual">Añadir al carrito</a>
                    </button>
                  </div>
                </section>
              </div>
              <div className={classes.product}>
                <img
                  src="https://picoparkgame.com/assets/img/hero/poster.png"
                  className="product__img"
                />
                <section className={classes.carritoventa}>
                  <div className="product__description">
                    <h3 className={classes.producttitle}>Pico Park</h3>
                    <span className={classes.productprice}>$4.30</span>
                  </div>
                  <div className={classes.buttoncompra}>
                    <button id="remove-item" className="btn btn-outline-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <a href="./productoindividual">Añadir al carrito</a>
                    </button>
                  </div>
                </section>
              </div>
              <div className={classes.product}>
                <img
                  src="https://media.airedesantafe.com.ar/p/5ba61268f6afc49d969b77e0fb0e3c80/adjuntos/268/imagenes/003/416/0003416558/1200x675/smart/minecraftpng.png"
                  className="product__img"
                />
                <section className={classes.carritoventa}>
                  <div className="product__description">
                    <h3 className={classes.producttitle}>Minecraft</h3>
                    <span className={classes.productprice}>$25.00</span>
                  </div>
                  <div className={classes.buttoncompra}>
                    <button id="remove-item" className="btn btn-outline-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <a href="./productoindividual">Añadir al carrito</a>
                    </button>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </main>
        <br />
      </div>

      <Footer />
    </>
  );
}

export default Productos;
