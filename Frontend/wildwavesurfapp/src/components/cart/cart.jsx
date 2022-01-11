import React from "react"
import {
  useCartItem,
  useDeleteFromCart,
  useTotalCart,
} from "../../context/ProductContext"
import "./cart.css"

const Cart = () => {
  const cartItem = useCartItem()
  const deleteFromCart = useDeleteFromCart()
  const totalCart = useTotalCart()

  return (
    <div className='cart-container'>
      <div className='cart-title'>
        <h1>Carrito</h1>
      </div>
      {cartItem?.map((item) => {
        const { image, title, price, _id, cantidad } = item

        return (
          <div key={_id}>
            <div className='card-container-cart'>
              {/* <img src={image} alt={title} /> */}
              <p>{title} </p>
              <span>precio: {price} </span>
              <span>unidades: {cantidad} </span>

              <button
                type='button'
                className='delete-item'
                onClick={() => deleteFromCart(item)}
              >
                Eliminar
              </button>
            </div>
          </div>
        )
      })}
      <div className='total-cart'>
        <h3> Total Compra: {totalCart} </h3>
      </div>
    </div>
  )
}
export default Cart
