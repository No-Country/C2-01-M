import React, { useContext, useEffect, useState } from "react"
import PromotionalBar from "../promotional-navbar"
import surf from "../../assets/surf.png"
// import NavbarList from "../navbarlist"
import Search from "../search"
import userLogin from "../../assets/user-login.svg"
import trolley from "../../assets/trolley.svg"
import menu from "../../assets/menu.svg"
import Products from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import Cart from "../cart/cart"
import {
  useCartItem,
  /* useDeleteFromCart,
  useTotalCart, */
} from "../../context/ProductContext"

// styles
import {
  Content,
  Ul,
  // DisplayOverlay,
  WrapperIMG,
  NoLogin,
  WrapperUserLogin,
  WrapperTrolley,
  WrapperMenu,
  WrapperNavbar,
  WrapperSearch,
  WrapperName,
  WrapperCart,
  QuantityItems,
} from "./Header.styles"

const Header = ({ setShowItemList, showItemList }) => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [login, setLogin] = useState("")
  const [showCart, setShowCart] = useState(false)
  const navigate = useNavigate()
  const { infoUser } = useContext(Products)
  const cartItem = useCartItem()

  useEffect(() => {
    if (infoUser) setLogin(infoUser?.user?.name)
  }, [infoUser])

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
              onClick={() => {
                setShowItemList(!showItemList)
              }}
            >
              HOMBRE
            </li>
            <li>MUJER</li>
            <li>NIÑOS</li>
            <li>SNOW</li>
            <li>ADN SURF</li>
            <li>CONTACTO</li>
            <li>SALE</li>
          </Ul>
        </WrapperNavbar>
        <WrapperSearch>
          <Search />
        </WrapperSearch>

        <WrapperUserLogin>
          {!login ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              <img src={userLogin} alt='user-login' width={40} />
              <NoLogin>X</NoLogin>
            </div>
          ) : (
            <WrapperName>{login.charAt(0).toUpperCase()}</WrapperName>
          )}
        </WrapperUserLogin>
        <WrapperTrolley>
          <img
            src={trolley}
            alt='trolley'
            width={50}
            onClick={() => setShowCart(!showCart)}
          />
          {cartItem.length > 0 ? (
            <QuantityItems>{cartItem.length}</QuantityItems>
          ) : null}
          {showCart && (
            <WrapperCart>
              <Cart />
            </WrapperCart>
          )}
        </WrapperTrolley>
      </Content>
    </div>
  )
}

export default Header
