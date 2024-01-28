import { useState } from "react";
import styles from "../Auth.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Registration({ user, setIsLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.modalHeader}>
        <div className={styles.title}>Реєстрація</div>
      </div>
      <div className={styles.modalContent}>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Введіть ім'я" className={styles.textInput} />
          </div>

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
            <button className={styles.submitBtn}>Зареєструватися</button>

            <div className={styles.linkBlock}>
              <div onClick={() => setIsLogin(true)} className={styles.link}>
                Я вже зареєстрованний
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
