import React, { useContext, useEffect, useState } from "react"
import PromotionalBar from "../promotional-navbar"
import surf from "../../assets/surf.png"
import Search from "../search"
import userLogin from "../../assets/user-login.svg"
import trolley from "../../assets/trolley.svg"
import menu from "../../assets/menu.svg"
import Products from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import {
  useCartItem,
  useItemQty,
  /* useDeleteFromCart,
  useTotalCart, */
} from "../../context/ProductContext"
import { Link } from "react-router-dom"
// styles
import {
  Content,
  Ul,
  WrapperIMG,
  NoLogin,
  WrapperUserLogin,
  WrapperTrolley,
  WrapperMenu,
  WrapperNavbar,
  WrapperSearch,
  WrapperName,
  QuantityItems,
} from "./Header.styles"

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [login, setLogin] = useState("")
  const [showCart, setShowCart] = useState(false)
  const navigate = useNavigate()
  const { infoUser } = useContext(Products)
  const cartItem = useCartItem()
  const itemQty = useItemQty()

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
          <Link to='/home' style={{ textDecoration: "none", color: "black" }}>
            <WrapperIMG>
              <img src={surf} alt='surf' width={50} />
            </WrapperIMG>
          </Link>
          <Ul showNavbar={showNavbar}>
            <Link to='/home' style={{ textDecoration: "none", color: "black" }}>
              <li>HOME</li>
            </Link>
            <Link
              to='/products'
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>PRODUCTS</li>
            </Link>
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
          <Link
            to={cartItem.length > 0 && "/cart"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={trolley}
              alt='trolley'
              width={50}
              onClick={() => setShowCart(!showCart)}
            />
          </Link>
          {cartItem.length > 0 ? (
            <QuantityItems>{itemQty}</QuantityItems>
          ) : null}
        </WrapperTrolley>
      </Content>
    </div>
  )
}

export default Header
