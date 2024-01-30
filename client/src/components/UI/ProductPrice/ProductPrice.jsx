import styles from "./ProductPrice.module.scss";

function ProductPrice({ price, discount, fontSize }) {
  return (
    <>
      {!discount ? (
        <div
          className={styles.priceBlock}
          style={fontSize ? { fontSize: `${fontSize}px` } : { fontSize: "24px" }}
        >
          <div className={styles.price}>
            {price}
            <span className={styles.currency}>₴</span>
          </div>
        </div>
      ) : (
        <div
          className={styles.priceBlock}
          style={fontSize ? { fontSize: `${fontSize}px` } : { fontSize: "24px" }}
        >
          <div className={styles.priceIfDiscount}>
            {price}
            <span className={styles.currency}>₴</span>
          </div>
          <div className={styles.discount}>
            {discount}
            <span className={styles.currency}>₴</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPrice;
