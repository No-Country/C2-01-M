import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useProducts } from "../../context/ProductContext";
import Sort from "../sort/sort";

const ItemListContainer = ({ featured }) => {
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
      <Sort />
      <ItemList items={items} featured={featured} />
    </>
  );
};
export default ItemListContainer;
