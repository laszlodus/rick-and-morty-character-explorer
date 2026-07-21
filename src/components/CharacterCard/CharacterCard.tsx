import { Link } from "react-router-dom";
import type { Character } from "../../types/character";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className={styles.card}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
    </Link>
  );
}
