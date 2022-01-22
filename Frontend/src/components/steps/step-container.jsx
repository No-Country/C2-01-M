import StepBuy from "./step-buy"
import StepConfirm from "./step-confirm"
import StepRegister from "./step-register"
import StepShipping from "./step-shipping"

const StepContainer = (props) => {
  const { control, setStep } = props

  switch (control) {
    case 0:
      return <StepRegister />
    case 1:
      return <StepShipping setStep={setStep} />
    case 2:
      return <StepBuy setStep={setStep} />
    case 3:
      return <StepConfirm setStep={setStep} />
    default:
      return null
  }
}

export default StepContainer
