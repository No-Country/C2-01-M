import React, { useContext, useEffect, useState } from "react"
import Stepper from "../../components/steper"
import StepContainer from "../../components/steps/step-container"
import Products, { useGetDataBuy } from "../../context/ProductContext"

//styles
import { WrapperBuy, WrapperInfoBuy } from "./PurchaseCircuit.styles"
import Summary from "./Summary"

const PurchaseCircuit = () => {
  const [step, setStep] = useState(0)
  const getDataBuy = useGetDataBuy()
  const dataStep = [
    { description: "Personal information ", title: "" },
    { description: "Shipping ", title: "" },
    { description: "Pay", title: "" },
    { description: "Confirmation ", title: "" },
  ]
  const { infoUser } = useContext(Products)

  useEffect(() => {
    if (infoUser) {
      setStep(1)
      getDataBuy(infoUser?.user?.uid)
    }
  }, [infoUser])
  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "42px" }}>WILD WAVE SURF </h2>
      <div
        style={{
          borderBottom: "0.1px solid gray",
          margin: "30px 0",
          borderTop: ".1px solid gray",
          padding: "30px 0",
        }}
      >
        <Stepper dataStep={dataStep} stepUser={step} />
      </div>
      <WrapperBuy step={step}>
        <StepContainer control={step} setStep={setStep} />
        <WrapperInfoBuy>
          <div>{step !== 3 && <Summary />}</div>
        </WrapperInfoBuy>
      </WrapperBuy>
    </div>
  )
}

export default PurchaseCircuit
