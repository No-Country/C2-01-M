import React, { useState } from "react"
import search from "../../assets/search.svg"

//styles
import { WrapperSearch, WrapperInput } from "./Search.Styles"
const Search = () => {
  const [value, setValue] = useState("")

  return (
    <WrapperSearch>
      <WrapperInput>
        <input
          type='text'
          onKeyDown={(e) => {
            if (e.code === "Enter") setValue("")
          }}
          placeholder='Search...'
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <button onClick={() => setValue("")}>
          <img src={search} alt='search' />
        </button>
      </WrapperInput>
    </WrapperSearch>
  )
}

export default Search
