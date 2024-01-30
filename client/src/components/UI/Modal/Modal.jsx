import styles from "./Modal.module.scss";
import { FaXmark } from "react-icons/fa6";

// Use it for structure your modal

// .modalHeader {
// 	border-bottom: 1px solid var(--global-black-10);
// 	margin-bottom: 20px;
// }
// .modalContent {
// 	height: 100%;
// 	overflow-y: auto;
// }

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

        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
