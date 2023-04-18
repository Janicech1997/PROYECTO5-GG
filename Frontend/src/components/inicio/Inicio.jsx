import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../inicio/Inicio.module.css"

function Inicio (){
		return(
			<>
			<Header />	
<section>
	  <div>
	  <div className={classes.inicio}>
 	 <h1 style={{ color:"whitesmoke"}}> Tú mundo gamer esta por comenzar</h1>
	 <br />
  	<h2 style={{ color:"whitesmoke"}}>Haz match con los mejores teams</h2>
	<br />
	<li><a href="./productos" className="site-btn">Busca tú producto</a></li>

	</div>
	</div>
</section>

<section className="noticiasgamer recent-game-section spad set-bg">
  <div className="container">
    <div className="section-title">
      <h2>Noticias Gamers</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="recent-game-item">
        <div className="rgi-thumb set-bg"><img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc9ebc37d81a976c3/5e8cdc21baf2bd3cc4753c7a/IMAGE_2.jpg" alt />
            <div className="cata new">Esports</div>
          </div>
          <div className="rgi-content">
            <p>Obtenga los últimos anuncios, noticias de actualidad, entrevistas, transacciones, reseñas de partidos y resúmenes de torneos de toda la escena de Valorant Esports.</p>
            <a href="#" className="comment">3 Comments</a>
            <div className="rgi-extra">
              <div className="rgi-star"><img src="img/icons/star.png" alt /></div>
              <div className="rgi-heart"><img src="img/icons/heart.png" alt /></div>
            </div>
          </div>
        </div>	
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="recent-game-item">
        <div className="rgi-thumb set-bg"><img src="https://images8.alphacoders.com/627/627080.png" alt />
            <div className="cata racing">Lineups</div>
          </div>
          <div className="rgi-content">
            <p>Encuentre alineaciones útiles para sus agentes, mapas y habilidades favoritos. Comparta ese coeficiente intelectual de 200 suyo y envíe sus propias guías para desbloquear premios de perfil únicos.</p>
            <a href="#" className="comment">3 Comments</a>
            <div className="rgi-extra">
              <div className="rgi-star"><img src="img/icons/star.png" alt /></div>
              <div className="rgi-heart"><img src="img/icons/heart.png" alt /></div>
            </div>
          </div>
        </div>	
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="recent-game-item">
          <div className="rgi-thumb set-bg"><img src="https://images8.alphacoders.com/124/1247192.png" alt />
            <div className="cata adventure">Insights</div>
          </div>
          <div className="rgi-content">
            <p>Eche un vistazo rápido a la Tasa de selección de todos los agentes en Valorant. Vea su porcentaje de ganancias promedio o la relación K/D. Las estadísticas están determinadas por los promedios globales de jugadores de las últimas dos semanas.</p>
            <a href="#" className="comment">3 Comments</a>
            <div className="rgi-extra">
              <div className="rgi-star"><img src="img/icons/star.png" alt /></div>
              <div className="rgi-heart"><img src="img/icons/heart.png" alt /></div>
            </div>
          </div>
        </div>	
      </div>
    </div>
  </div>
</section>


			<Footer />
	
			</>
		)
	}

export default Inicio