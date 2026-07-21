import { Link, useParams } from "react-router-dom";
import type { Character } from "../../types/character";
import getCharacterById from "../../services/CharactersApi";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function CharacterDetails() {
  const { id } = useParams();

  const numberId = Number(id);
  const isInvalidId = Number.isNaN(numberId);

  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isInvalidId) return;

    async function fetchCharacter() {
      try {
        setError(null);
        setCharacter(null);
        setIsLoading(true);
        const characterData = await getCharacterById(numberId);
        setCharacter(characterData);
      } catch (err) {
        setError("Failed to fetch character.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCharacter();
  }, [numberId, isInvalidId]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {isInvalidId && <ErrorMessage message="Invalid character ID." />}
      {!error && !isLoading && character && (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          <p>Appears in: {character.episode.length}</p>
        </div>
      )}
      <Link to="/">Back to search</Link>
    </>
  );
}
