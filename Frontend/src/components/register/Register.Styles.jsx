import styled from "styled-components"

export const WrapperSignup = styled.div`
  margin-top: 6%;
  width: 100%;
  padding: ${({ buy }) => (buy ? "0" : "50px")};
  transition: 0.5;
  transition-delay: 0.25s;
  display: flex;
  justify-content: ${({ buy }) => (buy ? "flex-start" : "center")};
  flex-wrap: nowrap;
  > .form {
    width: 400px;
    display: flex;
    flex-direction: column;
    border: ${({ buy }) => (buy ? "none" : "1px solid black")};
    padding: 20px;
    border-radius: 10px;
  }
  h3 {
    font-size: 34px;
    text-align: center;
    display: ${({ buy }) => (buy ? "none" : "")};
  }
  .forgot {
    color: #333;
  }

  @media (max-width: 600px) {
    width: auto;
    margin-top: 0;
    .form {
      width: 300px;
    }
    h3 {
      font-size: 28px;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ buy }) => (buy ? "flex-start" : "center")};
  button {
    position: relative;
    padding: 10px;
    width: ${({ buy }) => (buy ? "100px" : "100%")};
    border-radius: ${({ buy }) => (buy ? "5px" : "10px")};
    border: none;
    background-color: black;
    color: #fff;
    font-weight: 900;
    font-size: 16px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    padding: 5px;
    cursor: pointer;
  }
`
