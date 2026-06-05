import CharacterCard from "./CharacterCard";
import styles from "./CharacterList.module.css";

export default function CharacterList({ characters, searchQuery, searchField, isLoading, fetchError }) {
  if (isLoading) {
    return <p className={styles.message}>Loading characters…</p>;
  }

  if (fetchError) {
    return <p className={styles.message}>{fetchError}</p>;
  }

  if (characters.length === 0) {
    return (
      <p className={styles.message}>
        No {searchField} matches found for “{searchQuery}”. Clear the search to
        show all characters again.
      </p>
    );
  }

  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          searchQuery={searchQuery}
          searchField={searchField}
        />
      ))}
    </div>
  );
}
