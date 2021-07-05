import { css, SerializedStyles } from "@emotion/react";
import { breakpoints, Theme } from "../../types";

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
      background: theme.colors.secondary,
      color: theme.colors.primary,
      padding: "6.4rem 8.4rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto auto",
      placeItems: "center",
      gridRowGap: "3.2rem",
      "& h1": {
        justifySelf: "left",
      },
      "& p:last-child": {
        textAlign: "justify",
        gridColumnEnd: -1,
        gridColumnStart: 1,
      },
      "& p": {
        justifySelf: "right",
      },
      [`@media (max-width: ${breakpoints.s}px)`]: {
        marginTop: ".8rem",
        gridTemplateColumns: "1fr",
        padding: "3.2rem 1.6rem",
        gridRowGap: "1.6rem",
        "& p": {
          justifySelf: "normal",
        },
        "& p:last-child": {
          marginTop: "1.6rem",
        },
      },
    },
  });
export default getStyles;
