import { observer } from "mobx-react-lite";
import styles from "./CategoryMenu.module.scss";
import { useContext } from "react";
import { Context } from "../..";

import arrowSvg from "../../assets/arrow.svg";

const CategoryMenu = observer(() => {
  const { category } = useContext(Context);

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {category.category.map((mainCategory) => (
          <li
            className={styles.menuItem}
            key={mainCategory.id}
            onMouseEnter={() => {
              category.setSelectedCategory(mainCategory);
            }}
          >
            <div className={`${styles.categoryLink} opacity-item`}>{mainCategory.name}</div>
            <div className={styles.iconContainer}>
              <img src={arrowSvg} alt="arrow" className={`${styles.icon} `} />
            </div>

            <ul className={styles.subMenu}>
              <div className={styles.subMenuContainer}>
                {category.subcategory.map((subCategory) => (
                  <li className={styles.subMenuItem} key={subCategory.id}>
                    <div className={styles.subcategoryLink}>{subCategory.name}</div>
                  </li>
                ))}
              </div>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoryMenu;
