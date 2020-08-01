import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;

  margin: 0 auto;

  display: flex;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  margin-top: 63px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 62px;

  img {
    width: 60px;
    height: 60px;

    border-radius: 50%;

    margin-bottom: 19px;
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;

    color: #1f2933;

    margin-bottom: 7px;
  }

  p {
    font-size: 16px;
    line-height: 19px;

    color: #616e7c;
  }
`;

export const ServicesButtons = styled.div`
  display: flex;
  flex-direction: column;
  height: 608px;
  margin-top: 15px;

  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      align-items: center;

      padding: 22px 0 22px 62px;

      text-decoration: none;

      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.015em;

      color: #1f2933;

      svg {
        margin-right: 19px;
      }
    }
  }
`;

export const MiddleSideContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 102px;
  margin-top: 62px;
`;

export const MiddleHeader = styled.div`
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

export const SelectionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    width: 267px;
    height: 53px;

    background: #f5f7fa;
    border-radius: 8px;

    border: 1px solid black;

    & + div {
      margin-left: 92px;
    }

    p {
      padding: 16px 16px 0 16px;

      font-size: 16px;
      line-height: 19px;

      color: #52606d;
    }

    select {
      width: 100%;
      height: 100%;

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
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;

    width: 267px;
    height: 128px;

    background: #f5f7fa;
    border-radius: 8px;

    span {
      margin: 27px auto 8px 26px;

      font-size: 14px;
      line-height: 17px;

      color: #52606d;
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

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 74px;
  margin-bottom: 16px;

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #1f2933;
  }

  div {
    display: flex;

    p {
      font-size: 18px;
      line-height: 22px;
      margin-right: 13px;

      color: #1f2933;
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

  width: 630px;
  height: 88px;

  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 4px;

  position: relative;
  margin-bottom: 20px;

  input {
    position: absolute;
    margin-left: 22px;

    width: 24px;
    height: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 62px;

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;

      color: #3e4c59;
    }

    span {
      margin-top: -16px;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    margin-right: 33px;
    margin-top: 8px;

    color: #1f2933;
  }
`;

export const RigthSideContainer = styled.div``;

export const PaymentDetails = styled.div``;
