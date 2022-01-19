import styled from "styled-components"

export const WrapperHeader = styled.div`
  display: flex;
  img {
    flex: 0 0 auto;
  }
  button {
    min-width: 300px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    background: black;
  }
  .wrapper-button {
    position: absolute;
    right: 93px;
    top: 140px;
  }
`
export const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  h2 {
    background: #eeeeee;
    width: 100%;
    text-align: left;
  }
`
export const WrapperCart = styled.div`
  width: 90%;
  margin: auto;
  .card-container-cart {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0.5rem auto;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  .icon-delete {
    width: 24px;
    height: 24px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    button {
      margin: 10px;
      background: black;
      color: #fff;
      font-weight: 600;
      padding: 10px;
      border-radius: 5px;
      border: none;
    }
  }
`
