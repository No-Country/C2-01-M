import React, { useState } from "react"
import PromotionalBar from "../promotional-navbar"
import surf from "../../assets/surf.png"
import NavbarList from "../navbarlist"
import Search from "../search"
import userLogin from "../../assets/user-login.svg"
import trolley from "../../assets/trolley.svg"
import menu from "../../assets/menu.svg"

// styles
import {
  Content,
  Ul,
  DisplayOverlay,
  WrapperIMG,
  NoLogin,
  WrapperUserLogin,
  WrapperTrolley,
  WrapperMenu,
  WrapperNavbar,
  WrapperSearch,
} from "./Header.styles"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [type, setType] = useState(null)
  const [showNavbar, setShowNavbar] = useState(false)
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  return (
    <div>
      <PromotionalBar />
      <Content>
        <WrapperNavbar>
          <WrapperMenu>
            <img
              src={menu}
              alt='menu'
              width={50}
              onClick={() => setShowNavbar(!showNavbar)}
            />
          </WrapperMenu>
          <WrapperIMG>
            <img src={surf} alt='surf' width={50} />
          </WrapperIMG>
          <Ul showNavbar={showNavbar}>
            <li
              onMouseOver={() => {
                setType("men")
              }}
            >
              HOMBRE
            </li>
            <li onMouseOver={() => setType("woman")}>MUJER</li>
            <li onMouseOver={() => setType("children")}>NIÑOS</li>
            <li onMouseOver={() => setType("snow")}>SNOW</li>
            <li onMouseOver={() => setType(null)}>ADN SURF</li>
            <li onMouseOver={() => setType(null)}>CONTACTO</li>
            <li onMouseOver={() => setType(null)}>SALE</li>
          </Ul>
        </WrapperNavbar>
        <WrapperSearch>
          <Search />
        </WrapperSearch>

        <WrapperUserLogin>
          <img src={userLogin} alt='user-login' width={40} />
          {!login ? <NoLogin>X</NoLogin> : null}
        </WrapperUserLogin>
        <WrapperTrolley>
          <img
            src={trolley}
            alt='trolley'
            width={50}
            onClick={() => navigate("/itemList")}
          />
        </WrapperTrolley>
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
