import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    ".main-container": {
      padding: "1.6rem",
    },
    ".container-game-list": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr) )",
      margin: "1rem 0",
      gridGap: "3.2rem",
      placeItems: "center",
    },
  });
export default getStyles;
