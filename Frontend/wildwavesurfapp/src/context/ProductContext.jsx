import React, { useEffect, useState, useContext } from "react"

const Products = React.createContext()

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [cartItem, setCartItem] = useState([])
  const [itemQty, setItemQty] = useState(0)
  const [totalCart, setTotalCart] = useState(0)
  const [infoUser, setInfoUser] = useState()

  const isOnCart = (product) => {
    /* Ubica si en el carrito ya existe un producto con el mismo id */
    return cartItem?.findIndex((item) => item._id === product._id)
  }

  const addToCart = (product, cantidad = 1) => {
    let total = 0
    cartItem.map((p) => (total += p.cantidad * p.price))

    if (isOnCart(product) === -1) {
      setCartItem([...cartItem, { ...product, cantidad }])
    } else {
      const oldQuantity = cartItem[isOnCart(product)].cantidad
      const newCart = cartItem.filter((p) => p._id !== product._id)
      setCartItem([
        ...newCart,
        { ...product, cantidad: oldQuantity + cantidad },
      ])
    }

    setItemQty(itemQty + cantidad)
    total += product.price * cantidad

    setTotalCart(total)
  }
  const getInfoUser = (user) => {
    setInfoUser(user)
  }
  const deleteFromCart = (product) => {
    /* filtra por los productos que no coincidan con el id del producto seleccionado */
    setCartItem(cartItem.filter((item) => item._id !== product._id))
    /* Cambia la cantidad de productos */
    setItemQty(itemQty - product.cantidad)
    /* Cambia el total del carrito */
    setTotalCart(totalCart - product.price * product.cantidad)
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URI}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  console.log(products)
  return (
    <Products.Provider
      value={{
        products,
        addToCart,
        cartItem,
        deleteFromCart,
        totalCart,
        getInfoUser,
        infoUser,
      }}
    >
      {children}
    </Products.Provider>
  )
}
export function useAddToCart() {
  return useContext(Products).addToCart
}

export function useCartItem() {
  return useContext(Products).cartItem
}

export function useDeleteFromCart() {
  return useContext(Products).deleteFromCart
}

export function useTotalCart() {
  return useContext(Products).totalCart
}

export function useGetInfoUser() {
  return useContext(Products).getInfoUser
}
export default Products
