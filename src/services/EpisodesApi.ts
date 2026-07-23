import type { EpisodeResponse } from "../types/EpisodeResponse";

export async function getEpisodes(page: number): Promise<EpisodeResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch episodes.");
  }
  const responseData: EpisodeResponse = await response.json();
  return responseData;
}
