import styles from "./Breadcrumbs.module.scss";
import homeSvg from "../../../assets/home.svg";

function Breadcrumbs() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <img src={homeSvg} alt="home" className={styles.icon} />/ категорія / підкатегорія /
        штани спортивні
      </div>
      {/* <div className={styles.currentBreadcrumb}>Одяг</div> */}
    </div>
  );
}

export default Breadcrumbs;
