/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import { CardProps } from "./Layout.props";
import getStyles from "./Layout.styles";

import { Header } from "../Header";

export const Layout = (props: CardProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  return (
    <div css={styles} className={props.className}>
      <Header title={props.title} />
      {props.children}
    </div>
  );
};
