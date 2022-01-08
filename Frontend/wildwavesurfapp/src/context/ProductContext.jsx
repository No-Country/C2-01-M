import React, {useEffect, useState} from "react";

const Products = React.createContext()

export function ProductsProvider({children}){

    const[products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=> setProducts(data))
    }, [])
    console.log(products);
    return(
        <Products.Provider value={{products}}>
            {children}
        </Products.Provider>
    )

}

export default Products