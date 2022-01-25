import React from "react"
import welcome from "../../assets/welcome.webp"

const Welcome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${welcome})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh, cover",
        backgroundPosition: "center center",
        overflow: "hidden",
      }}
    >
      <h1 style={{ color: "#915454", fontSize: "80px" }}>
        Welcome to Wild Wave Surf
      </h1>
    </div>
  )
}

export default Welcome
