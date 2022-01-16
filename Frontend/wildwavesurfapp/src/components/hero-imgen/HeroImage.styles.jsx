import styled from "styled-components"

export const Container = styled.div`
  width: 600px;
  height: 600px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: 100% auto;
  ${({ $bsStyle }) => $bsStyle || ""};
`
