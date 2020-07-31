import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const LeftSideContent = styled.div`
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

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
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

  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 45px;
      margin-left: 62px;
    }
  }
`;

export const MiddleSideContent = styled.div``;

export const RigthSideContent = styled.div``;
