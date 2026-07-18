import { useState } from "react";
import type { CharacterResponse } from "../types/characterResponse";
import SearchBar from "../components/SearchBar/SearchBar";

export default function HomePage() {
  const [data, setData] = useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(query: string) {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(query)}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch characters.");
      }
      const data: CharacterResponse = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error searching characters:", error);
      setError("Failed to search characters");
    } finally {
      setIsLoading(false);
    }
  }

  return <SearchBar onSearch={handleSearch} />;
}
