import { Link } from "react-router-dom";
import type { Character } from "../../types/Character";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link to={`/characters/${character.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <div>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      </div>
    </Link>
  );
}
