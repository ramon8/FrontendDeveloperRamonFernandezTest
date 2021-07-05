export interface TogglerProps {
  /**
   * On change event for the toggler component,
   * @param the event of the toggler
   * `e.target.checked returns the value of the toggler`
   */
  onChange: (e: any) => any;
}
