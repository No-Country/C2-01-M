import React, {useEffect, useState, useContext} from "react";

const Products = React.createContext()

export function ProductsProvider({children}){

    const[products, setProducts] = useState([])
    const[cartItem, setCartItem] = useState([])

    const isOnCart =(product)=>{
        /* Ubica si en el carrito ya existe un producto con el mismo id */
        return cartItem?.findIndex(item => item.id === product.id)
    }
    
    const addToCart=(product, cantidad)=>{
        if(isOnCart(product) === -1){
            setCartItem([product, ...cartItem])
        }else{
            alert("producto ya agregado")
        }        
    }

    const deleteFromCart = (product)=>{
        /* filtra por los productos que no coincidan con el id del producto seleccionado */
        setCartItem(cartItem.filter(item => item.id !== product.id))
    }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=> setProducts(data))
    }, [])

    return(
        <Products.Provider value={{products, addToCart, cartItem, deleteFromCart}}>
            {children}
        </Products.Provider>
    )

}
export function useAddToCart(){
    return useContext(Products).addToCart
}

export function useCartItem(){
    return useContext(Products).cartItem
}

export function useDeleteFromCart(){
    return useContext(Products).deleteFromCart
}
export default Products