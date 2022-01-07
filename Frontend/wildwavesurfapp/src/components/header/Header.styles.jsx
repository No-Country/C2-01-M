import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: baseline;

  margin-top: 10px;
  margin-bottom: 10px;
`
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  z-index: 4;
  align-items: flex-end;
  li {
    margin-left: 40px;
    min-width: max-content;
    :hover {
      border-bottom: 2px solid black !important;
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
export const WrapperIMG = styled.div`
  margin-left: 20px;
  border: 2px solid black;
  padding: 5px;
  border-radius: 50%;
  height: 50px;
`
export const NoLogin = styled.span`
  color: #fff;
  border-radius: 50px;
  background: red;
  padding: 2px;
  width: 14px;
  height: 16px;
`
export const WrapperUserLogin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
`
