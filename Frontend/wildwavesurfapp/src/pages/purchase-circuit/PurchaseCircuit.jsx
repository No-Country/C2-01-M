import React, { useState } from "react"
import Login from "../../components/login"
import Register from "../../components/register"
import Stepper from "../../components/steper"

//styles
import {
  WrapperBuy,
  WrapperSteps,
  WrapperButtons,
  WrapperInfoBuy,
} from "./PurchaseCircuit.styles"
import Summary from "./Summary"

const PurchaseCircuit = () => {
  const [showRegister, setShowRegister] = useState(false)
  const dataStep = [
    { description: "Personal information ", title: "" },
    { description: "Shipping ", title: "" },
    { description: "Pay", title: "" },
    { description: "Confirmation ", title: "" },
  ]
  return (
    <div>
      <h1>WILD WAVE SURF </h1>
      <div
        style={{
          borderBottom: "0.1px solid gray",
          margin: "30px 0",
          borderTop: ".1px solid gray",
          padding: "30px 0",
        }}
      >
        <Stepper dataStep={dataStep} />
      </div>
      <WrapperBuy>
        <WrapperSteps>
          <WrapperButtons>
            <button
              onClick={() => setShowRegister(false)}
              style={{
                background: !showRegister && "gray",
                color: !showRegister && "#fff",
              }}
            >
              I ALREADY HAVE A USER
            </button>
            <button
              onClick={() => setShowRegister(true)}
              style={{
                background: showRegister && "gray",
                color: showRegister && "#fff",
              }}
            >
              REGISTER
            </button>
          </WrapperButtons>
          {!showRegister ? <Login buy={true} /> : <Register buy={true} />}
        </WrapperSteps>
        <WrapperInfoBuy>
          <div>
            <Summary />
          </div>
        </WrapperInfoBuy>
      </WrapperBuy>
    </div>
  )
}

export default PurchaseCircuit
