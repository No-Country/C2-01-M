import React, {useState} from "react";

const Counter = ()=>{
    const[number, setNumber] = useState(0)

    
    const sumNumber =()=>{
        setNumber(number + 1)
    }
    const subsNumber =()=>{
        setNumber(number - 1)
    }
    
    return(
        
        <div>
            <button onClick={()=>subsNumber()} disabled={number===0}>-</button>
            <p>{number} </p>
            <button onClick={()=>sumNumber()}>+</button>
        </div>

    )
}
export default Counter