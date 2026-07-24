import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Rick and Morty Explorer</Link>
      </h1>
      <Navigation />
    </header>
  );
}
