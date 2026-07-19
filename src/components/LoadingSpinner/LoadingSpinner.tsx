import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.loadingContainer} role="status">
      <div className={styles.spinner}></div>
      <p>Loading characters...</p>
    </div>
  );
}
