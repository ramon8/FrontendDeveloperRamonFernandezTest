import React from "react";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./../public/theme/default";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "./../src/components/GlobalStyles";

addDecorator((story) => (
  <>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
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
