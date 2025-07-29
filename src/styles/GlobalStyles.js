import { createGlobalStyle } from "styled-components";
import { globalStyles } from "twin.macro";

const GlobalStyles = createGlobalStyle(
  globalStyles,
  `
    html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      width: 100%;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    #root {
      overflow-x: hidden;
      width: 100vw;
    }

    .ReactModal__Overlay {
      transition: transform 300ms ease-in-out;
      transition-delay: 100ms;
      transform: scale(0);
    }

    .ReactModal__Overlay--after-open {
      transform: scale(1);
    }

    .ReactModal__Overlay--before-close {
      transform: scale(0);
    }
  `
);

export default GlobalStyles;
