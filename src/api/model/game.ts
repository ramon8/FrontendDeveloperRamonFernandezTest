export interface GetGamesResponse {
  games: Game[];
}

export interface Game {
  cover: string;
  description: string;
  hero: string;
  name: string;
  platform: string;
}
