import React, { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import Select from "react-select";
<<<<<<< Updated upstream
import "./sort.css";
=======
>>>>>>> Stashed changes

const Sort = ({ setItems }) => {
  const options = [
    { value: "A-Z", label: "A - Z" },
    { value: "Z-A", label: "Z - A" },
    { value: "LowPrice", label: "Low Price" },
    { value: "HighPrice", label: "High Price" },
  ];

  const [option, setOption] = useState(null);
  const [list, setList] = useState([]);
  const products = useProducts();

  const changeOption = (evt) => {
    setOption(evt.value);
  };

  const sortProducts = () => {
    let sortedList;
<<<<<<< Updated upstream
    switch (option) {
      case "LowPrice":
        sortedList = products.sort((a, b) =>
          parseInt(a.price) > parseInt(b.price)
            ? 1
            : parseInt(a.price) < parseInt(b.price)
            ? -1
            : 0
        );
        break;
      case "HighPrice":
        sortedList = products.sort((a, b) =>
          parseInt(a.price) > parseInt(b.price)
            ? -1
            : parseInt(a.price) < parseInt(b.price)
            ? 1
            : 0
        );
        break;
      case "A-Z":
        sortedList = products.sort((a, b) =>
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        );
        break;
      case "Z-A":
        sortedList = products.sort((a, b) =>
          a.title > b.title ? -1 : a.title < b.title ? 1 : 0
        );
        break;
      default:
        sortedList = products;
=======
    if (option === "LowPrice") {
      sortedList = products.sort((a, b) =>
        parseInt(a.price) > parseInt(b.price)
          ? 1
          : parseInt(a.price) < parseInt(b.price)
          ? -1
          : 0
      );
    } else if (option === "HighPrice") {
      sortedList = products.sort((a, b) =>
        parseInt(a.price) > parseInt(b.price)
          ? -1
          : parseInt(a.price) < parseInt(b.price)
          ? 1
          : 0
      );
    } else if (option === "A-Z" || option === "") {
      sortedList = products.sort((a, b) =>
        a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      );
    } else if (option === "Z-A") {
      sortedList = products.sort((a, b) =>
        a.title > b.title ? -1 : a.title < b.title ? 1 : 0
      );
>>>>>>> Stashed changes
    }
    setList(sortedList);
  };

<<<<<<< Updated upstream
  setItems(list);

  useEffect(() => {
    sortProducts();
  }, [option]);

  console.log(option);
  console.log(list);

  return (
    <div className="sort-container">
=======
  useEffect(() => {
    sortProducts();
  }, [option]);
  console.log(list);

  return (
    <div>
>>>>>>> Stashed changes
      <Select
        options={options}
        onChange={changeOption}
        list={list}
        option={option}
      />
<<<<<<< Updated upstream
=======
      ;
>>>>>>> Stashed changes
    </div>
  );
};

export default Sort;
