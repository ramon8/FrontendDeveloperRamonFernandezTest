export interface CardProps {
  /**
   * The image of the card
   */
  image: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * The subtitle of the card
   */
  subtitle: string;

  /**
   * Optional function to manage the complete card click event
   */
  onClick?: () => any;
}
