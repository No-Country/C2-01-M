import React, { useState, useEffect } from "react"
import { useProducts } from "../../context/ProductContext"
import Select from "react-select"
import "./sort.css"

const Sort = ({ setItems }) => {
  const options = [
    { value: "A-Z", label: "A - Z" },
    { value: "Z-A", label: "Z - A" },
    { value: "LowPrice", label: "Low Price" },
    { value: "HighPrice", label: "High Price" },
  ]

  const [option, setOption] = useState(null)
  const products = useProducts()

  const changeOption = (evt) => {
    setOption(evt.value)
  }

  const sortProducts = () => {
    let sortedList
    switch (option) {
      case "LowPrice":
        sortedList = [...products].sort((a, b) =>
          parseInt(a.price) > parseInt(b.price)
            ? 1
            : parseInt(a.price) < parseInt(b.price)
            ? -1
            : 0
        )
        break
      case "HighPrice":
        sortedList = [...products].sort((a, b) =>
          parseInt(a.price) > parseInt(b.price)
            ? -1
            : parseInt(a.price) < parseInt(b.price)
            ? 1
            : 0
        )
        break
      case "A-Z":
        sortedList = [...products].sort((a, b) =>
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        )
        break
      case "Z-A":
        sortedList = [...products].sort((a, b) =>
          a.title > b.title ? -1 : a.title < b.title ? 1 : 0
        )
        break
      default:
        sortedList = products
    }

    setItems(sortedList)
  }

  useEffect(() => {
    sortProducts()
  }, [option])

  return (
    <div className='sort-container'>
      <Select options={options} onChange={changeOption} option={option} />
    </div>
  )
}

export default Sort
