import StarRating from "../../components/UI/StarRating/StarRating";
import ProductSize from "../../components/UI/ProductSize/ProductSize";
import styles from "./ProductPage.module.scss";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import ProductPrice from "../../components/UI/ProductPrice/ProductPrice";
import ProductGalery from "../../components/ProductGalery/ProductGalery";

function ProductPage() {
  const product = {
    id: 876767774,
    name: "Футболка однотонная",
    price: 300,
    discount: 259,
    rating: 4,
    size: ["S", "M", "L", "XXXL"],
    img: [
      {
        id: 1,
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
        color: "orange",
      },
      {
        id: 2,
        img: "https://content2.rozetka.com.ua/goods/images/big/279984387.jpg",
        color: "blue",
      },
      {
        id: 3,
        img: "https://modnamayka.com.ua/images/products/backs/m_f_1.png",
        color: "black",
      },
    ],
    createdAt: "2024-01-21T12:00:00.000Z",
  };

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <div className={styles.container}>
        <div className={styles.productPicture}>
          {/* <img className={styles.productImage} src={product.img} alt="product" />
          <ProductBaner product={product} fontSize={14} /> */}
          <ProductGalery product={product} />
        </div>

        <div className={styles.productAbout}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productRating}>
            <StarRating rating={product.rating} size={20} />
            <span className={styles.productCode}>Код: {product.id}</span>
          </div>
          <ProductSize size={product.size} />

          <div className={styles.productTrade}>
            <ProductPrice price={product.price} discount={product.discount} fontSize={28} />
            <button className={styles.buyButton}>В кошик</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
