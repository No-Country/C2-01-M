import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import Welcome from "../welcome"
import Login from "../login/index"
import Register from "../register"
import Cart from "../cart/cart"
import Landing from "../landing/landing"
import Error404 from "../404/error404"
import ItemList from "../item/itemList"
import Header from "../header"
import ItemDetailContainer from "../item-details/itemDetailContainer"

const ManagementRoute = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/header' element={<Header />} />
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/landing' element={<Landing />} />
        <Route exact path='/itemList' element={<ItemList />} />
        <Route path="/product/:prodId" element={<ItemDetailContainer />}></Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default ManagementRoute
