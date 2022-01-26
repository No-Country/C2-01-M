import React, { useState } from "react"
import { useGetDataBuy } from "../../../context/ProductContext"
import paypal from "../../../assets/paypal.webp"

// styles
import { WrapperSteps } from "./StepBuy.styles"
import PayPal from "../../paypal"

const StepBuy = ({ setStep }) => {
  const [checkout, setCheckout] = useState(false)
  const getDataBuy = useGetDataBuy()

  return (
    <WrapperSteps>
      <div className='pay'>
        <h2>Pay </h2>
        <p>
          IMPORTANT INFORMATION: Please check that your order is complete before
          signing the mail receipt. If you can see that the package is open or
          its packaging has been damaged, reject it and let us know so that we
          can make a claim. After signing the delivery agreement you can only
          claim for faults or garment errors, but NOT for missing items in the
          order.
        </p>
      </div>
      <div>
        <h2>IS YOUR REQUEST FOR A GIFT? </h2>
        <div className='gift'>
          <input
            type='radio'
            name='gift'
            id='gift'
            value={"gift"}
            onChange={(e) => getDataBuy(e.target.value)}
          />
          <label htmlFor='gift'>Yes</label>
        </div>
        <div className='gift'>
          <input
            type='radio'
            name='someone'
            id='someone'
            value={"someone"}
            onChange={(e) => getDataBuy(e.target.value)}
          />
          <label htmlFor='someone'>
            Is someone else going to pick up the order?
          </label>
        </div>
      </div>
      <div>
        <h2>SELECT THE PAYMENT METHOD </h2>
        <div className='pay-pal'>
          <img src={paypal} alt='pay-pal' width={300} height={"auto"} />
          {checkout ? (
            <PayPal setStep={setStep} />
          ) : (
            <button
              onClick={() => {
                setCheckout(true)
                return getDataBuy("payPal")
              }}
              className='button-paypal'
            >
              CONTINUE
            </button>
          )}
        </div>
      </div>
    </WrapperSteps>
  )
}

export default StepBuy
