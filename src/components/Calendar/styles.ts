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
      z-index: 1;

      color: black;

      display: ${(props) => (props.isOpen ? "inline" : "none")};
    }
    .DayPicker {
      background: white;
      border-radius: 10px;
    }

    .DayPicker-Month {
      border-collapse: separate;
      border-spacing: 8px;
      margin: 16px;
    }
    .DayPicker-Day {
      width: 40px;
      height: 40px;
    }
    .DayPicker-Day--available:not(.DayPicker-Day--outside) {
      background: #f6f5f5;
      border-radius: 10px;
      color: black;
    }
    .DayPicker:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background: #f68dbb;
      color: white;
    }

    .DayPicker-Day--selected {
      background: #f364a2 !important;
      border-radius: 10px;
      color: white !important;
      font-weight: bold;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    align-items: flex-start;

    h2 {
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 16px;
    }
  }
`;
