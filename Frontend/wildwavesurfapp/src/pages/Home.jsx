import React from "react"
import FeaturedProducts from "../components/featured-products"
import HeroImage from "../components/hero-imgen"
import Landing from "../components/landing/landing"

// styles
import { WrapperHeroImage, SurfboardsTitle } from "./Home.styles"

const Home = () => {
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
    </div>
  )
}

export default Home
