import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../types";

const getStyles = (theme: Theme): SerializedStyles =>
  css({
    ".cover": {
      height: "36.8rem",
      position: "relative",
      "&::after": {
        content: "''",
        boxShadow: "inset 0 -1.6rem 1.6rem rgb(0 0 0 / 25%)",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
      },
    },
    ".content": {
      maxWidth: "116.8rem",
      margin: "auto",
      marginTop: "6.4rem",
      border: `1px solid ${theme.colors.gray}`,
      background: theme.colors.white,
      padding: "6.4rem 8.4rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      placeItems: "center",
      gridRowGap: "3.2rem",
      "& p:last-child": {
        textAlign: "justify",
        gridColumnEnd: -1,
        gridColumnStart: 1,
      },
    },
  });
export default getStyles;
