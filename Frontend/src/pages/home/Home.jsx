import React, { useContext } from "react";
import CardContainer from "../../components/card";
import FeaturedProducts from "../../components/featured-products";
import HeroImage from "../../components/hero-imgen";
import Landing from "../../components/landing/landing";
import quoteLeft from "../../assets/quote-left.svg";
import quoteRight from "../../assets/quote-right.svg";
import featured1 from "../../assets/featured1.jpg";
import featured2 from "../../assets/featured2.webp";
import { Link } from "react-router-dom";

// styles
import {
  WrapperHeroImage,
  SurfboardsTitle,
  WrapperComments,
  WrapperImg,
} from "./Home.styles";
import Products from "../../context/ProductContext";

const Home = () => {
  const { comments } = useContext(Products);
  return (
    <div>
      <Landing />
      <FeaturedProducts title="FEATURED PRODUCTS" />
      <WrapperHeroImage>
        <Link to="/products?filter=clothing">
          <HeroImage
            url={featured1}
            styles={{
              cursor: "pointer",
            }}
          />
        </Link>
        <Link to="/products?filter=surfboards">
          <HeroImage
            url={featured2}
            styles={{
              height: "400px",
              transform: "rotate(-15deg)",
              cursor: "pointer",
            }}
          >
            <SurfboardsTitle>surfboards</SurfboardsTitle>
          </HeroImage>
        </Link>
      </WrapperHeroImage>
      <WrapperComments className="img1">
        {comments &&
          comments.slice(0, 5).map((comment, index) => {
            return (
              <CardContainer key={index}>
                <WrapperImg>
                  <img src={quoteLeft} alt="quote left" className="imgQuote" />
                </WrapperImg>

                <p>{comment.comment}</p>
                <p style={{ textTransform: "capitalize" }}>
                  {comment?.name?.name?.toLowerCase()}
                </p>
                <WrapperImg right={true}>
                  <img src={quoteRight} alt="quote right" />
                </WrapperImg>
              </CardContainer>
            );
          })}
      </WrapperComments>
    </div>
  );
};

export default Home;
