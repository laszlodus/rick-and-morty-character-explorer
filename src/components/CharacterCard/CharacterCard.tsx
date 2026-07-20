import type { Character } from "../../types/character";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className={styles.card}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
}
