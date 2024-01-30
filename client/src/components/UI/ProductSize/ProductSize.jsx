import { useState } from "react";
import styles from "./ProductSize.module.scss";
import ProductSizeTable from "../../Modal/ProductSizeTable/ProductSizeTable";

function ProductSize({ size }) {
  const [selectedSize, setSelectedSize] = useState(size[Math.floor(size.length / 2) - 1]);

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.selectedSizeLabel}>Обраний розмір:</span> {selectedSize}
      </div>
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

      <ProductSizeTable />
    </div>
  );
}

export default ProductSize;
