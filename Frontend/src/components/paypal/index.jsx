/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react"
import { useDeleteAllItems, useTotalCart } from "../../context/ProductContext"

const PayPal = ({ setStep }) => {
  const paypal = useRef()
  const totalCart = useTotalCart()
  const deleteAllItems = useDeleteAllItems()

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                descriptions: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: totalCart,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture(confirmBuy())
          console.log("Successful order" + order)
        },
        onError: (err) => {
          console.log(err)
        },
      })

      .render(paypal.current)
  }, [])
  const confirmBuy = () => {
    setStep(3)
    deleteAllItems()
  }
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

export default PayPal
