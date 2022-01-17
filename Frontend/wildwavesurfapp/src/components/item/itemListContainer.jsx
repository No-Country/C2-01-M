import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useProducts } from "../../context/ProductContext";
import Sort from "../sort/sort";
<<<<<<< Updated upstream
import Filter from "../filter/filter";

const ItemListContainer = ({ featured, list, option }) => {
=======

const ItemListContainer = ({ featured }) => {
>>>>>>> Stashed changes
  const [items, setItems] = useState([]);
  const products = useProducts();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
    getProducts
      .then((res) => {
        setItems(res);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [products]);

  return loader ? (
    <div className="preloader-container">
      <img
        className="preloader"
        src="https://i.imgur.com/NTByPHS.gif"
        alt="gif"
      />
    </div>
  ) : (
    <>
<<<<<<< Updated upstream
      <div className="sort-container">
        <Sort setItems={setItems} />
      </div>
      <div className="product-container">
        <Filter />
        <ItemList items={items} featured={featured} />
      </div>
=======
      <Sort />
      <ItemList items={items} featured={featured} />
>>>>>>> Stashed changes
    </>
  );
};
export default ItemListContainer;
