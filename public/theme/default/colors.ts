import { ColorTypes } from "../../../src/types";

export const Colors = {
  pureWhite: "#fff",
  pureBlack: "#000",
  black: "#333333",
  white: "#fff",
  red: "#FE6050",
  gray: "#C4C4C4",
  lightGray: "#E5E5E5",
};

export const colorTypes: ColorTypes = {
  primary: Colors.black,
  secondary: Colors.white,
  tertiary: Colors.gray,

  bacgroundPrimary: Colors.lightGray,

  error: Colors.red,
  selected: Colors.red,

  white: Colors.pureWhite,
  black: Colors.pureBlack,
  gray: Colors.gray,
};
