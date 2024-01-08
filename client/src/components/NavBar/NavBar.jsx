import { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import { ABOUT_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";

import userSvg from "./user.svg";
import basketSvg from "./basket.svg";
import adminSvg from "./admin.svg";
import SearchInput from "../UI/SearchInput/SearchInput";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <div className={styles.navbar}>
      <NavLink to={SHOP_ROUTE} className={styles.logo}>
        Clothes-shop
      </NavLink>

      <div className={styles.navigation}>
        <NavLink to={SHOP_ROUTE} className={styles.item}>
          Главная
        </NavLink>
        {/* <NavLink className={styles.item}>Каталог</NavLink> */}
        <NavLink to={ABOUT_ROUTE} className={styles.item}>
          Про нас
        </NavLink>
      </div>

      {user.isAuth ? (
        <div className={styles.menu}>
          <SearchInput />
          <NavLink to={LOGIN_ROUTE} className={styles.item}>
            <img src={userSvg} alt="profile" className={`${styles.icon} ${styles.user}`} />
          </NavLink>
          <button className={styles.item}>
            <img src={basketSvg} alt="basket" className={styles.icon} />
          </button>
          <button className={styles.item} onClick={() => user.setIsAuth(!user.isAuth)}>
            <img src={adminSvg} alt="admin panel" className={styles.icon} />
          </button>
        </div>
      ) : (
        <div className={styles.menu}>
          <SearchInput />
          <NavLink className={styles.item}>
            <img src={userSvg} alt="profile" className={`${styles.icon} ${styles.user}`} />
          </NavLink>
          <button className={styles.item}>
            <img src={basketSvg} alt="basket" className={styles.icon} />
          </button>
        </div>
      )}
    </div>
  );
});

export default NavBar;
