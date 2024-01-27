import styles from "./ProductDiscount.module.scss";

function ProductDiscount({ price, discount, fontSize }) {
  const countSalePercent = (price, discount) => {
    const sale = Math.ceil(((price - discount) / price) * 100);
    return `-${sale}%`;
  };
  return (
    <>
      {discount && (
        <div style={fontSize && { fontSize: `${fontSize}px` }} className={styles.discount}>
          {countSalePercent(price, discount)}
        </div>
      )}
    </>
  );
}

export default ProductDiscount;
