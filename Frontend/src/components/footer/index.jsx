import React from "react"
import { facebook, instagram, linkedin, twitter } from "../../assets"

// styles
import { WrapperFooter } from "./Footer.Styles"

const Footer = () => {
  const social = [facebook, instagram, linkedin, twitter]
  return (
    <WrapperFooter>
      <h6>© Copyright 2021, Wildwavesurf, open source. All rights reserved.</h6>
      <div style={{ display: "flex" }}>
        <h4>FOLLOW US</h4>
        {social.length > 0
          ? social.map((item, index) => {
              return <img src={item} alt={item} key={index} />
            })
          : null}
      </div>
    </WrapperFooter>
  )
}

export default Footer
