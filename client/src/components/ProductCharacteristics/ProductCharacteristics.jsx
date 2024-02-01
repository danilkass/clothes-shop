import styles from "./ProductCharacteristics.module.scss";

function ProductCharacteristics() {
  return (
    <div className={styles.characteristicsList}>
      <div className={styles.characteristicsItem}>
        <div className={styles.characteristicsLabel}>
          <span>Принт</span>
        </div>
        <div className={styles.characteristicsValue}>Однотонний</div>
      </div>
      <div className={styles.characteristicsItem}>
        <div className={styles.characteristicsLabel}>
          <span>Матеріал</span>
        </div>
        <div className={styles.characteristicsValue}>Бавовна</div>
      </div>
      <div className={styles.characteristicsItem}>
        <div className={styles.characteristicsLabel}>
          <span>Склад</span>
        </div>
        <div className={styles.characteristicsValue}>100% бавовна</div>
      </div>
      <div className={styles.characteristicsItem}>
        <div className={styles.characteristicsLabel}>
          <span>Країна виробник</span>
        </div>
        <div className={styles.characteristicsValue}>Марокко</div>
      </div>
      <div className={styles.characteristicsItem}>
        <div className={styles.characteristicsLabel}>
          <span>Країна реєстрації бренду</span>
        </div>
        <div className={styles.characteristicsValue}>США</div>
      </div>
    </div>
  );
}

export default ProductCharacteristics;
