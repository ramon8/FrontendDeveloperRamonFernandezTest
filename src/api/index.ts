import { getRandomNumber } from "../utils";
import gameListJSON from "./data/games.json";
import platformsJSON from "./data/platforms.json";
import { Game, GetGamesResponse, GetPlatformsResponse } from "./model";

const API_RESPONSE_TIME = 0;
const API_ERROR_RANDOM_RANGE = 10000000;

export type Platforms = "all" | "PS4" | "X1" | "PC" | "Switch";

export const getApiInstance = () => {
  const random = getRandomNumber(API_ERROR_RANDOM_RANGE);

  const GetGames = (platform: Platforms): Promise<GetGamesResponse> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredGameList = gameListJSON.games.filter((game: Game) => game.platform === platform);
        if (!random) reject("Error");
        else resolve(platform === "all" ? gameListJSON : { games: filteredGameList });
      }, API_RESPONSE_TIME);
    });
  const GetPlatforms = (): Promise<GetPlatformsResponse> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!random) reject("Error");
        else resolve(platformsJSON);
      }, API_RESPONSE_TIME);
    });

  return { GetGames, GetPlatforms };
};
