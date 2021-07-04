/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { getApiInstance, Platforms } from "../../api";
import { platformsAdapter } from "../../api/adapters/platforms";
import { Game, GetGamesResponse } from "../../api/model/game";
import { GetPlatformsResponse } from "../../api/model/platorms";
import { Card, Layout, Navigation } from "../../components";
import { Theme } from "../../types";
import { GameListProps } from "./GameList.props";
import getStyles from "./GameList.styles";

export const GameList = (props: GameListProps) => {
  const { GetGames, GetPlatforms } = getApiInstance();
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);
  const [gameList, setGameList] = useState<Game[]>([]);
  const [navItems, setNavItems] = useState<string[]>([]);

  const onClickCard = (id: string) => {
    return () => {};
  };

  const getGamesList = (platform: Platforms) => {
    GetGames(platform).then(
      (res: GetGamesResponse) => {
        setGameList(res.games);
      },
      (err: string) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    getGamesList("all");

    GetPlatforms().then(
      (res: GetPlatformsResponse) => {
        console.log(res);
        setNavItems(platformsAdapter(res.platforms));
      },
      (err: string) => {
        console.log(err);
      }
    );
  }, []);

  const onClickNavItem = (platform: Platforms) => {
    getGamesList(platform);
  };

  return (
    <Layout css={styles} title="Game Catalog X1">
      <div className="main-container">
        <Navigation onClickItem={onClickNavItem} items={navItems} />
        <div className="container-game-list">
          {gameList?.map((game: Game, key: number) => (
            <Card key={`${key}-${game.name}`} onClick={onClickCard(game.name)} image={game.cover} title={game.name} subtitle={game.platform} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
