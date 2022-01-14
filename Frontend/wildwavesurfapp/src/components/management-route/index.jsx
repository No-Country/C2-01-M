import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../login/index"
import Register from "../register"
import Cart from "../cart/cart"
import Landing from "../landing/landing"
import Error404 from "../404/error404"
import Header from "../header"
import ItemDetailContainer from "../item-details/itemDetailContainer"
import ItemListContainer from "../item/itemListContainer"
import Footer from "../footer"
import Welcome from "../welcome"
import Home from "../../pages/Home"

const ManagementRoute = () => {
  const [show, setShow] = useState(false)
  setTimeout(() => {
    setShow(true)
  }, 4000)
  return (
    <div style={{ minHeight: "100%" }}>
      <BrowserRouter>
        {show && <Header />}
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/landing' element={<Landing />} />
          <Route exact path='/products' element={<ItemListContainer />} />
          <Route
            path='/product/:prodId'
            element={<ItemDetailContainer />}
          ></Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
        {show && <Footer />}
      </BrowserRouter>
    </div>
  )
}

export default ManagementRoute
