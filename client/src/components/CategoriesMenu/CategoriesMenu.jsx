import { observer } from "mobx-react-lite";
import styles from "./CategoriesMenu.module.scss";
import { useContext, useState } from "react";
import { Context } from "../..";

const CategoriesMenu = observer(() => {
  const { category } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState({});

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {category.category.map((mainCategory) => (
          <li className={styles.menuItem} key={mainCategory.id}>
            <div
              onMouseEnter={() => {
                if (mainCategory !== selectedCategory) {
                  setSelectedCategory(mainCategory);
                }
              }}
              className={`${styles.categoryLink} opacity-item`}
            >
              {mainCategory.name}
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
