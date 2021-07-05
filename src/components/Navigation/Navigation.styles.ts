import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    // background: theme.colors.primary,
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "3rem",
    width: "fit-content",
    color: theme.colors.primary,
    p: {
      textTransform: "uppercase",
      cursor: "pointer",
      "&:hover": {
        textShadow: `0 0 .1rem ${theme.colors.primary}`,
      },
      "&.selected": {
        color: theme.colors.selected,
        cursor: "default",
        "&:hover": {
          textShadow: "none",
        },
      },
    },
  });
export default getStyles;
