import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer =() =>{
    const[product, setProduct] = useState([])
    const{prodId} = useParams()
    const products = useProducts()

    useEffect(()=>{
        const getProduct = new Promise((resolve)=>{
            resolve(products)
        })

        getProduct
        .then((res)=>{
            prodId ? 
            setProduct(res.find((item)=> item._id === prodId)) :
            setProduct(res)
            
        })
    }, [prodId, products])




    return(
        <ItemDetails product={product} />
    )
}
export default ItemDetailContainer
