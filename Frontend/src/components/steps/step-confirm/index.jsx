import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import warning from "../../../assets/warning.svg"

// styles
import { Wrapper } from "./StepConfirm.styles"

const StepConfirm = () => {
  const navigate = useNavigate()
  const average = [1, 2, 3, 4, 5]
  const [state, setState] = useState(0)
  return (
    <Wrapper>
      <div>
        <img src={warning} alt='warning' width={200} />
      </div>

      <h2>Your order will be processed when you make the payment </h2>
      <h3>
        We will confirm your order when the payment has been confirmed. Thank
        you very much for choosing us!{" "}
      </h3>
      <div>
        <button>SEE COUPON</button>
      </div>
      <h3>How was your experience in Wild Wave Surf ? </h3>
      <div>
        {average.map((item) => {
          return (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='84'
              height='84'
              viewBox='0 0 24 24'
              onClick={() => setState(item)}
              onMouseOver={() => setState(item)}
              style={{ marginLeft: "20px" }}
            >
              <path
                d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z'
                fill={item <= state ? "red" : "gray"}
              />
            </svg>
          )
        })}
      </div>
      <div className='comments'>
        <h3>Do you want to leave us your comment? </h3>
        <textarea name='comments' id='comments' cols='40' rows='5'></textarea>
      </div>
      <div>
        <button onClick={() => navigate("/products")}>Qualify</button>
      </div>
    </Wrapper>
  )
}

export default StepConfirm
