import React from "react"
import back from "../../assets/back.svg"
import { useNavigate } from "react-router-dom"
import Counter from "../counter/counter"
import { Link } from "react-router-dom"
import cardsCredit from "../../assets/cards-credit.png"

// styles
import { ItemDetailsStyle } from "./ItemDetails.styles"

function ItemDetails({ product, onAdd, goCart }) {
  const { image, details, price, title, _id } = product
  const navigate = useNavigate()

  return (
    <ItemDetailsStyle>
      <div className='arrow-back'>
        <img src={back} alt='back' onClick={() => navigate("/products")} />
        <span onClick={() => navigate("/products")}>Back</span>
      </div>

      <div className='grid-centrador'>
        <section className='itemDetailsContainer'>
          <div className='imageContainer'>
            <img src={image} alt={title + "-" + _id} />
          </div>

          <div className='detailsItems'>
            <div className='block'>
              <span className='title'>{title}</span>
            </div>

            <div className='block'>
              <span>{details}</span>
            </div>

            <div className='block'>
              <img
                className='imageTarjetas'
                src={cardsCredit}
                alt='formas de pago aceptadas'
              />
            </div>

            <div className='block'>
              <span>Price: ${price}</span>
            </div>
            {goCart ? (
              <Link to='/cart' className='finish-shop'>
                Finish buying
              </Link>
            ) : (
              <div className='block'>
                <div className='buttonAddToCart'>
                  <Counter onAdd={onAdd} />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </ItemDetailsStyle>
  )
}
export default ItemDetails
