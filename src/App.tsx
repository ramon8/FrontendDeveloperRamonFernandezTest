import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import lightTheme from "./../public/theme/default";
import darkTheme from "../public/theme/alternative";
import { GlobalStyles } from "./components";
import { GameList } from "./pages/GameList/GameList";
import { GameDetail } from "./pages/GameDetail/GameDetail";
import { useState } from "react";

export const App = () => {
  const [isThemeLight, setIsThemeLight] = useState<boolean>(true);

  const onTogglerChange = (e: any) => {
    setIsThemeLight(!e.target.checked);
  };
  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <Router>
        <Switch>
          <Route path="/list">
            <GameList onTogglerChange={onTogglerChange} />
          </Route>
          <Route path="/detail/:id">
            <GameDetail onTogglerChange={onTogglerChange} />
          </Route>
          <Route path="/">
            <GameList onTogglerChange={onTogglerChange} />
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};
