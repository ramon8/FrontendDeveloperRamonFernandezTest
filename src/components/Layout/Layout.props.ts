import { CommonProps } from "../../types";

export interface LayoutProps extends CommonProps {
  /**
   * The title of the layout component
   */
  title: string;

  /**
   * Optional label for the theme toggler
   */
  togglerLabel?: string;

  /**
   * On change event for the theme toggler
   */
  onTogglerChange?: (e: any) => any;
}
