import { observer } from "mobx-react-lite";
import styles from "./CategoriesMenu.module.scss";
import { useContext } from "react";
import { Context } from "../..";

function toUpperCase(str) {
  return str.toUpperCase();
}

const CategoriesMenu = observer(() => {
  const { category } = useContext(Context);

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {category.category.map((mainCategory) => (
          <li className={styles.menuItem} key={mainCategory.id}>
            <div className={`${styles.categoryLink} opacity-item`}>
              {toUpperCase(mainCategory.name)}
            </div>

            <ul className={styles.subMenu}>
              {category.subcategory.map((subCategory) => (
                <li className={styles.subMenuItem} key={subCategory.id}>
                  <div className={styles.subcategoryLink}>{subCategory.name}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoriesMenu;
