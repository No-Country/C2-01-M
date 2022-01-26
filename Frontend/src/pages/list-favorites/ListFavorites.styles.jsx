import styled from "styled-components"

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    margin: 0px 20px;
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
    margin: 0px 20px;
  }

  @media (max-width: 600px) {
    button {
      min-width: max-content;
    }
  }
`
export const WrapperTitle = styled.div`
  display: flex;
  flex: 1 0 auto;
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
  p {
    margin: 0;
  }
  .icon-delete {
    width: 24px;
    height: 24px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    .img-trash {
      width: 20px;
      height: 20px;
    }
    button {
      margin: 10px;
      background: black;
      color: #fff;
      font-weight: 600;
      padding: 10px;
      border-radius: 5px;
      border: none;
      @media (max-width: 600px) {
        max-width: max-content;
        font-size: 14px !important;
        padding: 0;
        font-weight: 300;
      }
    }
  }

  @media (max-width: 600px) {
    .button {
      max-width: max-content;
      font-size: 14px;
    }
  }
  @media (max-width: 690px) {
    .card-container-cart {
      flex-direction: column;
      font-size: 1.5em;
      img {
        width: 100%;
        height: auto;
      }
      .buttons {
        flex-direction: row;
        button {
          min-width: 60px;
          min-height: 40px;
        }
      }
    }
  }
`
