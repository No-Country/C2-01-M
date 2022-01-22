import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./filter.css";

const Filter = ({ setItems }) => {
  const [value, setValue] = useState(null);
  const [list, setList] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const products = useProducts();

  const handleCheckbox = (e) => {
    if (e.target.checked === true) {
      setValue(e.target.value);
    } else {
      setValue(null);
    }
  };

  const handleMinText = (e) => {
    setMin(parseInt(e.target.value));
  };
  const handleMaxText = (e) => {
    setMax(parseInt(e.target.value));
  };

  const filteredPrice = (a, b) => {
    let filteredList;
    if (a > 0 && b > 0) {
      filteredList = [...products].filter(
        (item) => parseInt(item.price) > a && parseInt(item.price) < b
      );
    } else {
      filteredList = products;
    }
    setList(filteredList);
    console.log(filteredList);
  };
  console.log(min, max);
  console.log(list);
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
  console.log(value);

  useEffect(() => {
    filterProducts();
  }, [value]);

  useEffect(() => {
    filteredPrice(min, max);
  }, [min, max]);

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
          <label htmlFor="price">
            min
            <input
              type="number"
              onChange={handleMinText}
              min={1}
              defaultValue={0}
            />
          </label>
          <label htmlFor="price">
            max
            <input
              type="number"
              onChange={handleMaxText}
              min={1}
              defaultValue={0}
            />
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
