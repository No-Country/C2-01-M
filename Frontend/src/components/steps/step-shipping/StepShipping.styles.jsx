import styled from "styled-components"

export const WrapperSteps = styled.div`
  width: 60%;
  margin: 20px;
  padding: 30px 10px;

  border: 1px solid gray;
  border-radius: 5px;
  h2 {
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25rem;
  }
  .wrapper-button {
    display: flex;
    justify-content: flex-end;
  }
  button {
    background: black;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
  }
  @media (max-width: 660px) {
    width: 90%;
  }
`
export const WrapperRadio = styled.div`
  display: flex;
  border-bottom: 1px solid #cac8c8;
  margin-bottom: 10px;
`
export const WrapperSubtitle = styled.div`
  h3 {
    text-align: left;
    margin: 0;
  }
`

export const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  min-width: 150px;

  label {
    margin-left: 10px;
  }
`
