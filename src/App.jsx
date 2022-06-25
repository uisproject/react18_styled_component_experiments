import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Button } from "./components/styles/Button.style";
import GlobalStyles from "./components/styles/Global";

const theme = {
  // setting default color as global
  color: {
    button: "yellow",
    body: "blue",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <div>
          This is Customized Button <br />
          <Button backgroundColor="red">Hey</Button>
        </div>
        <div>
          <Header />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
