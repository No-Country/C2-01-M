/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

// styles
import "./filter.css";

const Filter = ({ setItems }) => {
  const [value, setValue] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const products = useProducts();
  const [searchParams] = useSearchParams();

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
    setItems(filteredList);
  };

  const filterProducts = () => {
    let filteredList;
    switch (value) {
      case "surfboards":
        filteredList = [...products].filter(
          (item) => item.category.name === "TABLAS"
        );
        break;
      case "clothing":
        filteredList = [...products].filter(
          (item) => item.category.name === "ROPA"
        );
        break;

      default:
        filteredList = products;
    }
    setItems(filteredList);
  };

  useEffect(() => {
    filterProducts();
  }, [value]);

  useEffect(() => {
    filteredPrice(min, max);
  }, [min, max]);

  useEffect(() => {
    if (searchParams.get("filter")) setValue(searchParams.get("filter"));
  }, []);

  return (
    <aside className="filter-container">
      {value === "surfboards" ? (
        <img
          src="https://i.imgur.com/xcHgSso.jpg"
          className="img-filter"
          alt="img"
          style={{ maxHeight: "180px" }}
        />
      ) : (
        <img
          src="https://i.imgur.com/tWhcoZA.jpg"
          className="img-filter"
          alt="img"
          style={{ maxHeight: "180px" }}
        />
      )}
      <form className="filter-cat">
        <fieldset>
          <legend>CATEGORY</legend>
          <hr />
          <label htmlFor="category">
            <input
              type="radio"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="category"
              id="category"
              value={"surfboards"}
            />
            Surfboards
          </label>
          <label>
            <input
              type="radio"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="category"
              id="category"
              value={"clothing"}
            />
            Clothing
          </label>
          <label>
            <input
              type="radio"
              onChange={handleCheckbox}
              defaultChecked={false}
              name="category"
              id="category"
              value={""}
            />
            All
          </label>
        </fieldset>
      </form>

      <form className="filter-price">
        <fieldset>
          <legend>PRICE RANGE</legend>
          <hr />
          <label htmlFor="price">
            Min
            <input
              type="number"
              onChange={handleMinText}
              min={1}
              defaultValue={0}
            />
          </label>
          <label htmlFor="price">
            Max
            <input
              type="number"
              onChange={handleMaxText}
              min={1}
              defaultValue={0}
            />
          </label>
        </fieldset>
      </form>
    </aside>
  );
};

export default Filter;
