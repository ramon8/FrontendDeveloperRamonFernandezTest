/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { css, Global } from "@emotion/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { Theme } from "../../types";

export const GlobalStyles = () => {
  const { id, fonts, colors }: Theme = useTheme() as Theme;
  const [fontFace, setFontFace] = useState<string>("");

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
      fFace += getFontFace(id, fonts[key]);
    });
    setFontFace(fFace);
  }, []);
  return (
    <Global
      styles={css(`
        html{
          font-family: Primary;
          font-size: 10px;
        }

        body{
          color: ${colors.primary}
          padding: 0;
          margin: 0;
          background: ${colors.bacgroundPrimary}
        }
        
        
        p, a{
          font-size: 1.8rem;
          line-height: 2.1rem;
          margin: 0;
        }
        p.small{
          font-size: 1.4rem;
          line-height: 1.6rem;
          font-weight: 300; 
        }


        a{
          color: ${colors.error};
          cursor: pointer;
        }
        a:hover{
          text-shadow: 0 0 ${colors.error};
        }
        
        
        h1{
          font-size: 24px;
          font-weight: bold;
          line-height: 2.8rem;
          margin: 0;
        }
        ${fontFace}
  `)}
    />
  );
};
