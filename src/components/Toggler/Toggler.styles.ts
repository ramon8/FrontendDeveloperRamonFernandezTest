import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    ".switch": {
      position: "relative",
      display: "inline-block",
      width: "6rem",
      height: "3.4rem",
    },
    ".switch input": {
      opacity: 0,
      width: 0,
      height: 0,
    },
    ".slider": {
      position: "absolute",
      cursor: "pointer",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.selected,
      WebkitTransition: ".4s",
      transition: ".4s",
      borderRadius: "3.4rem",
    },
    ".slider:before": {
      position: "absolute",
      content: '""',
      height: "2.6rem",
      width: "2.6rem",
      left: ".4rem",
      bottom: ".4rem",
      backgroundColor: theme.colors.secondary,
      WebkitTransition: ".4s",
      transition: ".4s",
      borderRadius: "50%",
    },

    "input:checked + .slider": {
      backgroundColor: theme.colors.selected,
    },

    "input:focus + .slider": {
      boxShadow: `0 0 .1rem ${theme.colors.black}`,
    },

    "input:checked + .slider:before": {
      WebkitTransform: "translateX(2.6rem)",
      MsTransform: "translateX(2.6rem)",
      transform: "translateX(2.6rem)",
    },
  });
export default getStyles;
