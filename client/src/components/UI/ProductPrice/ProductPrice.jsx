import styles from "./ProductPrice.module.scss";

function ProductPrice({ price, discount }) {
  return (
    <>
      {!discount ? (
        <div className={styles.priceBlock}>
          <div className={styles.price}>
            {price}
            <span className={styles.currency}>₴</span>
          </div>
        </div>
      ) : (
        <div className={styles.priceBlock}>
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
