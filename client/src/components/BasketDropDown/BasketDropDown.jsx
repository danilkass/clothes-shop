import { useContext } from "react";
import styles from "./BasketDropDown.module.scss";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const BasketDropDown = observer(() => {
  const { user } = useContext(Context);

  return (
    <div className={`${styles.container} drop-item`}>
      {user.isAuth ? (
        <div> Ваша корзина пуста :( </div>
      ) : (
        <div> Вы не зарегестрированы :( </div>
      )}
    </div>
  );
});

export default BasketDropDown;
