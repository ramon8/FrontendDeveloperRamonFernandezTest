/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import { HeaderProps } from "./Header.props";
import getStyles from "./Header.styles";
import { useHistory } from "react-router-dom";
import { Toggler } from "../Toggler";

export const Header = (props: HeaderProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);
  const history = useHistory();

  const onClickImage = () => {
    history.push("/list");
  };

  return (
    <div css={styles}>
      <img onClick={onClickImage} className="logo" src={theme.logoSecondary} />
      <h1>{props.title}</h1>
      <div className="toggler-container">
        <p>{props.togglerLabel || "Theme"}</p>
        <Toggler onChange={props.onTogglerChange} />
      </div>
    </div>
  );
};
