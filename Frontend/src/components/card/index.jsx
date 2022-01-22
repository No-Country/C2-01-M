import React from "react"

//styles
import { Container } from "./CardContainer.styles"

const CardContainer = (props) => {
  return <Container>{props.children}</Container>
}

export default CardContainer
