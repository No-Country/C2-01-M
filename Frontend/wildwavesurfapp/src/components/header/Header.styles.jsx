import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  align-items: center;
`
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  z-index: 4;
  li {
    margin-left: 40px;
    :hover {
      border-bottom: 2px solid black !important;
    }
    & :hover {
      background-color: red;
    }
  }
`
export const DisplayOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  max-width: none !important;
`
