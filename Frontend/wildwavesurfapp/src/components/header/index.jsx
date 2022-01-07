import React, { useState } from "react"
import PromotionalBar from "../promotional-bar"
import surf from "../../assets/surf.png"
import NavbarList from "../navbarlist"
import Search from "../search"
import userLogin from "../../assets/user-login.svg"
import trolley from "../../assets/trolley.svg"

// styles
import {
  Content,
  Ul,
  DisplayOverlay,
  WrapperIMG,
  NoLogin,
  WrapperUserLogin,
} from "./Header.styles"

const Header = () => {
  const [type, setType] = useState(null)
  const [login, setLogin] = useState(false)
  return (
    <div>
      <PromotionalBar />
      <Content>
        <div style={{ display: "flex" }}>
          <WrapperIMG>
            <img src={surf} alt='surf' width={50} />
          </WrapperIMG>
          <Ul>
            <li onMouseOver={() => setType("men")}>HOMBRE</li>
            <li onMouseOver={() => setType("woman")}>MUJER</li>
            <li onMouseOver={() => setType("children")}>NIÑOS</li>
            <li onMouseOver={() => setType("snow")}>SNOW</li>
            <li onMouseOver={() => setType(null)}>ADN SURF</li>
            <li onMouseOver={() => setType(null)}>CONTACTO</li>
            <li onMouseOver={() => setType(null)}>SALE</li>
          </Ul>
        </div>

        <Search />
        <WrapperUserLogin>
          <img src={userLogin} alt='user-login' width={40} />
          {!login ? <NoLogin>X</NoLogin> : null}
        </WrapperUserLogin>
        <div style={{ marginRight: "20px" }}>
          <img src={trolley} alt='trolley' width={50} />
        </div>
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
