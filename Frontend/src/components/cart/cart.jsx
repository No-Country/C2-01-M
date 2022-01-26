import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { add, desc, trashBlack } from "../../assets"

// context
import {
  useCartItem,
  useDeleteFromCart,
  useItemQty,
  useTotalCart,
  useDeleteAllItems,
  useCounterItems,
} from "../../context/ProductContext"

// styles
import "./cart.css"

const Cart = () => {
  const cartItem = useCartItem()
  const deleteFromCart = useDeleteFromCart()
  const totalCart = useTotalCart()
  const ItemQty = useItemQty()
  const deleteAllItems = useDeleteAllItems()
  const counterItems = useCounterItems()
  const navigate = useNavigate()

  const deleteItems = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete everything? This action has no turning back "
    )
    if (confirm) deleteAllItems()
  }

  return cartItem.length === 0 ? (
    <div className='empty-cart'>
      <h3>You have not added products to your cart </h3>
      <Link to='/products'> Products </Link>
    </div>
  ) : (
    <div className='cart-container'>
      <div className='shop-detail'>
        <div className='cart-title'>
          <h2>Order detail </h2>
        </div>
        {cartItem?.map((item) => {
          const { image, title, price, _id, cantidad } = item
          return (
            <div key={_id} className='card-container-cart' aria-current={true}>
              <img src={image} alt={title} className='img-cart' />
              <p className='title'>{title} </p>
              <span>Price: ${price} </span>
              <span className='units'>
                Units:
                {cantidad > 1 && (
                  <img
                    src={desc}
                    alt='add'
                    className='img-add'
                    style={{
                      width: "12px",
                      display: "inline",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    onClick={() => counterItems(item, "desc")}
                  />
                )}
                {cantidad}
                <img
                  src={add}
                  alt='add'
                  style={{
                    width: "12px",
                    display: "inline",
                    marginLeft: "5px",
                  }}
                  onClick={() => counterItems(item, "sum")}
                />
              </span>
              <img
                src={trashBlack}
                alt='garbage'
                className='icon-delete'
                onClick={() => deleteFromCart(item)}
              />
            </div>
          )
        })}
      </div>

      <div className='check-container'>
        <div className='check-title'>
          <h2>Summary </h2>
        </div>
        <div className='check-data'>
          <h3>Total Items: {ItemQty} </h3>

          <h3> Total Buy: ${totalCart} </h3>

          <button onClick={() => navigate("/purchaseCircuit")}>
            Initial Buy
          </button>
          {<Link to='/products'>Keep buying</Link>}
        </div>
        <div className='button-delete-all'>
          <button onClick={() => deleteItems()}>CLEAN CART</button>
        </div>
      </div>
    </div>
  )
}
export default Cart
