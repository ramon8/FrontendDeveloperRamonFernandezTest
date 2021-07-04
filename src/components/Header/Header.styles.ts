import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    padding: "1.5rem",
    color: theme.colors.secondary,
    background: theme.colors.primary,
    fontFamily: "Primary",
  });
export default getStyles;
