import React from "react";
import "./filter.css";

const Filter = () => {
  return (
    <aside className="filter-container">
      <form className="filter-cat">
        <fieldset>
          <legend>Categorías</legend>
          <label htmlFor="category">
            <input type="checkbox" defaultChecked={false} name="category" />
            Tablas
          </label>
          <label>
            <input type="checkbox" defaultChecked={false} name="category" />
            Ropa
          </label>
        </fieldset>
      </form>

      <form className="filter-price">
        <fieldset>
          <legend>Rango de precios</legend>
          <label htmlFor="">
            min
            <input type="number" />
          </label>
          <label htmlFor="">
            max
            <input type="number" />
          </label>
        </fieldset>
      </form>
      <form className="filter-val">
        <fieldset>
          <legend>Valoración</legend>
          <label htmlFor="category">
            <input type="checkbox" defaultChecked={false} name="valuation" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
          </label>
          <label>
            <input type="checkbox" defaultChecked={false} name="valuation" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
          </label>
          <label>
            <input type="checkbox" defaultChecked={false} name="valuation" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
          </label>
        </fieldset>
      </form>
    </aside>
  );
};

export default Filter;
