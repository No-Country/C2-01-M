import React from "react"
import {Link} from "react-router-dom"
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
      <div className="shop-detail">
      <div className='cart-title'>
        <h2>Detalle del pedido</h2>
      </div>
      {cartItem?.map((item) => {
        const { image, title, price, _id, cantidad } = item

        return (
          <div key={_id} className='card-container-cart'>
            
              <img src={image} alt={title} />
              <p>{title} </p>
              <span>Precio: {price} </span>
              <span>Unidades: {cantidad} </span>

              <img src="https://i.imgur.com/h67XBJJ.png" alt="garbage" className="icon-delete" onClick={() => deleteFromCart(item)}/>
              
            </div>
        
        )
      })}
      </div>
      <div className='check-container'>
        <div className="check-title">
          <h2>Resumen</h2>
        </div>
        <h3> Total Compra: {totalCart} </h3>
        <button>Iniciar Compra</button>
        {<Link to="/products">Seguir comprando</Link>}
      </div>
    </div>
  )
}
export default Cart
