import { getRandomNumber } from "../utils";
import * as gameListJSON from "./data/games.json";
import * as platformsJSON from "./data/platforms.json";
import { Game } from "./model";

const API_RESPONSE_TIME = getRandomNumber(0);

export type Platforms = "all" | "PS4" | "X1" | "PC" | "Switch";

export const getApiInstance = () => {
  const GetGame = (name: string): Promise<any> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const jsonData: any = gameListJSON;
        const game = jsonData.games.find((g: Game) => g.name === name);
        resolve(game);
      }, API_RESPONSE_TIME);
    });
  const GetGames = (platform: Platforms): Promise<any> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const jsonData: any = gameListJSON;
        const filteredGameList = jsonData.games.filter((game: Game) => game.platform === platform);
        resolve(platform === "all" ? jsonData : { games: filteredGameList });
      }, API_RESPONSE_TIME);
    });
  const GetPlatforms = (): Promise<typeof platformsJSON> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(platformsJSON);
      }, API_RESPONSE_TIME);
    });

  return { GetGames, GetPlatforms, GetGame };
};
