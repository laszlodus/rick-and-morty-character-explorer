import type { Character } from "../../types/character";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterList.module.css";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <div className={styles.list}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
