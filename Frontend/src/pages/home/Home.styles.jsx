import styled from "styled-components"

export const WrapperHeroImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`
export const SurfboardsTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
`
export const WrapperComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
    margin: 0;
  }
  @media (max-width: 690px) {
    flex-direction: column;
  }
`

export const WrapperImg = styled.div`
  display: flex;
  justify-content: ${({ right }) => (right ? "flex-end" : "flex-start")};
  width: 100%;
  margin-left: ${({ right }) => (right ? "-20px" : "20px")};
`
