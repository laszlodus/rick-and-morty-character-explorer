import type { PageInfo } from "./pageInfo";
import type { Character } from "./character";

export type CharacterResponse = {
  info: PageInfo;
  results: Character[];
};
