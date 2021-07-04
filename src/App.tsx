import * as React from "react";
import { ThemeProvider } from "@emotion/react";

import lightTheme from "./../public/theme/default";
import darkTheme from "./../public/theme/darkTheme";
import { GlobalStyles, Header } from "./components";
import { GameList } from "./pages/GameList/GameList";

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <GameList />
    <h1>Wellcome 1</h1>
  </ThemeProvider>
);
