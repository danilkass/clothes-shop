import { observer } from "mobx-react-lite";
import styles from "./ProductList.module.scss";
import { useContext } from "react";
import { Context } from "../..";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = observer(() => {
  const { product } = useContext(Context);

  return (
    <div className={styles.container}>
      {product.product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
});

export default ProductList;
