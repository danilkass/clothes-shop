import { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import { ABOUT_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import SearchInput from "../UI/SearchInput/SearchInput.jsx";
import "../UI/DropItem/DropItem.scss";
import BasketDropDown from "../BasketDropDown/BasketDropDown.jsx";

import userSvg from "./user.svg";
import authUserSvg from "./authUser.svg";
import basketSvg from "./basket.svg";
import adminSvg from "./admin.svg";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <div className={styles.navbar}>
      <NavLink to={SHOP_ROUTE} className={styles.logo}>
        Clothes-shop
      </NavLink>

      <nav className={styles.navigation}>
        <NavLink
          to={SHOP_ROUTE}
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          Главная
        </NavLink>
        {/* <NavLink className={styles.item}>Каталог</NavLink> */}
        <NavLink
          to={ABOUT_ROUTE}
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          Про нас
        </NavLink>
      </nav>

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
            <BasketDropDown />
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

            <BasketDropDown />
          </button>
        </div>
      )}
    </div>
  );
});

export default NavBar;
