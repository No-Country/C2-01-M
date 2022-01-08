import React from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    console.log("test")
    navigate("/login")
  }, 4000)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100Vh",
      }}
    >
      <h1>Welcome to Wild Ware Surf</h1>
    </div>
  )
}

export default Welcome
