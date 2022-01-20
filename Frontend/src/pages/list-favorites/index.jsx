import React, { useEffect, useState } from "react"
import heart from "../../assets/heart.svg"
import { useAddToCart, useProducts } from "../../context/ProductContext"

// styles
import {
  WrapperHeader,
  WrapperTitle,
  WrapperCart,
} from "./ListFavorites.styles"
import { Link } from "react-router-dom"

const ListFavorites = () => {
  const products = useProducts()
  const addToCart = useAddToCart()
  const [addLocalStorage, setAddLocalStorage] = useState()
  const [favoritesProducts, setFavoritesProducts] = useState()

  const removeFavorites = (id) => {
    const favorites = localStorage.getItem("itemsLikes")
    const newFavorites = JSON.parse(favorites)
    const newArray = newFavorites.filter((item) => item !== id)
    setAddLocalStorage(newArray)
  }
  useEffect(() => {
    if (addLocalStorage) {
      localStorage.setItem("itemsLikes", JSON.stringify(addLocalStorage))
    }
    const favorites = localStorage.getItem("itemsLikes")
    if (favorites) {
      const favoriteProducts = products.filter((item) =>
        favorites.includes(item._id)
      )
      setFavoritesProducts(favoriteProducts)
    }
  }, [addLocalStorage, products])

  return (
    <>
      <WrapperHeader>
        <img src={heart} alt='heart' width={40} />
        <WrapperTitle>
          <h2>My favorites</h2>
        </WrapperTitle>
        <div className='wrapper-button'>
          <button onClick={() => setAddLocalStorage([])}>DELETE ALL</button>
        </div>
      </WrapperHeader>
      <WrapperCart>
        {favoritesProducts &&
          favoritesProducts?.map((item) => {
            const { image, title, price, _id } = item
            return (
              <div
                key={_id}
                className='card-container-cart'
                aria-current={true}
              >
                <img src={image} alt={title} />
                <p>{title} </p>
                <span>Price: ${price} </span>
                <div className='buttons'>
                  <button onClick={() => removeFavorites(_id)}>
                    REMOVE FROM FAVORITES
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item)
                      return removeFavorites(_id)
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            )
          })}
        {favoritesProducts?.length === 0 && (
          <div className='empty-cart'>
            <h3>You have no products in the favorites list.</h3>
            <Link to='/products'> Products </Link>
          </div>
        )}
      </WrapperCart>
    </>
  )
}

export default ListFavorites
