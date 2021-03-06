import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  min-height: 200px;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.28);
  transition-duration: 0.2s;
  transform: scale(1);
  border: 2px solid var(--bodyColor);
  @media (max-width: 1200px) {
    width: 33%;
    margin: 5px;
    margin-bottom: 30px;
    min-height: 180px;
  }
  @media (max-width: 690px) {
    width: 90%;
    min-height: 150px;
  }
`
