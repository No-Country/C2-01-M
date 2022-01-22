import styled from "styled-components";

export const WrapperHeroImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-image: url("https://i.imgur.com/GCVGSoG.jpg");
  background-position: center;
  background-repeat: none;
  background-size: cover;
  @media (max-width: 690px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const SurfboardsTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
export const WrapperComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 40vh;
  background-image: url("https://i.imgur.com/GjKOrVm.jpg");
  background-position: center;
  background-repeat: none;
  background-size: cover;
  color: black;

  p {
    font-size: 24px;
    margin: 0;
  }
  @media (max-width: 690px) {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: ${({ right }) => (right ? "flex-end" : "flex-start")};
  width: 100%;
  margin-left: ${({ right }) => (right ? "-20px" : "20px")};
`;
