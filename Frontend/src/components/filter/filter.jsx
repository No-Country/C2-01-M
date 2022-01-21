import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./filter.css";

const Filter = ({ setItems }) => {
  const [value, setValue] = useState(null);
  const [list, setList] = useState([]);
  const products = useProducts();

  const handleCheckbox = (e) => {
    if (e.target.checked === true) {
      setValue(e.target.value);
    } else {
      setValue(null);
    }
  };

  const filterProducts = () => {
    let filteredList;
    switch (value) {
      case "TABLAS":
        filteredList = [...products].filter(
          (item) => item.category.name === "TABLAS"
        );
        break;
      case "ROPA":
        filteredList = [...products].filter(
          (item) => item.category.name === "ROPA"
        );
        break;
      default:
        filteredList = products;
    }
    setList(filteredList);
  };

  setItems(list);

  useEffect(() => {
    filterProducts();
  }, [value]);

  console.log(value);
  console.log(list);

  return (
    <aside className="filter-container">
      <form className="filter-cat">
        <fieldset>
          <legend>Categorías</legend>
          <label htmlFor="category">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="category"
              value={"TABLAS"}
            />
            Tablas
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="category"
              value={"ROPA"}
            />
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
            <input
              type="checkbox"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="valuation"
              value={1}
            />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="valuation"
              value={2}
            />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
            <img src="https://i.imgur.com/XcWChpG.png" alt="star" />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="valuation"
              value={3}
            />
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
