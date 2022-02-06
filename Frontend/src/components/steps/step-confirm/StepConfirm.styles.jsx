import styled from "styled-components"

export const Wrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
  h2 {
    font-size: 44px;
  }
  h3 {
    font-size: 18px;
  }
  button {
    width: max-content;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: black;
    color: #fff;
    font-weight: 600;
    margin-bottom: 50px;
  }
  .comments {
    margin-top: 30px;
  }
  textarea {
    margin-bottom: 20px;
  }
  @media (max-width: 430px) {
    h2 {
      font-size: 34px;
    }
  }
`
