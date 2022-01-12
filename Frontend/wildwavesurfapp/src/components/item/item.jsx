import React from "react"
import { useAddToCart } from "../../context/ProductContext"
import "./item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
  const { image, price, title, _id } = product

  const addToCart = useAddToCart()
  return (
    <div className='card-container'>
      <Link to={`/product/${_id}`}>
        <div className='like-container'>
          <img
            src='https://i.imgur.com/Rhy22Tn.png'
            alt='like'
            onClick={() => addToCart(product)}
          />
        </div>
      </Link>
      <div className='img-card'>
        <img src={image} alt={title + "-" + _id} />
      </div>
      <div className='info-card'>
        <p>{title}</p>
        <span> {price} </span>
      </div>
    </div>
  )
}
export default Item
