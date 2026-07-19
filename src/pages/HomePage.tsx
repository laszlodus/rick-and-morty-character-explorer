import { useState } from "react";
import type { CharacterResponse } from "../types/characterResponse";
import SearchBar from "../components/SearchBar/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import CharacterList from "../components/CharacterList/CharacterList";

export default function HomePage() {
  const [data, setData] = useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(query: string) {
    try {
      setData(null);
      setError(null);
      setIsLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(query)}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch characters.");
      }
      const responseData: CharacterResponse = await response.json();
      setData(responseData);
    } catch (err) {
      console.error("Error searching characters:", err);
      setError("Failed to search characters");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {data && <CharacterList characters={data.results} />}

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
