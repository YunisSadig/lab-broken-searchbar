import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rick & Morty Characters</h1>
        <p className={styles.subtitle}>Browse the multiverse</p>
      </header>
      <SearchBar />
      <CharacterList />
    </main>
  );
}
