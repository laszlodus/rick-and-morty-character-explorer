import type { Character } from "../types/Character";
import type { CharacterResponse } from "../types/CharacterResponse";

export async function searchCharacters(
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

export async function getCharacterById(id: number): Promise<Character> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch character.");
  }
  const character: Character = await response.json();
  return character;
}
