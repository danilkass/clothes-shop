import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.scss";

function StarRating({ rating, size }) {
  return (
    <div className={styles.container}>
      {rating ? (
        [...Array(5)].map((star, index) => {
          const currentRate = index + 1;
          return (
            <FaStar
              key={index}
              size={size ? size : 15}
              color={currentRate <= rating ? "#ffa900" : "#cbcbcb"}
            />
          );
        })
      ) : (
        <div className={styles.label}>Нет отзывов</div>
      )}
    </div>
  );
}

export default StarRating;
