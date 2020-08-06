import styled from "styled-components";

export const Container = styled.div``;

export const SelectionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    max-width: 267px;
    height: 53px;

    background: #e8eced;
    border-radius: 8px;

    p {
      width: 40px;
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

  @media (max-width: 700px) {
    flex-direction: column;

    div {
      margin: 4px 0;
      width: 100%;

      div {
        width: 70%;
        margin: 0 auto;
      }
    }
  }
`;

export const ConvertedMoneyDiv = styled.div`
  width: 100%;
  margin-top: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;

    div {
      margin: 4px 0;
      width: 100%;
    }
  }

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

    background: #e8eced;
    border-radius: 8px;

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
