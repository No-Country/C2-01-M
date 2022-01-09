import React, {useContext} from "react";
import Item from "./item";
import Products from "../../context/ProductContext";

const ItemList=()=>{

    const {products} = useContext(Products)    
 
    return(
        <div className="item-list-container">
            {
                products?.map((item)=>{
                    return(
                        <Item key={item._id} product={item} />
                    )
                })
            }
        </div>
    )
}
export default ItemList