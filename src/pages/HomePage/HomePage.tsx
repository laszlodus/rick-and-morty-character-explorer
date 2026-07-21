import { useState, useEffect } from "react";
import type { CharacterResponse } from "../../types/characterResponse";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CharacterList from "../../components/CharacterList/CharacterList";
import Pagination from "../../components/Pagination/Pagination";
import searchCharacters from "../../services/CharacterService";

export default function HomePage() {
  const [data, setData] = useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query: string) {
    setSearchQuery(query);
    setPage(1);
  }

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchData() {
      try {
        setData(null);
        setError(null);
        setIsLoading(true);
        const responseData = await searchCharacters(searchQuery, page);
        setData(responseData);
      } catch (err) {
        console.error("Error searching characters:", err);
        setError("Failed to search characters");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQuery, page]);

  function handlePageChange(newPage: number) {
    setPage(newPage);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {data && <CharacterList characters={data.results} />}
      {data && <Pagination info={data.info} onPageChange={handlePageChange} />}

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
