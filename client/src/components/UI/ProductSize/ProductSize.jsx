import { useState } from "react";
import styles from "./ProductSize.module.scss";

function ProductSize({ size }) {
  const [selectedSize, setSelectedSize] = useState(size[size.length / 2]);

  return (
    <div className={styles.container}>
      <div>Обраний розмір: {selectedSize}</div>
      <div className={styles.buttonContainer}>
        {size.map((size, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                if (size !== selectedSize) setSelectedSize(size);
              }}
              className={`${styles.sizeButton} ${selectedSize === size ? styles.active : ""}`}
            >
              {size}
            </button>
          );
        })}

        <div />
      </div>
    </div>
  );
}

export default ProductSize;
