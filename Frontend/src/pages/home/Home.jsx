import React from "react"
import CardContainer from "../../components/card"
import FeaturedProducts from "../../components/featured-products"
import HeroImage from "../../components/hero-imgen"
import Landing from "../../components/landing/landing"
import quoteLeft from "../../assets/quote-left.svg"
import quoteRight from "../../assets/quote-right.svg"

// styles
import {
  WrapperHeroImage,
  SurfboardsTitle,
  WrapperComments,
  WrapperImg,
} from "./Home.styles"

const Home = () => {
  const comments = localStorage.getItem("comments")

  return (
    <div>
      <Landing />
      <FeaturedProducts />
      <WrapperHeroImage>
        <HeroImage
          url={"https://www.volcom.com.ar/fullaccess/banner76.jpg"}
          styles={{
            cursor: "pointer",
          }}
        />
        <HeroImage
          url={
            "https://cdn.pixabay.com/photo/2015/11/19/14/02/tables-1051165_960_720.jpg "
          }
          styles={{
            height: "400px",
            transform: "rotate(-15deg)",
            cursor: "pointer",
          }}
        >
          <SurfboardsTitle>surfboards</SurfboardsTitle>
        </HeroImage>
      </WrapperHeroImage>
      <WrapperComments>
        {comments &&
          JSON.parse(comments).map((comment, index) => {
            return (
              <CardContainer key={index}>
                <WrapperImg>
                  <img src={quoteLeft} alt='quote left' />
                </WrapperImg>

                <p>{comment}</p>
                <WrapperImg right={true}>
                  <img src={quoteRight} alt='quote right' />
                </WrapperImg>
              </CardContainer>
            )
          })}
      </WrapperComments>
    </div>
  )
}

export default Home
