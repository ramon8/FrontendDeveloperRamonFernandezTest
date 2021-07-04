/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { getApiInstance } from "../../api";
import { Game, GetGamesResponse } from "../../api/model/game";
import { GetPlatformsResponse } from "../../api/model/platorms";
import { Card, Layout, Navigation, Image } from "../../components";
import { Theme } from "../../types";
import { GameListProps } from "./GameDetail.props";
import getStyles from "./GameDetail.styles";

export const GameDetail = (props: GameListProps) => {
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);

  useEffect(() => {});

  return (
    <Layout css={styles} title="Game details">
      <div className="main-contaienr">
        <div className="cover">
          <Image src={"https://via.placeholder.com/1920x368/e4000f/ffffff"} />
        </div>
        <div className="content">
          <h1 style={{ justifySelf: "left" }}>Game Title</h1>
          <p style={{ justifySelf: "right" }}>Game Platform</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at tempora atque fugiat eligendi. Sint odit facere necessitatibus veniam
            aperiam quod incidunt harum provident molestiae laborum dicta, consequatur aspernatur! Obcaecati.
          </p>
        </div>
      </div>
    </Layout>
  );
};
