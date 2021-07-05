/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import { LayoutProps } from "./Layout.props";
import getStyles from "./Layout.styles";

import { Header } from "../Header";

export const Layout = (props: LayoutProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  return (
    <div css={styles} className={props.className}>
      <Header togglerLabel={props.togglerLabel} togglerValue={props.togglerValue} onTogglerChange={props.onTogglerChange} title={props.title} />
      {props.children}
    </div>
  );
};
