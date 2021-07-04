import { Theme } from "../../../src/types";
import { colorTypes } from "./colors";
import { Fonts } from "./fonts/fonts";
import logoPrimary from "./logoPrimary.svg";
import logoSecondary from "./logoSecondary.svg";

const theme: Partial<Theme> = {
  id: "default",
  colors: colorTypes,
  fonts: Fonts,
  logoPrimary: logoPrimary,
  logoSecondary: logoSecondary,
};

export default theme;
