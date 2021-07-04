/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { css, Global } from "@emotion/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { Theme } from "../../types";

export const GlobalStyles = () => {
  const { id, fonts }: Theme = useTheme() as Theme;
  const [fontFace, setFontFace] = useState<string>("");
  console.log(fonts);

  const keyFonts: string[] = Object.keys(fonts);

  const getFontFace = (id: string, font: any) => `
    @font-face {
      font-family: ${font.fontFamily};
      src: url("public/theme/${id}/fonts${font.path}");
      font-style: ${font.style};
      font-weight: ${font.weight};
    }
  `;

  useEffect(() => {
    let fFace = "";
    keyFonts.forEach((key: string) => {
      console.log(fonts);
      fFace += getFontFace(id, fonts[key]);
    });
    console.log({ fFace });
    setFontFace(fFace);
  }, []);
  return (
    <Global
      styles={css(`
        html{
          font-family: Primary
        }
        h1{
          font-size: 24px;
          font-weight: bold;
          line-geight: 28.13px;
        }
        ${fontFace}
  `)}
    />
  );
};
