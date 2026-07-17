import { useState, type SubmitEvent } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery === "") {
      return;
    }
    onSearch(trimmedQuery);
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="🔍 Search characters..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
