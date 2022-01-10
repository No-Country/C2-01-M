import React from "react"
import Cart from "../components/cart/cart"
import Footer from "../components/footer"
import Header from "../components/header"
import ItemList from "../components/item/itemList"
import Landing from "../components/landing/landing"

const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <ItemList />
      <Cart />
      <Footer />
    </div>
  )
}

export default Home
