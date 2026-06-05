"use client";

import { useState, useEffect, useMemo } from "react";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import styles from "./page.module.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load characters.");
        }
        return res.json();
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => setFetchError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCharacters = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) {
      return characters;
    }

    return characters.filter((character) => {
      const value =
        searchField === "name"
          ? character.name
          : searchField === "species"
          ? character.species
          : character.status;

      return value.toLowerCase().includes(query);
    });
  }, [characters, searchField, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rick & Morty Characters</h1>
        <p className={styles.subtitle}>Browse the multiverse</p>
      </header>
      <SearchBar
        value={searchQuery}
        field={searchField}
        onChange={handleSearchChange}
        onFieldChange={handleSearchFieldChange}
        onClear={handleClearSearch}
      />
      <CharacterList
        characters={filteredCharacters}
        searchQuery={searchQuery}
        searchField={searchField}
        isLoading={isLoading}
        fetchError={fetchError}
      />
    </main>
  );
}
