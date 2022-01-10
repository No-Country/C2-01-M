import React from "react"
import { ItemDetailsStyle } from "./ItemDetails.styles"
import imageAddToCart from "../../assets/trolley.svg"

function ItemDetails(){
	return (
		<ItemDetailsStyle>
			<section className="itemDetailsContainer">
				<div className="imageContainer">
					<img src="https://i2.wp.com/imagenesparapeques.com/wp-content/uploads/2021/01/Imagenes-PNG-de-among-us.png?ssl=1" alt="imagen del producto" />
				</div>

				<div className="detailsItems">
					<div className="block">
						<span className="title">Título ‼</span>
					</div>

					<div className="block">
						<img className="imageTarjetas" src="https://www.volcom.com.ar//images/ico-tarjcredito2.png" alt="formas de pago aceptadas" />
					</div>

					<div className="block">
						<span>Precio: $300 ‼</span>
					</div>

					<div className="block">
						<span>Cantidad: </span>‼‼
					</div>

					<div className="block">
						<span>Talla:</span>
					</div>

					<div className="block">
						<div className="tallasContainer">
							<div><span>XS</span></div>
							<div><span>S</span></div>
							<div><span>M</span></div>
							<div><span>L</span></div>
							<div><span>XL</span></div>
							<div><span>XXL</span></div>
						</div>
					</div>

					<div className="block">
						<div className="buttonAddToCart">
							<button>
								<img src={imageAddToCart} alt="add to cart icon" />
								<span>Añadir</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</ItemDetailsStyle>
	)
}
export default ItemDetails