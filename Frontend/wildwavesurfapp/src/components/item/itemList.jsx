import React from "react";
import Item from "./item";

const ItemList=({items})=>{       
 
    return(
        <div className="item-list-container">
            {
                items?.map((item)=>{
                    return(
                        <Item key={item._id} product={item} />
                    )
                })
            }
        </div>
    )
}
export default ItemList