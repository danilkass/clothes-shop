import styles from "./ProductSizeTable.module.scss";
import { observer } from "mobx-react-lite";

import { GiClothes } from "react-icons/gi";
import Modal from "../../UI/Modal/Modal";
import { useContext, useState } from "react";
import SizeTable from "./Table/SizeTable";
import ShoesSizeTable from "./Table/ShoesSizeTable";
import { Context } from "../../..";

const ProductSizeTable = observer(() => {
  const { category } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);

  console.log(category.selectedCategory.id);
  return (
    <>
      {!(category.selectedCategory.id === 3) && (
        <>
          <button className={styles.productTableSize} onClick={() => setModalActive(true)}>
            <GiClothes size={24} />
            <span>Таблиця розмірів</span>
          </button>
          <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.modalHeader}>Таблиця розмірів</div>
            <div className={styles.modalContent}>
              {category.selectedCategory.id ? (
                (category.selectedCategory.id === 1 && <SizeTable />) ||
                (category.selectedCategory.id === 2 && <ShoesSizeTable />)
              ) : (
                <SizeTable />
              )}
            </div>
          </Modal>
        </>
      )}
    </>
  );
});

export default ProductSizeTable;
