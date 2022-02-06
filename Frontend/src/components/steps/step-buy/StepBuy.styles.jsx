import styled from "styled-components"

export const WrapperSteps = styled.div`
  width: 60%;
  margin: 20px;
  padding: 30px 10px;

  border: 1px solid gray;
  border-radius: 5px;
  text-align: left;
  h2 {
    margin: 0;
  }
  p {
    color: red;
  }
  .pay {
    border-bottom: 1px solid #eeeeee;
  }
  .pay-pal {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  button {
    height: 50px;
    margin: 10px;
    padding: 10px;
    background: black;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 5px;
  }
  .gift {
    display: flex;
    label {
      margin-left: 10px;
    }
  }
  @media (max-width: 660px) {
    width: 90%;
    .pay-pal {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 430px) {
    .pay-pal {
      flex-direction: column;
      align-items: center;
    }
  }
`
