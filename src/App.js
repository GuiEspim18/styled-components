import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/UI/themes";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const toogleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <BtnTheme onClick={toogleTheme}>
        <SwitcherTheme theme={theme}/>
      </BtnTheme>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
