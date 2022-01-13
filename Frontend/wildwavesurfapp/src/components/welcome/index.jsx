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
          "url(https://www.ecostinger.com/product_images/uploaded_images/shutterstock-54425062.jpg)",
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
