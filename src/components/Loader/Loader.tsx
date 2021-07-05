/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import getStyles from "./Loader.styles";

import { Image } from "../Image";
import { LoaderProps } from "./Loader.props";

export const Loader = (props: LoaderProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  return (
    <div css={styles}>
      <div className="spiner" />
    </div>
  );
};
