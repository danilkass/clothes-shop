import { observer } from "mobx-react-lite";
import styles from "./CategoryBar.module.scss";
import { useContext } from "react";
import { Context } from "../..";

const CategoryBar = observer(() => {
  const { category } = useContext(Context);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {category.subcategory.map((i) => (
          <li key={i.id} className={styles.item}>
            <span onClick={() => category.setSelectedSubcategory(i)}>{i.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoryBar;
