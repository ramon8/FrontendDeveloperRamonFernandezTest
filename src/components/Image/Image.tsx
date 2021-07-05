/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { useState } from "react";
import { Theme } from "../../types";
import { ImageProps } from "./Image.props";
import getStyles from "./Image.styles";

export const Image = (props: ImageProps) => {
  const theme: Theme = useTheme() as Theme;

  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const styles: SerializedStyles = getStyles(theme, { isLoading });

  /**
   * OnLoad event for the image
   * Sets the isLoading state to false
   */
  const onLoadImage = () => {
    props.onLoad && props.onLoad();
    setIsLoading(false);
  };

  /**
   * OnError event for the image
   * Sets the isLoading state to false
   */
  const onErrorImage = () => {
    props.onError && props.onError();
    setIsLoading(false);
  };

  return (
    <div css={styles} className={props.className}>
      <img src={props.src} onLoad={onLoadImage} onError={onErrorImage} />
      <div className="image-loader" />
    </div>
  );
};
