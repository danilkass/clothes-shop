import styles from "./ProductTopRating.module.scss";

function ProductTopRating({ fontSize }) {
  return (
    <>
      <div style={fontSize && { fontSize: `${fontSize}px` }} className={styles.topRating}>
        TOP RATING
      </div>
    </>
  );
}

export default ProductTopRating;
