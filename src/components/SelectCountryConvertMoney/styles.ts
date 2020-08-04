import styled from "styled-components";
export const SelectionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */

  div {
    display: flex;
    align-items: center;
    /* AQUI, COLOCAR MAX */
    max-width: 267px;
    height: 53px;

    background: #f5f7fa;
    border-radius: 8px;

    border: 1px solid black;

    p {
      margin-right: 16px;
      margin-left: 16px;

      font-size: 16px;
      line-height: 19px;

      color: #52606d;
    }

    img {
      width: 24px;
      height: 24px;

      margin-right: 8px;

      border-radius: 50%;
    }

    select {
      width: 100%;
      height: 100%;

      margin: 0 auto;

      background-color: transparent;
      border-radius: 8px;

      font-weight: 600;
      font-size: 16px;
      line-height: 19px;

      color: #323f4b;
    }
  }
`;

export const ConvertedMoneyDiv = styled.div`
  width: 100%;
  margin-top: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    min-width: 24px;
    min-height: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    max-width: 267px;
    height: 128px;

    background: #f5f7fa;
    border-radius: 8px;
    border: 1px solid black;

    span {
      margin: 27px auto 8px 26px;

      font-size: 14px;
      line-height: 17px;

      color: #52606d;
    }

    input {
      font-weight: 600;
      font-size: 30px;
      line-height: 36px;

      margin-right: 10px;
      color: #323f4b;

      max-width: 97px;

      background-color: transparent;
    }

    h2 {
      margin: 0 auto 0 26px;

      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #323f4b;

      /* margin-right: 100px; */

      strong {
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;

        margin-right: 10px;
      }
    }
  }
`;
