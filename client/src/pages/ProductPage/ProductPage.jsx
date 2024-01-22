import StarRating from "../../components/UI/StarRating/StarRating";
import ProductSize from "../../components/UI/ProductSize/ProductSize";
import styles from "./ProductPage.module.scss";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import ProductPrice from "../../components/UI/ProductPrice/ProductPrice";
import ProductDiscount from "../../components/UI/ProductDiscount/ProductDiscount";
function ProductPage() {
  const product = {
    id: 1,
    name: "Штаны спортивные",
    price: 300,
    discount: 259,
    rating: "4",
    size: ["S", "M", "L", "XXXL"],
    img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
  };

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.productImage} src={product.img} alt="product" />
          <ProductDiscount price={product.price} discount={product.discount} />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.productName}>{product.name}</div>
          <StarRating rating={product.rating} size={20} />
          <ProductSize size={product.size} />

          <ProductPrice price={product.price} discount={product.discount} />
          <button className={styles.buyButton}>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
