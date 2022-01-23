import React from "react"

// styles
import { WrapperError } from "./TextError.Styles"

const TextError = (props) => {
  return <WrapperError $bsStyle={props.styles}>{props.children}</WrapperError>
}

export default TextError
