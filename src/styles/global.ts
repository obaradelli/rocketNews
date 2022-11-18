import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
  a {
    all: unset;
  }
body { 
  background: ${(props) => props.theme.colors["--body-bg-color"]};
 }
`;
