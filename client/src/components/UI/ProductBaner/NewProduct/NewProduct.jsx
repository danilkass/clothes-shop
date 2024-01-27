import styles from "./NewProduct.module.scss";

function NewProduct({ createdAt, fontSize }) {
  return (
    <div style={fontSize && { fontSize: `${fontSize}px` }} className={styles.topRating}>
      NEW
    </div>
  );
}

export default NewProduct;
