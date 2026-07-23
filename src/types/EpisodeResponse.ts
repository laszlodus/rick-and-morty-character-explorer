import type { Episode } from "./Episode";
import type { PageInfo } from "./PageInfo";

export type EpisodeResponse = {
  info: PageInfo;
  results: Episode[];
};
