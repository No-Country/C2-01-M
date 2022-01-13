import React, {useState, useEffect} from "react";
import ItemList from "./itemList";
import { useProducts } from "../../context/ProductContext";

const ItemListContainer = () =>{
    const[items, setItems] = useState([])
    const products = useProducts()

    useEffect(()=>{
        const getProducts = new Promise((resolve)=>{            
            resolve(products)            
        })
        getProducts
        .then((res)=>{
            setItems(res)
        })        
    },[products])

    return(
        <ItemList items={items} />
    )
}
export default ItemListContainer