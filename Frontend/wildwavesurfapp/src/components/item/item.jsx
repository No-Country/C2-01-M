import React, { useEffect, useState } from "react"
import { useAddToCart } from "../../context/ProductContext"
import "./item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
  const { image, price, title, _id } = product
  const [likesArray, setLikesArray] = useState([])

  const addLikes = (id) => {
    const likes = localStorage.getItem("itemsLikes")

    const likesStorage = []
    if (!likes || likes === "[]") {
      likesStorage.push(id)
      localStorage.setItem("itemsLikes", JSON.stringify(likesStorage))
      setLikesArray(likesStorage)
    }
    if (likesArray.includes(id)) {
      const newArray = likesArray.filter((item) => item !== id)
      localStorage.setItem("itemsLikes", JSON.stringify(likesStorage))
      setLikesArray(newArray)
    }
    if (likes && !likesArray.includes(id)) {
      const newArrayJson = localStorage.getItem("itemsLikes")
      const result = JSON.parse(newArrayJson)
      result.push(id)

      localStorage.setItem("itemsLikes", JSON.stringify(result))
      setLikesArray(result)
    }
  }

  const addToCart = useAddToCart()

  useEffect(() => {
    const likeArray = localStorage.getItem("itemsLikes")
    if (!likeArray) {
      setLikesArray([likeArray])
    } else {
      const newLikes = JSON.parse(likeArray)
      setLikesArray(newLikes)
    }
  }, [])
  return (
    <div className='card-container'>
      
      <div className='like-container'>
        <div className='like-container heart' onClick={() => addLikes(_id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z'
              fill={likesArray && likesArray.includes(_id) ? "red" : "grey" || ""}
            />
          </svg>
        </div>
      </div>
      <Link to={`/product/${_id}`}>
        <div className='img-card'>
          <img src={image} alt={title + "-" + _id} />
        </div>
      </Link>
      <div className='info-card'>
        <p>{title}</p>
        <span> ${price} </span>
      </div>
    </div>
  )
}
export default Item
