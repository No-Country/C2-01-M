import React, { useState } from "react"
import Login from "../../login"
import Register from "../../register"

//styles
import { WrapperSteps, WrapperButtons } from "./StepRegister.styles"

const StepRegister = () => {
  const [showRegister, setShowRegister] = useState(false)
  return (
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
  )
}

export default StepRegister
