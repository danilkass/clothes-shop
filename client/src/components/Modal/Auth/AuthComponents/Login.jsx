import styles from "../Auth.module.scss";

function Login({ user, setIsLogin }) {
  return (
    <>
      <div className={styles.modalHeader}>
        <div className={styles.title}>Реєстрація</div>
      </div>
      <div className={styles.modalContent}>
        <form className={styles.form}>
          <input type="text" placeholder="Введіть email" className={styles.textInput} />
          <input type="password" placeholder="Введіть пароль" className={styles.textInput} />
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
