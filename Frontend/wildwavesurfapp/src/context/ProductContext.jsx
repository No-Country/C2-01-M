import React, {useEffect, useState, useContext} from "react";

const Products = React.createContext()

export function ProductsProvider({children}){

    const[products, setProducts] = useState([])
    const[cartItem, setCartItem] = useState([])
    const[itemQty, setItemQty] = useState(0)
    const[totalCart, setTotalCart] = useState(0)

    const isOnCart =(product)=>{
        /* Ubica si en el carrito ya existe un producto con el mismo id */
        return cartItem?.findIndex(item => item.id === product.id)
    }
    
    const addToCart=(product, cantidad=1)=>{

        let total = 0
        cartItem.map((p) => (total += p.cantidad * p.price))

        
        if(isOnCart(product) === -1){
            setCartItem([...cartItem, {...product, cantidad}])            
        }else{
            const oldQuantity = cartItem[isOnCart(product)].cantidad
            const newCart = cartItem.filter((p) => p.id !== product.id)
            setCartItem([...newCart, { ...product, cantidad: oldQuantity + cantidad }])
        }
        
        setItemQty(itemQty + cantidad)
        total += product.price * cantidad

        setTotalCart(total)
    }
    
    const deleteFromCart = (product)=>{
        /* filtra por los productos que no coincidan con el id del producto seleccionado */
        setCartItem(cartItem.filter(item => item.id !== product.id))
        /* Cambia la cantidad de productos */
        setItemQty(itemQty - product.cantidad)
        /* Cambia el total del carrito */
        setTotalCart(totalCart - product.price * product.cantidad)
    }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=> setProducts(data))
    }, [])

    console.log(cartItem);
    console.log(itemQty);
    console.log(totalCart);
    return(
        <Products.Provider value={{products, addToCart, cartItem, deleteFromCart, totalCart}}>
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

export function useTotalCart(){
    return useContext(Products).totalCart
}
export default Products