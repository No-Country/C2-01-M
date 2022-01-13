import styled from "styled-components"

export const ItemDetailsStyle = styled.div`
  .block {
    display: block;
    margin: 0;
    margin-top: 50px;
    padding: 0;
    text-align: left;
  }

  .itemDetailsContainer {
    width: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    img {
      display: inline-block;
      width: 100%;
      max-height: 500px;
      margin: 0;
      padding: 0;
      object-fit: contain;
    }
  }

  .arrow-back {
    display: flex;
    align-items: center;
    margin-left: 80px;
    margin-bottom: 40px;
    img {
      width: 40px;
      cursor: pointer;
    }
    span {
      margin-left: 20px;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .title {
    font-weight: 700;
    text-transform: uppercase;
  }

  .imageTarjetas {
    width: 100%;
  }

  .tallasContainer {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    div {
      flex-basis: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1/1;
      border: 1px solid rgba(0, 0, 0, 0.251);
      background-color: rgba(0, 89, 255, 0.114);
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 89, 255, 0.452);
      }
      &:active {
        background-color: rgba(19, 75, 180, 0.452);
      }
    }
  }

  .buttonAddToCart {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      flex-basis: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      margin: auto;
      height: 73px;
      img {
        display: inline-block;
        width: 35px;
      }
      span {
        font-size: 20px;
        font-weight: 500;
        margin-left: 20px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .itemDetailsContainer {
      grid-template-columns: 1fr;
    }

    .tallasContainer {
      flex-wrap: wrap;
    }

    .buttonAddToCart {
      button {
        flex-basis: 80%;
      }
    }
  }
`
