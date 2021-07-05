/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from "react";
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { Theme } from "../../types";
import { TogglerProps } from "./Toggler.props";
import getStyles from "./Toggler.styles";

export const Toggler = (props: TogglerProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  const onChange = (e: any) => {
    props.onChange(e);
  };

  return (
    <div css={styles}>
      <label className="switch">
        <input checked={!props.value} onClick={onChange} type="checkbox" onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
