import { SerializedStyles } from "@emotion/react";

export interface Theme {
  id: string;
  colors: ColorTypes;
  fonts: any;
  logoPrimary: string;
  logoSecondary: string;
}
export interface ColorTypes {
  primary: string;
  secondary: string;
  tertiary: string;
  bacgroundPrimary: string;
  error: string;
  selected: string;
  white: string;
  black: string;
  gray: string;
}

export interface CommonProps {
  className?: string;
  children?: any;
}

export const breakpoints = {
  xs: 0,
  s: 640,
  m: 1024,
  l: 1280,
  xl: 1450,
};

/**
 * 
 * 1920×1080
1366×768
360×640
414×896
1536×864
375×667
 */
