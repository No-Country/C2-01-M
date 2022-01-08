import React from "react";
import "./item.css"

const Item=({product})=>{
    const {
        image, 
        price, 
        title, 
        id
    } = product
    return(
        <div className="card-container">
            <div className="like-container">
                <img src="https://i.imgur.com/Rhy22Tn.png" alt="like" />
            </div>
            <div className="img-card">
                <img src={image} alt={title + "-" + id} />
            </div>
            <div className="info-card">
                <p>{title} - {id} </p>
                <span> ${price} </span>
            </div>
        </div>
    )
}
export default Item