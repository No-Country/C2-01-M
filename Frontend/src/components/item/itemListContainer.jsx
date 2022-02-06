import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useProducts } from "../../context/ProductContext";
import Sort from "../sort/sort";
import Filter from "../filter/filter";

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
      {!featured ? (
        // products
        <>
          {
            <div className="img-product-container">
              <img
                src="https://i.imgur.com/5M7Sglf.jpg"
                className="img-product"
                alt="img"
              />
            </div>
          }
          <div className="sort-container">
            <Sort setItems={setItems} />
          </div>

          <div className="product-container">
            <Filter setItems={setItems} />
            <ItemList items={items} featured={featured} />
          </div>
        </>
      ) : (
        // featured products
        <ItemList items={items} featured={featured} />
      )}
    </>
  );
};
export default ItemListContainer;
