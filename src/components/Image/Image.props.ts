import { CommonProps } from "../../types";

export interface ImageProps extends CommonProps {
  src: string;
  onLoad?: () => any;
  onError?: () => any;
}
