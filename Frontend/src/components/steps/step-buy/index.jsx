import React from "react"
import { useGetDataBuy } from "../../../context/ProductContext"

// styles
import { WrapperSteps } from "./StepBuy.styles"

const StepBuy = ({ setStep }) => {
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
          <img
            src='https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png'
            alt='pay-pal'
            width={300}
            height={"auto"}
          />

          <button
            onClick={() => {
              setStep(3)
              return getDataBuy("payPal")
            }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </WrapperSteps>
  )
}

export default StepBuy
