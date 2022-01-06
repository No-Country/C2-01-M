import React, { useState } from "react"
import PromotionalBar from "../promotional-bar"
import surf from "../../assets/surf.png"

// styles
import { Content, Ul, DisplayOverlay } from "./Header.styles"
import NavbarList from "../navbarlist"

const Header = () => {
  const [type, setType] = useState(null)
  return (
    <div>
      <PromotionalBar />
      <Content>
        <div>
          <img src={surf} alt='surf' width={80} />
        </div>

        <Ul>
          <li onMouseOver={() => setType("men")}>HOMBRE</li>
          <li onMouseOver={() => setType("woman")}>MUJER</li>
          <li onMouseOver={() => setType("children")}>NIÑOS</li>
          <li onMouseOver={() => setType("snow")}>SNOW</li>
        </Ul>
      </Content>
      <div>
        <NavbarList type={type} />

        {type && (
          <DisplayOverlay
            onClick={(e) => {
              e.stopPropagation()
              setType(null)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Header
