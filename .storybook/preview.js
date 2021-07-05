import { ThemeProvider } from "@emotion/react";
import { addDecorator } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import lightTheme from "./../public/theme/default";
import { GlobalStyles } from "./../src/components/GlobalStyles";

addDecorator((story) => (
  <>
    <Router>
      <Switch>
        <Route path="/">
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {story()}
          </ThemeProvider>
        </Route>
      </Switch>
    </Router>
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
