import React from "react"
import { Field, ErrorMessage } from "formik"
import TextError from "../text-error/TextError"
import PropTypes from "prop-types"

import { Wrapper } from "./Input.Styles"

const Input = (props) => {
  const { label, name, ...rest } = props
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className={"input"} />
      <ErrorMessage name={name} component={TextError} />
    </Wrapper>
  )
}
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
}
Input.defaultProps = {
  label: "",
  name: "",
}

export default Input
