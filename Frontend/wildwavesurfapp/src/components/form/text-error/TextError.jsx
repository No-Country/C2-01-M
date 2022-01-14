import React from "react"
import PropTypes from "prop-types"

// styles
import { WrapperError } from "./TextError.Styles"

const TextError = (props) => {
  return <WrapperError $bsStyle={props.styles}>{props.children}</WrapperError>
}
TextError.propTypes = {
  children: PropTypes.string.isRequired,
}

export default TextError
