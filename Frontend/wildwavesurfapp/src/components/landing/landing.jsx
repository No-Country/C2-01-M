import React from "react"
import Slider from "react-slick"

// styles
import "./landing.css"

const Landing = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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
                <img src={item} alt={"img"+index} className="img-slide"/>
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default Landing