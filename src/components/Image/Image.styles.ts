import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme, { isLoading }: any): SerializedStyles =>
  css({
    width: "100%",
    height: "100%",
    img: {
      display: isLoading ? "none" : "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    ".image-loader": {
      display: isLoading ? "block" : "none",
      width: "100%",
      height: "100%",
      background: theme.colors.tertiary,
    },
  });
export default getStyles;
