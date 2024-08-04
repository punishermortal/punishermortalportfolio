import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import * as themes from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(themes.chosenTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main changeTheme={setCurrentTheme} theme={currentTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
