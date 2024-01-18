import { NavLink } from "react-router-dom";
import styles from "./NavigationMenu.module.scss";
import { ABOUT_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";

function NavigationMenu() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to={MAIN_ROUTE}
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        Головна
      </NavLink>
      <NavLink
        to={SHOP_ROUTE}
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        Магазин
      </NavLink>
      <NavLink
        to={ABOUT_ROUTE}
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        Про нас
      </NavLink>
    </nav>
  );
}

export default NavigationMenu;
