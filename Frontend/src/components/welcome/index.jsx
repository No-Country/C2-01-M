import React from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate("/home")
  }, 4000)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/11/18/18/45/surfer-1836366_960_720.jpg",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto, cover",
      }}
    >
      <h1 style={{ color: "#915454", fontSize: "80px" }}>
        Welcome to Wild Wave Surf
      </h1>
    </div>
  )
}

export default Welcome
