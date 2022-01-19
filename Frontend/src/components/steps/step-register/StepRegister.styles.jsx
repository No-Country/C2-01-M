import styled from "styled-components"

export const WrapperSteps = styled.div`
  width: 60%;
  margin: 20px;
  padding: 30px 10px;

  border: 1px solid gray;
  border-radius: 5px;
  @media (max-width: 660px) {
    width: 90%;
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    min-width: 40%;
    padding: 10px;
    background: transparent;
    font-weight: 600;
  }
  @media (max-width: 412px) {
    button {
      font-size: 14px;
      min-width: 30%;
    }
  }
`
