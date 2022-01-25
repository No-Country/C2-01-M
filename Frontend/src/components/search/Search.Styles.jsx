import styled from "styled-components";

export const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  align-content: flex-start;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  input {
    border: none;
    font-size: 18px;
    outline: none;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  @media (max-width: 991px) {
    margin: auto;
    input {
      font-size: 16px;
      max-width: 210px;
    }
  }
`;
