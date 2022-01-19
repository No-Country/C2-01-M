import styled from "styled-components"

export const Content = styled.div``

export const Hr = styled.hr`
  margin: 40px 0;
  border: 1px solid gray;
`

export const WrapperBuy = styled.div`
  display: flex;
  width: ${({ step }) => step === "3" && "100%"};

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
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
