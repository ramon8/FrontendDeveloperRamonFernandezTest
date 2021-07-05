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
import { useHistory } from "react-router-dom";
import getStyles from "./GameList.styles";
import { Loader } from "../../components/Loader";

export const GameList = (props: GameListProps) => {
  const { GetGames, GetPlatforms } = getApiInstance();
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);
  const [gameList, setGameList] = useState<Game[]>([]);
  const [navItems, setNavItems] = useState<string[]>([]);
  const [platform, setPlatform] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const history = useHistory();

  const onClickCard = (id: string) => {
    return () => {
      history.push(`/detail/${id}`);
    };
  };

  const getGamesList = (platform: Platforms) => {
    setIsLoading(true);
    GetGames(platform).then((res) => {
      setGameList(res?.games);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getGamesList("all");

    GetPlatforms().then((res: any) => {
      setNavItems(platformsAdapter(res?.platforms));
    });
  }, []);

  const onClickNavItem = (plat: Platforms) => {
    setGameList([]);
    setPlatform(plat);
    getGamesList(plat);
  };

  return (
    <Layout css={styles} title={`Game Catalog ${platform.toUpperCase()}`} togglerValue={props.togglerValue} onTogglerChange={props.onTogglerChange}>
      {isLoading && <Loader />}
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
