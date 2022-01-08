import React from "react"
import Slider from "react-slick"

// styles
import "./landing.css"

const PromotionalBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",

  }
  const info = [
    "https://i.imgur.com/oh7CSuX.jpg",
    "https://i.imgur.com/uTZanWT.jpg",
    "https://i.imgur.com/tvUL9LX.jpg",
  ]
  return (
    <div>
      <Slider {...settings}>
        {info &&
          info.map((item, index) => {
            return (
              <div key={index} className="img-container">
                <img src={item} className={"img"+index} alt={"img-"+index} />
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default PromotionalBar
