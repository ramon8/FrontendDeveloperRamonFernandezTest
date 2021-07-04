import { Theme } from "../../../src/types";
import { ColorTypes } from "./colors";
import { Fonts } from "./fonts/fonts";
import logo from "./logo.svg";

const theme: Partial<Theme> = {
  id: "default",
  colors: ColorTypes,
  fonts: Fonts,
  logo: logo,
};

export default theme;
