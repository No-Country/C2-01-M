import React from "react"
import { Link } from "react-router-dom"
import { getItemsList } from "../../constants/get-items-list-navbar"

//styles
import { Wrapper } from "./NavbarList.Styles"

const NavbarList = ({ type }) => {
  const dataList = type ? getItemsList(type) : null

  return (
    <Wrapper style={{ display: type ? "" : "none" }}>
      <ul>
        {dataList &&
          dataList.map((item, index) => {
            return (
              <li key={index}>
                <Link to={"#"}>{item}</Link>
              </li>
            )
          })}
      </ul>
    </Wrapper>
  )
}

export default NavbarList
