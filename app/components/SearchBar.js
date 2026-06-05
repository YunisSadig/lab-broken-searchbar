import styles from "./SearchBar.module.css";

export default function SearchBar({ value, field, onChange, onFieldChange, onClear }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputGroup}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder={`Search ${field}...`}
          className={styles.input}
          value={value}
          onChange={onChange}
          aria-label={`Search by ${field}`}
        />
        <select
          className={styles.fieldSelect}
          value={field}
          onChange={onFieldChange}
          aria-label="Choose search field"
        >
          <option value="name">Name</option>
          <option value="species">Species</option>
          <option value="status">Status</option>
        </select>
        {value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={onClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
