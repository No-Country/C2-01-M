import React, { useEffect, useState } from "react"
import { Steps } from "./Steper.styles"
import "antd/dist/antd.css"

const Stepper = ({ dataStep, stepUser, setStep }) => {
  const { Step } = Steps
  const [curren, setCurren] = useState(0)
  const onChange = (e) => {
    setCurren(e)
    setStep(e)
  }
  useEffect(() => {
    setCurren(stepUser)
  }, [stepUser])
  return (
    <>
      <Steps
        current={curren}
        onChange={onChange}
        direction='horizontal'
        responsive={true}
      >
        {dataStep &&
          dataStep.map((step, index) => {
            return (
              <Step
                key={index}
                title={step.title}
                description={step.description}
                style={{ paddingLeft: "40px" }}
              />
            )
          })}
      </Steps>
    </>
  )
}

export default Stepper
