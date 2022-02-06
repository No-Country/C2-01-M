import React from "react"
import Slider from "react-slick"

// styles
import "./navbar.css"

const PromotionalBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  }
  const info = [
    "FREE SHIPPING NATIONWIDE ",
    "WE ARE DELIVERING! ",
    "FREE SHIPPING NATIONWIDE",
    "3 AND 6 INTEREST-FREE INSTALLMENTS! ",
  ]
  return (
    <div className='slider'>
      <Slider {...settings}>
        {info &&
          info.map((item, index) => {
            return (
              <div className='promotion-container' key={index}>
                <h3 className='promotion'>{item}</h3>
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default PromotionalBar
