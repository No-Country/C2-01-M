import React from "react"
import Input from "./input/input"
import PropTypes from "prop-types"

const FormControl = (props) => {
  const { control, ...rest } = props

  switch (control) {
    case "input":
      return <Input {...rest} />

    default:
      return null
  }
}

FormControl.propTypes = {
  control: PropTypes.string.isRequired,
}

export default FormControl
