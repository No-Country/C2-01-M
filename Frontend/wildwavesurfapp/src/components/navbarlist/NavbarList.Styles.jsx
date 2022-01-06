import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  top: 0px;
  z-index: 4;
  border-top: 2px dashed black;
  border-bottom: 2px dashed black;
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;

    li {
      width: 20%;
      margin-bottom: 20px;
      a {
        text-decoration: none;
        color: black;
        :hover {
          border-bottom: 2px solid black;
        }
      }
    }
  }
`
