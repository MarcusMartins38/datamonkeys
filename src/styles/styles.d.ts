import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      body: {
        background: string;
        text: string;
      };

      button: {
        text: string;
      };

      p?: {
        text: string;
      };

      h1: {
        text: string;
      };

      a?: {
        text: string;
      };

      inputP?: {
        text: string;
      };

      inputStrong?: {
        text: string;
      };

      inputChecked?: {
        text: string;
      };

      paymentH?: {
        text: string;
      };

      paymentSpan: {
        text: string;
      };
    };
  }
}
