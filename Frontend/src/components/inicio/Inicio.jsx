import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../inicio/Inicio.module.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
	<li><a href="./productos" className={classes.sitebtn}>Busca tú producto</a></li>

	</div>
	</div>
</section>

<section>
  <div className={classes.container}>
    <div className={classes.sectiontitle}>
      <h2 className={classes.titulo}>Noticias Gamers</h2>
    </div>
    <div className={classes.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc9ebc37d81a976c3/5e8cdc21baf2bd3cc4753c7a/IMAGE_2.jpg" />
      <Card.Body>
        <Card.Title>Esports</Card.Title>
        <Card.Text>
        Obtenga los últimos anuncios, noticias de actualidad, entrevistas, transacciones, reseñas de partidos y resúmenes de torneos de toda la escena de Valorant Esports.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images8.alphacoders.com/627/627080.png" />
      <Card.Body>
        <Card.Title>Lineups</Card.Title>
        <Card.Text>
        Eche un vistazo rápido a la Tasa de selección de todos los agentes en Valorant. Vea su porcentaje de ganancias promedio o la relación K/D. Las estadísticas están determinadas por los promedios globales de jugadores de las últimas dos semanas.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images8.alphacoders.com/124/1247192.png" />
      <Card.Body>
        <Card.Title>Insights</Card.Title>
        <Card.Text>
        Eche un vistazo rápido a la Tasa de selección de todos los agentes en Valorant. Vea su porcentaje de ganancias promedio o la relación K/D. Las estadísticas están determinadas por los promedios globales de jugadores de las últimas dos semanas.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</section>


			<Footer />
	
			</>
		)
	}

export default Inicio