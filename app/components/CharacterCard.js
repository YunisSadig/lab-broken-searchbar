import Image from "next/image";
import styles from "./CharacterCard.module.css";

function highlightMatch(text, query) {
  if (!query) {
    return text;
  }

  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  const matchIndex = normalizedText.indexOf(normalizedQuery);

  if (matchIndex === -1) {
    return text;
  }

  const beforeMatch = text.slice(0, matchIndex);
  const matchText = text.slice(matchIndex, matchIndex + query.length);
  const afterMatch = text.slice(matchIndex + query.length);

  return (
    <>
      {beforeMatch}
      <span className={styles.highlight}>{matchText}</span>
      {afterMatch}
    </>
  );
}

export default function CharacterCard({ character, searchQuery, searchField }) {
  const highlightedName =
    searchField === "name"
      ? highlightMatch(character.name, searchQuery)
      : character.name;
  const highlightedSpecies =
    searchField === "species"
      ? highlightMatch(character.species, searchQuery)
      : character.species;
  const highlightedStatus =
    searchField === "status"
      ? highlightMatch(character.status, searchQuery)
      : character.status;

  return (
    <div className={styles.card}>
      <Image
        src={character.image}
        alt={character.name}
        className={styles.image}
        width={320}
        height={320}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{highlightedName}</h2>
        <p className={styles.detail}>
          <span
            className={`${styles.statusDot} ${
              character.status === "Alive"
                ? styles.alive
                : character.status === "Dead"
                ? styles.dead
                : styles.unknown
            }`}
          />
          {highlightedStatus} — {highlightedSpecies}
        </p>
        <p className={styles.location}>{character.location.name}</p>
      </div>
    </div>
  );
}
