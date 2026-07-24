import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/episodes"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Episodes
      </NavLink>
      <NavLink
        to="/locations"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Locations
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Favorites
      </NavLink>
    </nav>
  );
}
