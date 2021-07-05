import { CommonProps } from "../../types";

export interface ImageProps extends CommonProps {
  /**
   * The source url of the image
   */
  src: string;

  /**
   * OnLoad event that trigger when image is fully load
   */
  onLoad?: () => any;

  /**
   * OnError event that trigger when image fails loading
   */
  onError?: () => any;
}
