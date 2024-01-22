import { useContext } from "react";
import styles from "./ItemsGrid.module.scss";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const ItemsGrid = observer(() => {
  const { global } = useContext(Context);

  const handleClick = (bool) => {
    global.setItemsGrid(bool);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleClick(true)}
        title="Крупна сітка"
        className={`${styles.catalogViewButton} ${global.itemsGrid && styles.active}`}
      >
        <TfiLayoutGrid3Alt size={16} />
      </button>
      <button
        onClick={() => handleClick(false)}
        title="Мала сітка"
        className={`${styles.catalogViewButton} ${!global.itemsGrid && styles.active}`}
      >
        <TfiLayoutGrid4Alt size={20} />
      </button>
    </div>
  );
});

export default ItemsGrid;
