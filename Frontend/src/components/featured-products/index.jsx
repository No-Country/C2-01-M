import React from "react";
import ItemListContainer from "../item/itemListContainer";

//styles
import { Wrapper } from "./FeaturedProducts.styles";

const FeaturedProducts = ({ title }) => {
  return (
    <Wrapper className="img1">
      <h1>{title} </h1>
      <ItemListContainer featured={true} />
    </Wrapper>
  );
};

export default FeaturedProducts;
