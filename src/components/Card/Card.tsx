/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import { CardProps } from "./Card.props";
import getStyles from "./Card.styles";

import { Image } from "./../Image";

export const Card = (props: CardProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  return (
    <div css={styles}>
      <Image className="image" src={props.image} />
      <div className="container-title">
        <p>{props.title}</p>
        <p className="small justify">{props.subtitle}</p>
      </div>
    </div>
  );
};
