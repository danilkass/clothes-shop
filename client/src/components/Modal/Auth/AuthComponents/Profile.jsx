import styles from "../Auth.module.scss";

function Profile({ user }) {
  return (
    <>
      <div className={styles.modalHeader}>
        <div className={styles.title}>Вы успішно війшли в акаунт!</div>
      </div>
      <div className={styles.modalContent}>
        <button onClick={() => user.setIsAuth(false)} className={styles.submitBtn}>
          Вийти
        </button>
      </div>
    </>
  );
}

export default Profile;
