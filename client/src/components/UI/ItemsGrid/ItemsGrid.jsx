import { useContext } from "react";
import styles from "./ItemsGrid.module.scss";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const ItemsGrid = observer(() => {
  const { grid } = useContext(Context);

  const handleClick = (value) => {
    grid.setItemsGrid(value);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleClick("big")}
        title="Крупна сітка"
        className={`${styles.catalogViewButton} ${grid.itemsGrid === "big" && styles.active}`}
      >
        <TfiLayoutGrid3Alt size={16} />
      </button>
      <button
        onClick={() => handleClick("small")}
        title="Мала сітка"
        className={`${styles.catalogViewButton} ${
          grid.itemsGrid === "small" && styles.active
        }`}
      >
        <TfiLayoutGrid4Alt size={20} />
      </button>
    </div>
  );
});

export default ItemsGrid;
