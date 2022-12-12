import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    margin : 0;
    padding:0;
    background-color: ${(props) => props.theme.bgColor};
  }
`;
