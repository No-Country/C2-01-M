import styled from "styled-components"

export const Container = styled.div`
  width: 600px;
  height: 600px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: 100% auto;
  text-align: center;
  @media (max-width: 1280px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 890px) {
    width: 350px;
    height: 350px;
    margin-bottom: 50px;
  }
  @media (max-width: 410px) {
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
  }
  ${({ $bsStyle }) => $bsStyle || ""};
`
