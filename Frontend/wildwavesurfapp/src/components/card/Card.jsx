import React from "react"
import { CardStyle } from "./Card.styles"
import megusta from "../../assets/me-gusta.png"

function Card(props) {
	/* props:
			imagePath
			price
			title
	 */
	return (
		<CardStyle className='card-product-info'>
			<div className="image-container">
				<img src={props.imagePath} alt="product"></img>
			</div>
			<div className="card-like-container">
				<div>
					<img src={megusta} alt="Like"></img>
				</div>
			</div>
			<div className="card-title">
				{props.title}
			</div>
			<div className="card-price-detail">
				<span>${props.price}</span>
			</div>
		</CardStyle>
	)
}

export default Card

/* 
<Card 
		  imagePath="https://www.computerhope.com/jargon/r/random-dice.jpg" 
		  price="233" 
		  title="Hola mundo, esta es una prueba">
</Card>
*/