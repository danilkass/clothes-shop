import StarRating from "../UI/StarRating/StarRating";
import styles from "./ProductComments.module.scss";

function ProductComments() {
  return (
    <div className={styles.commentsList}>
      <div className={styles.commentsItem}>
        <div className={styles.user}>
          <span className={styles.name}>Андрей Синявський</span>
          <span className={styles.date}>29 вересня 2023</span>
        </div>

        <StarRating rating={4} size={16} />
        <p>
          Хотів придбати 2 однакові базові чорні футболки. Замовив футболку від Gildan та від
          Fruit of the loom Valueweight. Купив лише останню. У Gildan занадто тонкий матеріал,
          та невідповідність розмірній сітці. XL розмір по факту, як XXL. У Fruit of the loom
          Valueweight розмірна сітка відповідає дійсності, та якісніший матеріал. Більш
          щільний, та не просвічується, як у Gildan. Тому, якщо вам потрібна звичайна базова
          чорна футболка до 300 грн., то краще купуйте від виробника Fruit of the loom.
        </p>
      </div>

      <div className={styles.commentsItem}>
        <div className={styles.user}>
          <span className={styles.name}>Данил Касьян</span>
          <span className={styles.date}>24 жовтня 2023</span>
        </div>

        <StarRating rating={5} size={16} />
        <p>Дуже класна футболка</p>
      </div>
    </div>
  );
}

export default ProductComments;
