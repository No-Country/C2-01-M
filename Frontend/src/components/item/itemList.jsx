import React from "react";
import Item from "./item";

const ItemList = ({ items, featured }) => {
  const newItems = featured ? items.slice(0, 5) : items;

  return (
    <div className="item-list-container" style={{ minHeight: featured && "0" }}>
      <>
        {newItems?.map((item) => {
          return <Item key={item._id} product={item} />;
        })}
      </>
    </div>
  );
};
export default ItemList;
