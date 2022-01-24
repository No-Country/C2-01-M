import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height: 100%;
  text-align: center;
  margin: 0;
  background-image: url("https://i.imgur.com/GjKOrVm.jpg");
  background-position: center;
  background-repeat: none;
  background-size: cover;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #060606;
    font-family: "Oswald", sans-serif;
    margin-top: 1rem;
    letter-spacing: 4px;
  }
  @media (max-width: 690px) {
    flex-direction: column;
    height: 100%;
  }
`
