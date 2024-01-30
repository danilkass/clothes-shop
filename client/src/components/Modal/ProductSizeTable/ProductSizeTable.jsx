import styles from "./ProductSizeTable.module.scss";
import { GiClothes } from "react-icons/gi";
import Modal from "../../UI/Modal/Modal";
import { useState } from "react";
import SizeTable from "./Table/SizeTable";

function ProductSizeTable() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <button className={styles.productTableSize} onClick={() => setModalActive(true)}>
        <GiClothes size={24} />
        <span>Таблиця розмірів</span>
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modalHeader}>Таблиця розмірів</div>
        <div className={styles.modalContent}>
          <SizeTable />
        </div>
      </Modal>
    </>
  );
}

export default ProductSizeTable;
