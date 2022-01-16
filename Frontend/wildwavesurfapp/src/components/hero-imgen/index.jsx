import React from "react"

// styles
import { Container } from "./HeroImage.styles"

const HeroImage = (props) => {
  console.log(props.url)
  const { children, url, styles, ...rest } = props
  return (
    <Container url={url} $bsStyle={styles} {...rest}>
      {children}
    </Container>
  )
}

export default HeroImage
