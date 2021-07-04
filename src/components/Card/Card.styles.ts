import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    maxWidth: "36rem",
    background: theme.colors.white,
    height: "100%",
    borderRadius: ".8rem",
    boxShadow: "0 .4rem .4rem rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    cursor: "pointer",
    transition: ".2s",
    width: "100%",
    "&:hover": {
      transform: "translate(0, -.2rem)",
    },
    ".container-title": {
      padding: "1.6rem",
      display: "grid",
      gridGap: ".8rem",
    },
    ".image": {
      height: "41.1rem",
    },
    ".justify": {
      textAlign: "justify",
    },
  });
export default getStyles;
