import React from "react"
import { Link } from "react-router-dom"
import { useItemQty, useTotalCart } from "../../context/ProductContext"

// styles
import { WrapperSummary } from "./PurchaseCircuit.styles"

const Summary = () => {
  const totalCart = useTotalCart()
  const ItemQty = useItemQty()
  return (
    <WrapperSummary>
      <div className='check-title'>
        <h2>Summary </h2>
      </div>
      <div className='check-data'>
        <h3>
          <span>Total Items: </span> <span>{ItemQty}</span>
        </h3>
        <h3>
          <span>Total Buy:</span> <span>${totalCart}</span>
        </h3>
        {<Link to='/products'>Keep buying</Link>}
      </div>
      <div className='shipping'>
        <h2>Shipping information </h2>
        <h3>Shipping method: </h3>
      </div>
    </WrapperSummary>
  )
}

export default Summary
