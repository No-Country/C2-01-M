import styled from "styled-components"

export const WrapperError = styled.div`
  text-align: center;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  ${({ $bsStyle }) => $bsStyle || ""};
`
