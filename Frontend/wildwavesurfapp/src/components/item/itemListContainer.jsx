import React, {useState, useEffect} from "react";
import ItemList from "./itemList";
import { useProducts } from "../../context/ProductContext";

const ItemListContainer = () =>{
    const[items, setItems] = useState([])
    const products = useProducts()
    const[loader, setLoader] = useState(true)

    useEffect(()=>{
        setLoader(true)
        const getProducts = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            },1000)            
                        
        })
        getProducts
        .then((res)=>{
            setItems(res)
        })
        .finally(()=>{
            setLoader(false)
        })        
    },[products])
    console.log(loader);
    return( loader ? 
        <div className="preloader-container">
            <img className="preloader" src="https://i.imgur.com/NTByPHS.gif" alt="gif"/>
        </div>
        :
        <ItemList items={items} />
    )
}
export default ItemListContainer