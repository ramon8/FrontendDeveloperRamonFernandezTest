export interface HeaderProps {
  /**
   * The title of the Header
   */
  title: string;

  /**
   * Optional label for the theme toggler
   */
  togglerLabel?: string;

  /**
   * On change event for the theme toggler
   */
  onTogglerChange: (e: any) => any;
}
