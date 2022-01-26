import React, { useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import trash from "../../assets/trash.svg";
import trolley from "../../assets/trolley-white.svg";
import { useAddToCart, useProducts } from "../../context/ProductContext";

// styles
import {
  WrapperHeader,
  WrapperTitle,
  WrapperCart,
} from "./ListFavorites.styles";
import { Link } from "react-router-dom";
import useResize from "../../hooks/useResize";

const ListFavorites = () => {
  const products = useProducts();
  const addToCart = useAddToCart();
  const [addLocalStorage, setAddLocalStorage] = useState();
  const [favoritesProducts, setFavoritesProducts] = useState();
  const resize = useResize();

  const removeFavorites = (id) => {
    const favorites = localStorage.getItem("itemsLikes");
    const newFavorites = JSON.parse(favorites);
    const newArray = newFavorites.filter((item) => item !== id);
    setAddLocalStorage(newArray);
  };

  useEffect(() => {
    if (addLocalStorage) {
      localStorage.setItem("itemsLikes", JSON.stringify(addLocalStorage));
    }
    const favorites = localStorage.getItem("itemsLikes");
    if (favorites) {
      const favoriteProducts = products.filter((item) =>
        favorites.includes(item._id)
      );
      setFavoritesProducts(favoriteProducts);
    }
  }, [addLocalStorage, products]);

  return (
    <div
      className="favorite-container"
      style={{ paddingBottom: "50px", minHeight: "100vh", height: "100%" }}
    >
      <WrapperHeader>
        <img src={heart} alt="heart" width={40} />
        <WrapperTitle>
          <h2>My favorites</h2>
        </WrapperTitle>
        <div className="wrapper-button">
          <button onClick={() => setAddLocalStorage([])}>DELETE ALL</button>
        </div>
      </WrapperHeader>
      <WrapperCart>
        {favoritesProducts &&
          favoritesProducts?.map((item) => {
            const { image, title, price, _id } = item;
            return (
              <div
                key={_id}
                className="card-container-cart"
                aria-current={true}
              >
                <img src={image} alt={title} />
                <p>{title} </p>
                <span>Price: ${price} </span>
                <div className="buttons">
                  <button onClick={() => removeFavorites(_id)}>
                    {resize?.width > 730 ? (
                      "REMOVE FROM FAVORITES"
                    ) : (
                      <img
                        className="img-trash"
                        src={trash}
                        alt={"delete favorite"}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item);
                      return removeFavorites(_id);
                    }}
                  >
                    {resize?.width > 630 ? (
                      "ADD TO CART"
                    ) : (
                      <img
                        className="img-trash"
                        src={trolley}
                        alt={"add cart"}
                      />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        {favoritesProducts?.length === 0 && (
          <div className="empty-cart">
            <h3>You have no products in the favorites list.</h3>
            <Link to="/products"> Products </Link>
          </div>
        )}
      </WrapperCart>
    </div>
  );
};

export default ListFavorites;
