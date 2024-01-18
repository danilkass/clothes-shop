import styles from "./Shop.module.scss";

import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/ProductList/ProductList";

const Shop = () => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <div className={styles.container}>
        <CategoryBar />
        <div className={styles.block}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
