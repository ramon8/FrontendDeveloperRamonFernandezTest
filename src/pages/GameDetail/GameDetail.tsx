/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getApiInstance } from "../../api";
import { Game } from "../../api/model";
import { Image, Layout } from "../../components";
import { Loader } from "../../components/Loader";
import { Theme } from "../../types";
import { GameListProps } from "./GameDetail.props";
import getStyles from "./GameDetail.styles";

export const GameDetail = (props: GameListProps) => {
  const { GetGame } = getApiInstance();
  const theme: Theme = useTheme() as Theme;
  const styles: SerializedStyles = getStyles(theme);
  const [game, setGame] = useState<Game>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<any>();

  useEffect(() => {
    GetGame(props.id || id).then((game: Game) => {
      setGame(game);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout css={styles} title="Game details" onTogglerChange={props.onTogglerChange}>
      {isLoading && <Loader />}
      {game && (
        <div className="main-contaienr">
          <div className="cover">
            <Image src={game.hero} />
          </div>
          <div className="content">
            <h1>{game.name}</h1>
            <p>{game.platform}</p>
            <p>{game.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};
