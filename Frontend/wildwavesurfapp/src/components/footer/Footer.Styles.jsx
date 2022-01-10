import styled from "styled-components"

export const WrapperFooter = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;

  background: black;
  color: #fff;
  h4 {
    min-width: max-content;
  }

  h6 {
    font-size: 14px;
    margin-left: 10px;
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
      margin: 20px 0;
      order: 1;
    }
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    /*     margin: 0;
    font-size: 12px; */
    h6 {
      margin: 20px 0;
      order: 1;
    }
  }
`
