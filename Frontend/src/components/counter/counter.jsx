import React, {useState} from "react";
import "./counter.css"

const Counter = ({onAdd})=>{
    const[number, setNumber] = useState(0)
    
    const sumNumber =()=>{
        setNumber(number + 1)
    }
    const subsNumber =()=>{
        setNumber(number - 1)
    }
    
    return(
        
        <div>
            <button className="btn-counter" onClick={()=>subsNumber()} disabled={number===0}><span>-</span></button>
            <p className="counter-number"><span>{number}</span></p>
            <button className="btn-counter" onClick={()=>sumNumber()}><span>+</span></button>
            <button className="btn-add-to-cart" onClick={()=>onAdd(number)} disabled={number===0}>Add to cart</button>
        </div>

    )
}
export default Counter