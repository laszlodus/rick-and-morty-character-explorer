import SearchBar from "../components/SearchBar/SearchBar";

export default function HomePage() {
  function handleSearch(query: string) {
    console.log("Search query:", query);
  }

  return <SearchBar onSearch={handleSearch} />;
}
