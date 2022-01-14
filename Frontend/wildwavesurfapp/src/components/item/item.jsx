import React from "react"
import { useAddToCart } from "../../context/ProductContext"
import "./item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
  const { image, price, title, _id } = product

  const addToCart = useAddToCart()
  return (
    <div className='card-container'>
      
        <div className='like-container'>
          <img
            src='https://i.imgur.com/Wst88e8.png'
            alt='like'
            onClick={() => addToCart(product)}
          />
        </div>
      <Link to={`/product/${_id}`}>
        <div className='img-card'>
          <img src={image} alt={title + "-" + _id} />
        </div>
      </Link>
      <div className='info-card'>
        <p>{title}</p>
        <span> ${price} </span>
      </div>
    </div>
  )
}
export default Item
