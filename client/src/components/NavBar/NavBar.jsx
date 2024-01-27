import { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Context } from "../../index";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, MAIN_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import SearchInput from "../UI/SearchInput/SearchInput.jsx";
import "../UI/DropItem/DropItem.scss";
import BasketDropMenu from "../BasketDropMenu/BasketDropMenu.jsx";
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";
import Auth from "../Modal/Auth/Auth.jsx";

import basketSvg from "../../assets/basket.svg";
import adminSvg from "../../assets/admin.svg";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <NavLink to={MAIN_ROUTE} className={styles.logo}>
        <h1>Stylify</h1>
      </NavLink>

      <NavigationMenu />

      {user.isAuth ? (
        <div className={styles.menu}>
          <SearchInput />

          <Auth />
          <div className={`${styles.item} drop-container `}>
            <button
              onClick={() => navigate(BASKET_ROUTE)}
              className={`${styles.iconContainer} opacity-item`}
            >
              <img src={basketSvg} alt="basket" className={styles.icon} />
            </button>
            <BasketDropMenu />
          </div>

          <button
            className={`${styles.item} opacity-item`}
            onClick={() => navigate(ADMIN_ROUTE)}
          >
            <div className={`${styles.iconContainer} opacity-item`}>
              <img src={adminSvg} alt="admin panel" className={styles.icon} />
            </div>
          </button>
        </div>
      ) : (
        <div className={styles.menu}>
          <SearchInput />

          <Auth />

          <div className={`${styles.item} drop-container`}>
            <button
              onClick={() => navigate(BASKET_ROUTE)}
              className={`${styles.iconContainer} opacity-item`}
            >
              <img src={basketSvg} alt="basket" className={styles.icon} />
            </button>

            <BasketDropMenu />
          </div>
        </div>
      )}
    </div>
  );
});

export default NavBar;
