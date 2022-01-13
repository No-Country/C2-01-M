import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  outline: none;

  border: 1 px solid #333;
  .input {
    padding: 14px;
    font-size: 18px !important;
    ::placeholder {
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    .input {
      padding: 8px;
    }
  }
`
