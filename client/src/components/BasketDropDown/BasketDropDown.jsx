import { useContext } from "react";
import styles from "./BasketDropDown.module.scss";
import { Context } from "../..";

function BasketDropDown() {
  const { user } = useContext(Context);

  return (
    <div className={styles.container}>
      {user.isAuth ? (
        <div> Ваша корзина пуста :( </div>
      ) : (
        <div> Вы не зарегестрированы :( </div>
      )}
    </div>
  );
}

export default BasketDropDown;
