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

  const onLoadImage = () => {
    props.onLoad && props.onLoad();
    setIsLoading(false);
  };

  return (
    <div css={styles} className={props.className}>
      <img src={props.src} onLoad={onLoadImage} />
      <div className="image-loader" />
    </div>
  );
};

/**
 * https://picsum.photos/200/300
 */
