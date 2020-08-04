import styled from "styled-components";

import { Props } from "./index";

export const Container = styled.div``;

export const CalendarHeader = styled.div<Props>`
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

  span {
    display: flex;

    p {
      font-size: 18px;
      line-height: 22px;
      margin-right: 13px;

      color: #1f2933;
    }

    svg {
      color: ${(props) => (props.isOpen ? "#f364a2" : "")};

      &:hover {
        color: #f364a2;
        cursor: pointer;
      }
    }

    .calendar {
      position: absolute;

      margin-top: 32px;
      background-color: white;
      z-index: 1;

      display: ${(props) => (props.isOpen ? "inline" : "none")};
    }
  }
`;
