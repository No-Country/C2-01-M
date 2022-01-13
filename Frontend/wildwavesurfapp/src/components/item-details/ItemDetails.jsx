import React from "react"
import { ItemDetailsStyle } from "./ItemDetails.styles"
import imageAddToCart from "../../assets/trolley.svg"
import back from "../../assets/back.svg"
import { useAddToCart } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"

function ItemDetails({ product }) {
  const { image, price, title, _id } = product
  const addToCart = useAddToCart()
  const navigate = useNavigate()

  return (
    <ItemDetailsStyle>
      <div className='arrow-back'>
        <img src={back} alt='back' onClick={() => navigate("/products")} />
        <span onClick={() => navigate("/products")}>Back</span>
      </div>

      <section className='itemDetailsContainer'>
        <div className='imageContainer'>
          <img src={image} alt={title + "-" + _id} />
        </div>

        <div className='detailsItems'>
          <div className='block'>
            <span className='title'>{title}</span>
          </div>

          <div className='block'>
            <img
              className='imageTarjetas'
              src='https://www.volcom.com.ar//images/ico-tarjcredito2.png'
              alt='formas de pago aceptadas'
            />
          </div>

          <div className='block'>
            <span>Precio: ${price}</span>
          </div>

          {/* <div className="block">
						<span>Cantidad: </span>‼‼
					</div>

					<div className="block">
						<span>Talla:</span>
					</div> */}

          {/* <div className="block">
						<div className="tallasContainer">
							<div><span>XS</span></div>
							<div><span>S</span></div>
							<div><span>M</span></div>
							<div><span>L</span></div>
							<div><span>XL</span></div>
							<div><span>XXL</span></div>
						</div>
					</div> */}

          <div className='block'>
            <div className='buttonAddToCart'>
              <button onClick={() => addToCart(product)}>
                <img src={imageAddToCart} alt='add to cart icon' />
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
