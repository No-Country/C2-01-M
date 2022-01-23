import React from "react"
import { Style404 } from "./error404.styles"
import image404 from "../../assets/page404.svg"

function Error404() {
  return (
    <Style404>
      <div className='image-container-404'>
        <img src={image404} alt='page error' />
      </div>
    </Style404>
  )
}

export default Error404
