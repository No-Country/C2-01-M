import React from "react"

import {
  WrapperSteps,
  WrapperRadio,
  WrapperSubtitle,
  Radio,
} from "./StepShipping.styles"

const dataBuy = [
  {
    id: 1,
    name: "shipping",
    label: "Free",
    value: "free",
    title: "on-site pickup",
    subTitle:
      "From 3 to 10 business days once the purchase is made. Changes must be made in first-class stores.",
  },
  {
    id: 2,
    name: "shipping",
    label: "400$",
    value: "express",
    title: "KVN- Express delivery CABA and north zone ",
    subTitle:
      "KVN- Express shipping CABA and north zone, from 48 to 72 hours skillful.",
  },
  {
    id: 3,
    name: "shipping",
    label: "From 350$",
    value: "pickit",
    title: "PICKIT- Delivery to pick-up point ",
    subTitle:
      "Withdraw from your nearest PICKIT point. Shipments to AMBA, from 2 to 4 business days. .",
  },
  {
    id: 4,
    name: "shipping",
    label: "650$",
    value: "iflow",
    title: "IFLOW- Home delivery ",
    subTitle:
      "Shipments to AMBA, from 3 to 7 business days. Shipments to the interior up to 15 business days .",
  },
]

const StepShipping = ({ setStep }) => {
  return (
    <WrapperSteps>
      <h2>Shipments </h2>
      {dataBuy &&
        dataBuy.map((item) => {
          return (
            <WrapperRadio key={item.id}>
              <Radio>
                <label htmlFor='free'>{item.label}</label>
                <input
                  type='radio'
                  name={item.name}
                  id={item.name}
                  value={item.value}
                  onChange={(e) => console.log(e.target.value)}
                />
              </Radio>

              <WrapperSubtitle>
                <h3>{item.title}</h3>
                <h4>{item.subTitle}</h4>
              </WrapperSubtitle>
            </WrapperRadio>
          )
        })}
      <div className='wrapper-button'>
        <button onClick={() => setStep(2)}>CONTINUE</button>
      </div>
    </WrapperSteps>
  )
}

export default StepShipping
