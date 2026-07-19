import type { Character } from "../../types/character";
import CharacterCard from "../CharacterCard/CharacterCard";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
