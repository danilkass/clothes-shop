import { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import SearchInput from "../UI/SearchInput/SearchInput.jsx";
import "../UI/DropItem/DropItem.scss";
import BasketDropMenu from "../BasketDropMenu/BasketDropMenu.jsx";
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";

import basketSvg from "../../assets/basket.svg";
import adminSvg from "../../assets/admin.svg";
import Auth from "../../pages/Auth/Auth.jsx";

const NavBar = observer(() => {
  const { user } = useContext(Context);
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
          <button className={`${styles.item} drop-container `}>
            <div className={`${styles.iconContainer} opacity-item`}>
              <img src={basketSvg} alt="basket" className={styles.icon} />
            </div>
            <BasketDropMenu />
          </button>

          <button
            className={`${styles.item} opacity-item`}
            onClick={() => user.setIsAuth(!user.isAuth)}
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
          <button className={`${styles.item} drop-container`}>
            <div className={`${styles.iconContainer} opacity-item`}>
              <img src={basketSvg} alt="basket" className={styles.icon} />
            </div>

            <BasketDropMenu />
          </button>
        </div>
      )}
    </div>
  );
});

export default NavBar;
