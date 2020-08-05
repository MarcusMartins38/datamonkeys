import styled from "styled-components";
export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 283px;
  height: 100%;

  margin: 63px auto 0 0;
  left: 0;
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

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

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
  }

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    margin-left: 20px;

    img {
      margin-right: 10px;
    }

    div {
      align-items: flex-start;
    }
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

      transition: color 0.5s, border-left 1s;

      &:hover {
        color: #e8368f;
        border-collapse: separate;
        border-spacing: 115px 0;
        border-left: 3px solid #e8368f;
      }

      svg {
        margin-right: 19px;
      }
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
