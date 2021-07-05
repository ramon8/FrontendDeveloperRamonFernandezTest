import { css, keyframes, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const bounce = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {    
    opacity: 1;
  }
`;

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    width: "100%",
    height: "100%",
    position: "fixed",
    display: "grid",
    placeItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    animation: `${fade} .15s linear forwards`,
    top: 0,
    left: 0,
    ".spiner": {
      width: "5rem",
      background: "transparent",
      borderRadius: "50%",
      border: `1rem solid ${theme.colors.primary}`,
      borderLeft: "1rem solid transparent",
      height: "5rem",
      animation: `${bounce} 2s linear infinite`,
    },
  });
export default getStyles;
