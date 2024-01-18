import { useContext } from "react";
import styles from "./BasketDropMenu.module.scss";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const BasketDropMenu = observer(() => {
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

export default BasketDropMenu;
