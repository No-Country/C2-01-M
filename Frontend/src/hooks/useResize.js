import { useState, useEffect } from "react"

const useResize = () => {
  const [size, setSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}

export default useResize
