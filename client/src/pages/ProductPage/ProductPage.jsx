import StarRating from "../../components/UI/StarRating/StarRating";
import ProductSize from "../../components/UI/ProductSize/ProductSize";
import styles from "./ProductPage.module.scss";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import ProductPrice from "../../components/UI/ProductPrice/ProductPrice";
import ProductGalery from "../../components/ProductGalery/ProductGalery";
import ProductCharacteristics from "../../components/ProductCharacteristics/ProductCharacteristics";
import ProductComments from "../../components/ProductComments/ProductComments";

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
    createdAt: "2024-01-29T12:00:00.000Z",
    shortDescription:
      "Якісна чоловіча футболка за доступною ціною, добре носиться й зберігає колір і форму досить довго. Футболка має прямий фасон без бічних швів. Відповідає вимогам стандарту Oeko-TexStandard 100. Це гарантує брак в одязі будь-яких речовин, що завдають шкоди людині або довкіллю.",
  };

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <div className={styles.container}>
        <ProductGalery product={product} />

        <div className={styles.productMainInfo}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productRating}>
            <div className={styles.productRatingReviews}>
              <StarRating rating={product.rating} size={20} />
              {product.rating && <span>Відгуків: 15</span>}
            </div>
            <span className={styles.productCode}>Код: {product.id}</span>
          </div>
          <ProductSize size={product.size} />

          <div className={styles.productTrade}>
            <ProductPrice price={product.price} discount={product.discount} fontSize={28} />
            <button className={styles.buyButton}>В кошик</button>
          </div>

          {product.shortDescription && (
            <div className={styles.productDescription}>
              <div className={styles.productTabsHeading}>Опис</div>
              <div className={styles.productDescriptionContent}>
                <p> {product.shortDescription}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.productAboutLeft}>
          <div className={styles.productCharacteristics}>
            <div className={styles.productTabsHeading}>Характеристики</div>
            <ProductCharacteristics />
          </div>
        </div>
        <div className={styles.productAboutRight}>
          <div className={styles.productComents}>
            <div className={styles.productTabsHeading}>
              Відгуки покупців <span>15</span>
            </div>
            <ProductComments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
