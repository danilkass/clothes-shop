import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../Auth.module.scss";

function Login({ user, setIsLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.modalHeader}>
        <div className={styles.title}>Вхід</div>
      </div>
      <div className={styles.modalContent}>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Введіть email" className={styles.textInput} />
          </div>

          <div className={styles.formRow}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Введіть пароль"
              className={styles.textInput}
            />
            <button onClick={(e) => showPassword(e)} className={styles.showPassword}>
              {passwordVisible ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
            </button>
          </div>
          <div className={styles.block}>
            <button className={styles.submitBtn}>Увійти</button>

            <div className={styles.linkBlock}>
              <div onClick={() => setIsLogin(false)} className={styles.link}>
                Зареєструватися
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
