import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }) {
  return (
    <div className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{character.name}</h2>
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
          {character.status} — {character.species}
        </p>
        <p className={styles.location}>{character.location.name}</p>
      </div>
    </div>
  );
}
