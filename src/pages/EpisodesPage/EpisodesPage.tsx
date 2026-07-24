import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Episodes.module.css";
import type { EpisodeResponse } from "../../types/EpisodeResponse";
import { getEpisodes } from "../../services/EpisodesApi";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/Pagination/Pagination";
import getValidatedPage from "../../utils/getValidatedPage";

export default function EpisodesPage() {
  const [data, setData] = useState<EpisodeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const validatedPage = getValidatedPage(searchParams.get("page"));

  function handlePageChange(page: number) {
    setSearchParams({ page: String(page) });
  }

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        setIsLoading(true);
        setError(null);
        const episodesData = await getEpisodes(validatedPage);
        setData(episodesData);
      } catch (err) {
        console.error("Error fetching episodes:", err);
        setError(`Failed to fetch episodes.`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEpisodes();
  }, [validatedPage]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {data && !isLoading && !error && (
        <>
          <div className={styles.episodesContainer}>
            {data.results.map((episode) => (
              <div className={styles.episodeCard} key={episode.id}>
                <h2>{episode.name}</h2>
                <p>Episode: {episode.episode}</p>
                <p>Air date: {episode.air_date}</p>
                <p>Characters: {episode.characters.length}</p>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={validatedPage}
            totalPages={data.info.pages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
