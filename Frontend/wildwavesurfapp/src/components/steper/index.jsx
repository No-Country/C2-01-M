import React, { useState } from "react"
import { Steps } from "./Steper.styles"
import "antd/dist/antd.css"
import { Popover } from "antd"

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span style={{ fontSize: "16px" }}>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
)

const Stepper = ({ dataStep }) => {
  const { Step } = Steps
  const [curren, setCurren] = useState(0)
  console.log(dataStep)
  const onChange = (e) => {
    setCurren(e)
  }

  return (
    <>
      <Steps
        current={curren}
        onChange={onChange}
        direction='horizontal'
        progressDot={customDot}
      >
        {dataStep &&
          dataStep.map((step, index) => {
            return (
              <Step
                key={index}
                title={step.title}
                description={step.description}
              />
            )
          })}
      </Steps>
    </>
  )
}

export default Stepper