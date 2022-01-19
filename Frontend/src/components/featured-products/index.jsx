import React from "react"
import ItemListContainer from "../item/itemListContainer"

//styles
import { Wrapper } from "./FeaturedProducts.styles"

const FeaturedProducts = () => {
  return (
    <Wrapper>
      <h1>FEATURED PRODUCTS</h1>
      <ItemListContainer featured={true} />
    </Wrapper>
  )
}

export default FeaturedProducts
