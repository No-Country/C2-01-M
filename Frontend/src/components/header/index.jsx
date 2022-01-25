import React, { useContext, useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
// components
import PromotionalBar from "../promotional-navbar"
import Search from "../search"
import { surf, userLogin, trolley, menu } from "../../assets"
// context
import Products from "../../context/ProductContext"
import { useCartItem, useItemQty } from "../../context/ProductContext"


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
  const linkStyles = {
    textDecoration: "none",
    color: "black",
  }

  useEffect(() => {
    if (infoUser) setLogin(infoUser?.user?.name)
  }, [infoUser])

  return (
    <div>
      <PromotionalBar />
      <Content className='menuIMGStyle'>
        <WrapperNavbar>
          <WrapperMenu>
            <img
              src={menu}
              alt='menu'
              width={30}
              onClick={() => setShowNavbar(!showNavbar)}
            />
          </WrapperMenu>

          <Link to='/' style={linkStyles}>
            <WrapperIMG>
              <img src={surf} alt='surf' width={50} />
            </WrapperIMG>
          </Link>
          <Ul showNavbar={showNavbar}>
            <Link
              to='/'
              style={linkStyles}
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <li>HOME</li>
            </Link>
            <Link
              to='/products'
              style={linkStyles}
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <li>PRODUCTS</li>
            </Link>
            <Link
              to='/listFavorites'
              style={linkStyles}
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <li>MY FAVORITES</li>
            </Link>
          </Ul>
        </WrapperNavbar>
        <WrapperSearch>
          <Search />
        </WrapperSearch>
        <WrapperUserLogin>
          {!login ? (
            <div className='login' onClick={() => navigate("/login")}>
              <img src={userLogin} alt='user-login' width={30} />
              <NoLogin>X</NoLogin>
            </div>
          ) : (
            <WrapperName>{login.charAt(0).toUpperCase()}</WrapperName>
          )}
        </WrapperUserLogin>

        <WrapperTrolley>
          <Link to={cartItem.length > 0 && "/cart"} style={linkStyles}>
            <img
              src={trolley}
              alt='trolley'
              width={30}
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
