import styled from "styled-components";

export const ItemDetailsStyle = styled.div`
  .block {
    display: block;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    text-align: left;
  }
  .pay-delivery {
    display: flex;
    justify-content: space-around;
  }
  pay-delivery-options {
    width: 100%;
    text-align: center;
  }

  .img-pay-delivery img {
    margin: 1rem;
    width: 45px;
    height: 45px;
  }
  .grid-centrador {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding-top: 10px;
    box-sizing: border-box;
    margin-bottom: 30px;
  }

  .itemDetailsContainer {
    width: 80%;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .imageContainer {
    display: inline-block;
    width: 100%;
    max-height: 700px;
    margin: 0;
    padding: 0;
    object-fit: contain;
    img{
      object-fit: contain;
    }
  }
  .img-detail {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0.5rem;
  }

  .arrow-back {
    display: flex;
    align-items: center;
    margin-left: 80px;

    span {
      margin-left: 20px;
      font-size: 14px;
      font-weight: lighter;
    }
    span:hover {
      cursor: pointer;
      color: white;
    }
  }

  .title {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .price-detail {
    font-size: 1.5rem;
    font-weight: bolder;
    text-transform: uppercase;
  }
  .description-detail {
    font-size: 1.2rem;
    font-weight: lighter;
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

  .detailsItems {
    box-sizing: border-box;
    margin: 1rem;
  }
  .finish-shop-container {
    display: flex;
  }
  .finish-shop {
    width: 100%;
    padding: 1rem;
    background-color: red;
    text-align: center;
    color: white;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bolder;
    border-radius: 0.5rem;
  }
  .preloader-container{
    display: flex:
    justify-content: center;
    align-items: center;
    height: 70vh;   
  }
  .preloader-container img{
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 700px) {
    .itemDetailsContainer {
      grid-template-columns: 1fr;
      border: none;
    }

    .tallasContainer {
      flex-wrap: wrap;
    }

    .buttonAddToCart {
      button {
        flex-basis: 80%;
      }
    }

    .imageContainer,
    .detailsItems {
      padding: 10px;
    }
  }
`;
