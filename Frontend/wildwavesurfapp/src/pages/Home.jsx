import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import ItemList from "../components/item/itemList"
import Landing from "../components/landing/landing"

const Home = () => {
  const [showItemList, setShowItemList] = useState(false)
  return (
    <div style={{ height: "100vh" }}>
      <Header setShowItemList={setShowItemList} showItemList={showItemList} />
      {!showItemList ? <Landing /> : <ItemList />}
      <Footer />
    </div>
  )
}

export default Home
