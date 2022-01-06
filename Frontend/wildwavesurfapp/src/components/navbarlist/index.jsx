import React from "react"
import { getItemsList } from "../../constants/get-items-list-navbar"

//styles
import { Wrapper } from "./NavbarList.Styles"

const NavbarList = ({ open, setOpen, type }) => {
  const dataList = type ? getItemsList(type) : null

  return (
    <Wrapper style={{ display: type ? "" : "none" }}>
      <ul>
        {dataList &&
          dataList.map((item, index) => {
            return (
              <li key={index}>
                <a href='#'>{item}</a>{" "}
              </li>
            )
          })}
      </ul>
    </Wrapper>
  )
}

export default NavbarList
