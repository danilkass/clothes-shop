import { observer } from "mobx-react-lite";
import styles from "./ProductList.module.scss";
import { useContext } from "react";
import { Context } from "../..";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = observer(() => {
  const { product, grid } = useContext(Context);

  return (
    <div className={grid.itemsGrid === "big" ? styles.bigGrid : styles.smallGrid}>
      {product.product.map((product) => (
        <ProductItem key={product.id} product={product} baner={true} />
      ))}
    </div>
  );
});

export default ProductList;
