import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { CharacterResponse } from "../../types/CharacterResponse";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CharacterList from "../../components/CharacterList/CharacterList";
import Pagination from "../../components/Pagination/Pagination";
import { searchCharacters } from "../../services/CharactersApi";

export default function HomePage() {
  const [data, setData] = useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchQuery = searchParams.get("name") || "";
  const urlPageNumber = Number(searchParams.get("page"));

  let validatedPage = 1;

  if (
    !Number.isNaN(urlPageNumber) &&
    urlPageNumber > 0 &&
    Number.isInteger(urlPageNumber)
  ) {
    validatedPage = urlPageNumber;
  }

  function handleSearch(query: string) {
    setSearchParams({ name: query, page: "1" });
  }

  function handlePageChange(newPage: number) {
    setSearchParams({ name: urlSearchQuery, page: String(newPage) });
  }

  useEffect(() => {
    if (!urlSearchQuery) return;

    async function fetchData() {
      try {
        setData(null);
        setError(null);
        setIsLoading(true);
        const responseData = await searchCharacters(
          urlSearchQuery,
          validatedPage,
        );
        setData(responseData);
      } catch (err) {
        console.error("Error searching characters:", err);
        setError("Failed to search characters");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [urlSearchQuery, validatedPage]);

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        key={urlSearchQuery}
        urlSearchQuery={urlSearchQuery}
      />
      {data && <CharacterList characters={data.results} />}
      {data && (
        <Pagination
          currentPage={validatedPage}
          totalPages={data.info.pages}
          onPageChange={handlePageChange}
        />
      )}

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
