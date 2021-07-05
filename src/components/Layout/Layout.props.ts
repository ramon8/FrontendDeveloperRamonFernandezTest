import { CommonProps } from "../../types";

export interface LayoutProps extends CommonProps {
  title: string;
  togglerLabel?: string;
  onTogglerChange?: (e: any) => any;
}
