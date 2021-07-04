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
