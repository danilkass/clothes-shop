import styles from "./Breadcrumbs.module.scss";
import homeSvg from "../../../assets/home.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../../utils/consts";

function Breadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <img
          onClick={() => navigate(MAIN_ROUTE)}
          src={homeSvg}
          alt="home"
          className={styles.icon}
        />
        / категорія / підкатегорія / штани спортивні
      </div>
      {/* <div className={styles.currentBreadcrumb}>Одяг</div> */}
    </div>
  );
}

export default Breadcrumbs;
