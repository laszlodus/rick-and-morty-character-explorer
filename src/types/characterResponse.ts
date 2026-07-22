import type { PageInfo } from "./PageInfo";
import type { Character } from "./Character";

export type CharacterResponse = {
  info: PageInfo;
  results: Character[];
};
