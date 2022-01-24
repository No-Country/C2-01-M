import styled from "styled-components"

export const WrapperFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0 !important;

  background: black;
  color: #fff !important;
  h4 {
    min-width: max-content;
    margin: 10px;
    color: #fff !important;
  }

  h6 {
    font-size: 14px;
    margin: 5px;
    margin-left: 10px;
    color: #fff !important;
  }
  a {
    align-items: center;
    margin-top: 10px;
  }
  img {
    margin: 0px 10px;
  }
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 12px;
    h6 {
      margin: 10px 0;
      order: 1;
      font-size: 12px;
    }
  }
  @media (max-width: 991px) {
    flex-direction: column;
    h6 {
      margin: 0;
      order: 1;
    }
  }
`
