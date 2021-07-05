import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    padding: "1.5rem",
    color: theme.colors.secondary,
    background: theme.colors.primary,
    fontFamily: "Primary",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    placeItems: "center start",
    gridGap: "1.6rem",
    ".logo": {
      width: "3.2rem",
      cursor: "pointer",
    },
    ".toggler-container": {
      display: "grid",
      gridAutoFlow: "column",
      placeItems: "center",
      gridGap: "2rem",
    },
  });
export default getStyles;
