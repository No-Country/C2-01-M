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
  }
  const info = [
    "ENVIOS GRATIS A TODO EL PAIS",
    "¡ESTAMOS ENTREGANDO!",
    "ENVIOS GRATIS A TODO EL PAIS",
    "¡3 Y 6 CUOTAS SIN INTERES!",
  ]
  return (
    <div className='slider' style={{ background: "black" }}>
      <Slider {...settings}>
        {info &&
          info.map((item, index) => {
            return (
              <div key={index} style={{ background: "black" }}>
                <h3 className='promotion' style={{ color: "#fff" }}>
                  {item}
                </h3>
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default PromotionalBar
