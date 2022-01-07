import styled from "styled-components"

export const WrapperSignin = styled.div`
  width: 100%;
  padding: 50px;
  transition: 0.5;
  transition-delay: 0.25s;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  > .form {
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;
  }
  h3 {
    font-size: 34px;
    text-align: center;
  }
  .forgot {
    color: #333;
  }

  @media (max-width: 991px) {
  }
`
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    position: relative;
    padding: 10px;
    width: 100%;
    border-radius: 20px;
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
