import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* max-width: 1440px; */
  max-height: 100vh;

  margin: 0 auto;

  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const MiddleSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: 630px;

  margin-top: 62px;
  margin-left: 50px;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export const MiddleHeader = styled.div`
  margin-bottom: 61px;

  @media (max-width: 700px) {
    margin-left: 40px;
  }

  h1 {
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;

    color: #1f2933;
  }

  div {
    display: flex;

    margin-top: 14px;
    align-items: flex-end;

    p {
      font-size: 16px;
      line-height: 19px;

      margin-left: 12px;

      color: #616e7c;

      strong {
        font-weight: bold;
        font-size: 30px;
        line-height: 36px;

        color: #f364a2;
      }
    }
  }
`;

export const ListOfPlans = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 630px;
  height: 88px;

  box-sizing: border-box;
  border-radius: 4px;

  position: relative;
  margin-bottom: 20px;

  background-color: transparent;

  transition: margin-bottom 0.5s, margin-top 0.5s;

  &:hover {
    margin-bottom: 15px;
    margin-top: 8px;
  }

  input[type="radio"]:checked + label {
    background-color: #fff6f9;
    border: 2px solid #ff8cba;

    svg {
      display: block;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    z-index: 1;
    margin-left: -40px;

    background-color: #da127d;
    color: white;
    border-radius: 50%;
    position: absolute;

    display: none;
  }

  input {
    position: absolute;
    margin-left: 22px;

    width: 24px;
    height: 24px;
  }

  label {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #e4e7eb;
    z-index: 0;

    width: 100%;
    height: 100%;

    padding-left: 62px;

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;

      color: #3e4c59;
    }

    span {
      font-size: 14px;
      line-height: 17px;

      color: #616e7c;
    }

    strong {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      z-index: 1;

      margin-right: 33px;
      /* margin-top: 8px; */

      color: #1f2933;
    }
  }
  @media (max-width: 700px) {
    width: 340px;
    margin: 0 auto 20px auto;

    label {
      strong {
        width: 70px;
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }
`;

export const RightSideContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
`;

export const RightSideButtons = styled.div`
  margin-top: 82px;
  margin-bottom: 90px;

  display: flex;
  justify-content: flex-end;

  button {
    min-width: 54px;
    min-height: 54px;

    border-radius: 50%;

    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);

    & + button {
      margin-left: 27px;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const PaymentDetails = styled.div`
  width: 100%;
  height: 100%;

  max-width: 382px;
  max-height: 642px;

  border: 2px solid #e4e7eb;
  box-sizing: border-box;
  border-radius: 4px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;

    color: #1f2933;

    margin: 40px 0 10px 40px;
  }

  @media (max-width: 700px) {
    max-width: 340px;

    margin: 0 auto 24px auto;
  }
`;

export const MoneyConverted = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;

  border-bottom: 2px solid #e4e7eb;

  div:first-of-type {
    margin-left: 60px;
  }

  div:last-of-type {
    margin-right: 60px;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: #1f2933;

    max-width: 60px;
    margin-bottom: 0px;

    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  span {
    font-size: 14px;
    line-height: 17px;
    margin-left: 8px;

    color: #52606d;
    img {
      border-radius: 50%;
      width: 14px;
      height: 14px;

      margin-right: 8px;
    }
  }

  button {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);

    /* margin: 0 57px; */

    svg {
      margin: 0 auto;
    }
  }
`;

export const TransactionInfos = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  margin: 50px auto 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    p {
      display: flex;
      align-items: center;

      font-size: 17px;
      line-height: 21px;

      color: #3e4c59;

      svg {
        margin-right: 18px;
      }
    }
  }

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1f2933;
    max-width: 140px;

    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    &:first-of-type {
      max-width: 210px;
    }
  }

  button {
    margin: 150px auto 0 auto;

    background: #f364a2;
    border-radius: 4px;

    height: 46px;
    width: 301px;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    color: #ffffff;

    transition: width 0.5s, height 0.5s;

    &:hover {
      width: 320px;
      height: 50px;
    }
  }

  @media (max-width: 700px) {
    button {
      margin: 150px auto 24px auto;
    }
  }
`;
