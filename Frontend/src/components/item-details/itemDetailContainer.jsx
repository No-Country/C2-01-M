import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useAddToCart,
  useDeleteDataBuy,
  useProducts,
} from "../../context/ProductContext";
import { removeFavorites } from "../../helpers/remove-favorites";
import FeaturedProducts from "../featured-products";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { prodId } = useParams();
  const products = useProducts();
  const [loader, setLoader] = useState(true);
  const [goCart, setGoCart] = useState(false);
  const addToCart = useAddToCart();
  const deleteDataBuy = useDeleteDataBuy();

  useEffect(() => {
    setLoader(true);
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    getProduct
      .then((res) => {
        prodId
          ? setProduct(res.find((item) => item._id === prodId))
          : setProduct(res);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [prodId, products]);

  const onAdd = (cantidad) => {
    addToCart(product, cantidad);
    setGoCart(true);
    removeFavorites(product?._id);
    deleteDataBuy();
  };

  return loader ? (
    <div className="preloader-container">
      <img
        className="preloader"
        src="https://i.imgur.com/NTByPHS.gif"
        alt="gif"
      />
    </div>
  ) : (
    <div
      style={{
        minHeight: "70vh",
        display: "block",
        alignContent: "center",
        marginTop: "40px",
      }}
    >
      <ItemDetails product={product} onAdd={onAdd} goCart={goCart} />
      <div>
        <FeaturedProducts title="RECOMMENDED FOR YOU" />
      </div>
    </div>
  );
};
export default ItemDetailContainer;
