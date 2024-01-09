import { NavLink, useLocation } from "react-router-dom";
import styles from "./Auth.module.scss";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div style={{ height: window.innerHeight - 200 }} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <form className={styles.form}>
          {!isLogin && (
            <input type="text" placeholder="Введите имя" className={styles.textInput} />
          )}
          <input type="text" placeholder="Введите email" className={styles.textInput} />
          <input type="text" placeholder="Введите пароль" className={styles.textInput} />
          <div className={styles.block}>
            <button className={styles.submitBtn}>{isLogin ? "Войти" : "Создать"}</button>

            <div className={styles.linkBlock}>
              {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}{" "}
              {isLogin ? (
                <NavLink to={REGISTRATION_ROUTE} className={styles.link}>
                  Создайте!
                </NavLink>
              ) : (
                <NavLink to={LOGIN_ROUTE} className={styles.link}>
                  Войдите!
                </NavLink>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
