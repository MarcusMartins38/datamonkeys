import styled from "styled-components";

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

    color: ${(props) => props.theme.colors.paymentH?.text};

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
    color: ${(props) => props.theme.colors.p?.text};

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

    color: ${(props) => props.theme.colors.paymentSpan?.text};
    img {
      border-radius: 50%;
      width: 14px;
      height: 14px;

      margin-right: 8px;

      color: ${(props) => props.theme.colors.p?.text};
    }
  }

  button {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);

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

      color: ${(props) => props.theme.colors.inputP?.text};

      svg {
        margin-right: 18px;
      }
    }
  }

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.inputStrong?.text};
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
