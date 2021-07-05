import { getRandomNumber } from "../utils";
import * as gameListJSON from "./data/games.json";
import * as platformsJSON from "./data/platforms.json";
import { Game } from "./model";

// This value simulate the time of a real api
// const API_RESPONSE_TIME = getRandomNumber(1500);
const API_RESPONSE_TIME = getRandomNumber(0);

export type Platforms = "all" | "PS4" | "X1" | "PC" | "Switch";

/**
 * Return the methods to retrive a single game, all of them or the platforms
 * @returns
 */
export const getApiInstance = () => {
  /**
   * Returns the game by name
   * @param name the name of the game you want to find
   * @returns the game or undefined if not found
   */
  const GetGame = (name: string): Promise<any> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const jsonData: any = gameListJSON;
        const game = jsonData.games.find((g: Game) => g.name === name);
        resolve(game);
      }, API_RESPONSE_TIME);
    });
  /**
   * Returns all the games or filter by platform
   * @param platform the platform you want to filter for
   */
  const GetGames = (platform: Platforms): Promise<any> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const jsonData: any = gameListJSON;
        const filteredGameList = jsonData.games.filter((game: Game) => game.platform === platform);
        resolve(platform === "all" ? jsonData : { games: filteredGameList });
      }, API_RESPONSE_TIME);
    });

  /**
   * Returns all the platforms abailables
   */
  const GetPlatforms = (): Promise<typeof platformsJSON> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(platformsJSON);
      }, API_RESPONSE_TIME);
    });

  return { GetGames, GetPlatforms, GetGame };
};
