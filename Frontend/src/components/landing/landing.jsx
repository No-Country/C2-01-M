import React from "react"
import Slider from "react-slick"
import slider1 from "../../assets/slider1.jpg"
import slider2 from "../../assets/slider2.jpg"
import slider3 from "../../assets/slider3.jpg"

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
    arrows: false,
  }
  const info = [slider1, slider2, slider3]
  return (
    <div>
      <Slider {...settings}>
        {info &&
          info.map((item, index) => {
            return (
              <div key={index} className='img-container'>
                <img src={item} alt={"img" + index} className='img-slide' />
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default Landing
