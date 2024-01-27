import styles from "./Auth.module.scss";
import { useContext, useState } from "react";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import { AiOutlineUser } from "react-icons/ai";
import { TbUserCheck } from "react-icons/tb";
import Profile from "./AuthComponents/Profile";
import Login from "./AuthComponents/Login";
import Registration from "./AuthComponents/Registration";
import Modal from "../../UI/Modal/Modal";

//Добавить валидацию, иконки для полей ввода, скрыть/показать пароль

const Auth = observer(() => {
  const { user } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={() => {
          setModalActive(true);
        }}
      >
        <div className={`${styles.iconContainer}`}>
          {user.isAuth ? <TbUserCheck size={25} /> : <AiOutlineUser size={30} />}
        </div>
      </div>

      <div
        className={`${styles.modal} ${modalActive && styles.activeModal}`}
        //   onClick={() => setModalActive(false)}
      >
        <div
          className={`${styles.modalContainer} ${modalActive && styles.activeModal}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Modal active={modalActive} setActive={setModalActive}>
            {user.isAuth ? (
              <Profile user={user} />
            ) : (
              <>
                {isLogin ? (
                  <Login setIsLogin={setIsLogin} />
                ) : (
                  <Registration setIsLogin={setIsLogin} />
                )}
              </>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
});
export default Auth;
