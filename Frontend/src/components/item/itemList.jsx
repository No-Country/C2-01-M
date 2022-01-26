import React from "react"
import Item from "./item"
import useResize from "../../hooks/useResize"

const ItemList = ({ items, featured }) => {
  const resize = useResize()

  const newItems = featured
    ? items.slice(0, resize.width < 1370 ? 4 : 5)
    : items

  return (
    <div
      className='item-list-container'
      style={{ minHeight: featured && "0", paddingBottom: featured && "0" }}
    >
      <>
        {newItems?.map((item) => {
          return (
            <Item click={window.scrollTo(0, 0)} key={item._id} product={item} />
          )
        })}
      </>
    </div>
  )
}
export default ItemList
