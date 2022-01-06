import "./Card.css"

function Card(props) {
	/* props:
			imagePath
			price
			title
	 */
	return (
		<div className='card-product-info'>
			<div className="image-container">
				<img src={props.imagePath} alt="product"></img>
			</div>
			<div className="card-like-container">
				<div>
					{/* Corregir ruta del icono, se encuentra en /public/me-gusta.png */}
					<img src="https://e7.pngegg.com/pngimages/507/757/png-clipart-computer-icons-heart-like-button-like-share-comment-love-logo.png" alt="Like"></img>
				</div>
			</div>
			<div className="card-title">
				{props.title}
			</div>
			<div className="card-price-detail">
				<span>${props.price}</span>
			</div>
		</div>
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