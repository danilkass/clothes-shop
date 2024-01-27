import { PRODUCT_ROUTE } from "../../utils/consts";
import ProductBaner from "../UI/ProductBaner/ProductBaner";
// import ProductDiscount from "../UI/ProductDiscount/ProductDiscount";
import ProductPrice from "../UI/ProductPrice/ProductPrice";
import StarRating from "../UI/StarRating/StarRating";
import styles from "./ProductItem.module.scss";
import { useNavigate } from "react-router-dom";

function ProductItem({ product, baner }) {
  const navigate = useNavigate();

  const openProduct = (id) => {
    navigate(PRODUCT_ROUTE + "/" + id);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          openProduct(product.id);
        }}
        className={styles.imageContainer}
      >
        <img className={styles.image} src={product.img} alt="Product card"></img>
      </div>

      {baner && <ProductBaner product={product} fontSize={14} />}

      <div className={styles.productInfo}>
        <div
          onClick={() => {
            openProduct(product.id);
          }}
          className={styles.productTitile}
        >
          {product.name}
        </div>

        <StarRating rating={product.rating} />

        <div className={styles.price}>
          <ProductPrice price={product.price} discount={product.discount} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
