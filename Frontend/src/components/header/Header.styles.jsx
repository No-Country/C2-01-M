import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: baseline;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  @media (max-width: 1200px) {
    img {
      margin: 0 !important;
    }
  }
  @media (max-width: 991px) {
    justify-content: baseline !important;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const WrapperNavbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: baseline;
  color: var(--bodyColor);
  @media (max-width: 601px) {
    width: auto;
    order: 1;
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  z-index: 4;
  align-items: flex-end;
  li {
    color: black;
    margin-left: 40px;
    cursor: pointer;
    min-width: max-content;
    font-size: 14px;
    :hover {
      border-bottom: 2px solid black;
    }
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
    li {
      margin-left: 20px;
      font-size: 20px;
    }
  }
  @media (max-width: 991px) {
    position: absolute;
    top: 87px;
    left: ${({ showNavbar }) => (showNavbar ? "0" : "-500px")};
    background-color: #eee;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 20px;
    li {
      color: black;
      :hover {
        border-color: black !important;
      }
    }
  }
`
export const WrapperIMG = styled.div`
  margin: 0 20px;
  border: 2px solid black;
  padding: 5px;
  border-radius: 50%;
  height: 63px;
  @media (max-width: 451px) {
    display: flex;
    justify-content: center;
  }
`
export const NoLogin = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50px;
  background: red;
  padding: 9px;
  width: 14px;
  height: 16px;
`
export const WrapperUserLogin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
  .login {
    display: flex;
    align-items: flex-end;
    margin-left: 10px;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    margin: 5px;
  }
  @media (max-width: 430px) {
    .img-user {
      width: 55px;
    }
  }
`
export const WrapperTrolley = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  img {
    vertical-align: inherit;
  }
  @media (max-width: 1200px) {
    margin: 5px;
  }
  @media (max-width: 430px) {
    a {
      display: flex;
    }
    img {
      width: 55px;
    }
  }
`

export const QuantityItems = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5px;
  color: #fff;
  border-radius: 50px;
  background: green;
  padding: 9px;
  width: 14px;
  height: 16px;
  bottom: 3px;
`
export const WrapperMenu = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: block;
    cursor: pointer;
    margin-left: 10px !important;
    margin-top: 4px;
  }
  @media (max-width: 600px) {
    order: 1;
    width: 60px;
    margin-right: 10px;
  }
`
export const WrapperSearch = styled.div`
  @media (max-width: 650px) {
    order: 4;
    flex: 0 0 100%;
    display: none;
  }
`
export const WrapperName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 16px !important;
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
