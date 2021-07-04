/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { useState } from "react";
import { Theme } from "../../types";
import { NavigationProps } from "./Navigation.props";
import getStyles from "./Navigation.styles";

export const Navigation = (props: NavigationProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);
  const [selected, setSelected] = useState<string>("all");

  const onClickItem = (item: string) => {
    return () => {
      props.onClickItem && props.onClickItem(item);
      setSelected(item);
    };
  };

  return (
    <nav css={styles}>
      {props.items.map((item: string) => (
        <p onClick={onClickItem(item)} className={selected === item ? "selected" : ""} key={item}>
          {item}
        </p>
      ))}
    </nav>
  );
};
