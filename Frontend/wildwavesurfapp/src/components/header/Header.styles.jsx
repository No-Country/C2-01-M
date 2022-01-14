import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: baseline;

  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    img {
      margin: 0 !important;
    }
  }
  @media (max-width: 991px) {
    justify-content: baseline !important;
  }
  @media (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
export const WrapperNavbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: baseline;
  @media (max-width: 991px) {
    justify-content: space-between;
  }
  @media (max-width: 601px) {
    width: auto;
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  z-index: 4;
  align-items: flex-end;
  li {
    margin-left: 40px;
    cursor: pointer;
    min-width: max-content;
    font-size: 14px;
    :hover {
      border-bottom: 2px solid black !important;
    }
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
    li {
      margin-left: 20px;
    }
  }
  @media (max-width: 991px) {
    position: absolute;
    top: 120px;
    left: ${({ showNavbar }) => (showNavbar ? "0" : "-500px")};
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
  height: 63px;
  @media (max-width: 451px) {
    display: none;
  }
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
  @media (max-width: 1200px) {
    margin: 5px;
  }
`
export const WrapperTrolley = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  @media (max-width: 1200px) {
    margin: 5px;
  }
`

export const QuantityItems = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 5px;
  color: #fff;
  border-radius: 50px;
  background: green;
  padding: 3px;
  width: 14px;
  height: 16px;
`
export const WrapperMenu = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: block;
    cursor: pointer;
    margin-left: 10px !important;
    margin-top: 4px;
  }
`
export const WrapperSearch = styled.div`
  @media (max-width: 450px) {
    order: 4;
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`
export const WrapperName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 10px;
  color: #fff;
  font-weight: 800;
  background: blue;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`
export const WrapperCart = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 150px;
`
