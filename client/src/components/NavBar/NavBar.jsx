import { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import SearchInput from "../UI/SearchInput/SearchInput.jsx";
import "../UI/DropItem/DropItem.scss";
import BasketDropMenu from "../BasketDropMenu/BasketDropMenu.jsx";
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";

import userSvg from "../../assets/user.svg";
import authUserSvg from "../../assets/authUser.svg";
import basketSvg from "../../assets/basket.svg";
import adminSvg from "../../assets/admin.svg";

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
          <NavLink to={LOGIN_ROUTE} className={`${styles.item}  opacity-item`}>
            <div className={`${styles.iconContainer} opacity-item`}>
              <img
                src={authUserSvg}
                alt="profile"
                className={`${styles.icon} ${styles.user} `}
              />
            </div>
          </NavLink>

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
          <NavLink to={LOGIN_ROUTE} className={`${styles.item} opacity-item`}>
            <div className={`${styles.iconContainer} opacity-item`}>
              <img src={userSvg} alt="profile" className={`${styles.icon} ${styles.user} `} />
            </div>
          </NavLink>
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
