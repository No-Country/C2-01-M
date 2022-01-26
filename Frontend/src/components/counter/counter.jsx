import React, { useState } from "react";

// styles
import "./counter.css";

const Counter = ({ onAdd }) => {
  const [number, setNumber] = useState(0);

  return (
    <div className="container-counter">
      <button
        className="btn-counter"
        onClick={() => setNumber(number - 1)}
        disabled={number === 0}
      >
        -
      </button>
      <p className="counter-number">
        <span>{number}</span>
      </p>
      <button className="btn-counter" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button
        className="btn-add-to-cart"
        onClick={() => onAdd(number)}
        disabled={number === 0}
      >
        Add to cart
      </button>
    </div>
  );
};
export default Counter;
