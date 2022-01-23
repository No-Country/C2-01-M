import React from "react"

// styles
import { WrapperMessage } from "./Message.styles"

const Message = ({ msg, className }) => {
  return (
    <WrapperMessage>
      <div className={className}>{msg}</div>
    </WrapperMessage>
  )
}

export default Message
