import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import Welcome from "../welcome"
import Login from "../login/index"
import Register from "../register"

const ManagementRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default ManagementRoute
