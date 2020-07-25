import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import themes from "../styles/themes";
import useDarkMode from "use-dark-mode";
import TestComponent from "../components/TestComponent";

const GlobalStyle = createGlobalStyle`
:root{
    background-color: ${(props) => props.theme.colours.background};
}
`;

const IndexPage = () => {
  const darkMode = useDarkMode(false);
  return (
    <ThemeProvider theme={darkMode.value ? themes.dark : themes.light}>
      <GlobalStyle />
      <TestComponent handleClick={darkMode.toggle} isDark={darkMode.value} />
    </ThemeProvider>
  );
};

export default IndexPage;
