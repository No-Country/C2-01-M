import React from "react";
import { useCartItem, useDeleteFromCart } from "../../context/ProductContext";
import "./cart.css"

const Cart =()=>{

    const cartItem = useCartItem()  
    const deleteFromCart = useDeleteFromCart()

    return(
        <div className="cart-container">
            <div className="cart-title">
                <h1>Carrito</h1>
            </div>
            {
                cartItem?.map((item)=>{

                    const{image, title, price, id} = item

                    return(
                        <div key={id} className="card-container-cart">
                            <img src={image} alt={title} />
                            <p>{title} </p>
                            <span>${price} </span>
                            <button type="button" onClick={()=> deleteFromCart(item)}>Eliminar</button>
                        </div>
                    )
                })
            }
        </div>
    
    )
}
export default Cart