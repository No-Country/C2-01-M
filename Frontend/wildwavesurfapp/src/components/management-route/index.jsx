import React from "react"
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

const ManagementRoute = () => (
  <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/landing' element={<Landing />} />
        <Route exact path='/products' element={<ItemListContainer />} />
        <Route path="/product/:prodId" element={<ItemDetailContainer />}></Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  </>
)

export default ManagementRoute
