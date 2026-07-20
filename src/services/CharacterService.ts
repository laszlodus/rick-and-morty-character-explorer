import type { CharacterResponse } from "../types/characterResponse";

export default async function searchCharacters(
  query: string,
  page: number,
): Promise<CharacterResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(query)}&page=${page}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch characters.");
  }
  const responseData: CharacterResponse = await response.json();
  return responseData;
}
