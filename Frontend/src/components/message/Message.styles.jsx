import styled from "styled-components"

export const WrapperMessage = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  text-align: center;
  font-size: 44px;
  .success {
    background: #97e297;
    margin: 0 40px;
    padding: 10px;
    border-radius: 5px;
    color: black;
  }
  .error {
    background: #e42b2b;
    margin: 0 40px;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
  }
  @media (max-width: 421px) {
    font-size: 20px;
    top: 20px;
  }
`
