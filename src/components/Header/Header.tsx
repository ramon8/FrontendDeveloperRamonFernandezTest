/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import { HeaderProps } from "./Header.props";
import getStyles from "./Header.styles";

export const Header = (props: HeaderProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  return (
    <div css={styles}>
      <img className="logo" src={theme.logoSecondary} />
      <h1>{props.title}</h1>
    </div>
  );
};
