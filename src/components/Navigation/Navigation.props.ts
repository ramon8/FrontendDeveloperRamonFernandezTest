export interface NavigationProps {
  /**
   * List of items to render inside nav
   */
  items: string[];

  /**
   * OnClick event for each item
   * @param item id of the item selected
   */
  onClickItem?: (item: string) => any;
}
