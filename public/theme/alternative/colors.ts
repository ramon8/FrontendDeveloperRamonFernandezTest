import { ColorTypes } from "../../../src/types";

export const Colors = {
  pureWhite: "#fff",
  pureBlack: "#000",
  black: "#333333",
  white: "#fff",
  red: "#c33f1b",
  gray: "#C4C4C4",
  lightGray: "#E5E5E5",
  darkGray: "#505050",
};

export const colorTypes: ColorTypes = {
  primary: Colors.white,
  secondary: Colors.black,
  tertiary: Colors.gray,

  bacgroundPrimary: Colors.darkGray,

  error: Colors.red,
  selected: Colors.red,

  white: Colors.pureWhite,
  black: Colors.pureBlack,
  gray: Colors.gray,
};
