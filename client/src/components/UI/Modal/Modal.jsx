import styles from "./Modal.module.scss";
import { FaXmark } from "react-icons/fa6";

function Modal({ active, setActive, children }) {
  return (
    <div
      className={`${styles.modal} ${active && styles.activeModal}`}
      onMouseDown={() => setActive(false)}
    >
      <div
        className={`${styles.modalContainer} ${active && styles.activeModal}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.closeButton} onClick={() => setActive(false)}>
          <FaXmark size={24} />
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
