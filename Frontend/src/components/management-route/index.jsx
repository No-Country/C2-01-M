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
import Welcome from "../welcome"
import Home from "../../pages/home/Home"
import PurchaseCircuit from "../../pages/purchase-circuit/PurchaseCircuit"
import ListFavorites from "../../pages/list-favorites"

const ManagementRoute = () => {
  return (
    <div style={{ minHeight: "100%" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/welcome' element={<Welcome />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/landing' element={<Landing />} />
          <Route exact path='/products' element={<ItemListContainer />} />
          <Route exact path='/purchaseCircuit' element={<PurchaseCircuit />} />
          <Route exact path='/listFavorites' element={<ListFavorites />} />
          <Route
            path='/product/:prodId'
            element={<ItemDetailContainer />}
          ></Route>

          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default ManagementRoute
