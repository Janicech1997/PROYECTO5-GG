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

<section className="recent-game-section spad set-bg" data-setbg="img/recent-game-bg.png">
  <div className="container">
    <div className="section-title">
      <div className="cata new">new</div>
      <h2>Recent Games</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="recent-game-item">
          <div className="rgi-thumb set-bg" data-setbg="img/recent-game/1.jpg">
            <div className="cata new">new</div>
          </div>
          <div className="rgi-content">
            <h5>Suspendisse ut justo tem por, rutrum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
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
          <div className="rgi-thumb set-bg" data-setbg="img/recent-game/2.jpg">
            <div className="cata racing">racing</div>
          </div>
          <div className="rgi-content">
            <h5>Susce pulvinar metus nulla, vel  facilisis sem </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
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
          <div className="rgi-thumb set-bg" data-setbg="img/recent-game/3.jpg">
            <div className="cata adventure">Adventure</div>
          </div>
          <div className="rgi-content">
            <h5>Suspendisse ut justo tem por, rutrum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
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