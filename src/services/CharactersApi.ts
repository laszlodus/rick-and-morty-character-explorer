import type { Character } from "../types/character";

export default async function getCharacterById(id: number): Promise<Character> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch character.");
  }
  const character: Character = await response.json();
  return character;
}
