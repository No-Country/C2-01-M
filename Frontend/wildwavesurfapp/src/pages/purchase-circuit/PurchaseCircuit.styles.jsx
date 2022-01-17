import styled from "styled-components"

export const Content = styled.div``

export const Hr = styled.hr`
  margin: 40px 0;
  border: 1px solid gray;
`

export const WrapperBuy = styled.div`
  display: flex;
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
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
export const WrapperInfoBuy = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`
export const WrapperSummary = styled.div`
  background: #eeeeee;
  width: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 20px;
  .check-title {
    text-align: left;
  }
  h2 {
    font-weight: 800;
  }
  h3 {
    display: flex;
    justify-content: space-around;
  }
  .shipping {
    border-top: 1px solid gray;
    padding: 20px 0;
    margin: 10px 0;

    text-align: left !important;
  }
  @media (max-width: 1375px) {
    width: 400px;
  }
  @media (max-width: 1375px) {
    width: 300px;
  }
  @media (max-width: 660px) {
    width: 400px;
    margin-bottom: 30px;
  }
`
