import styles from "./SearchInput.module.scss";
import searchSvg from "../../../assets/search.svg";

function SearchInput() {
  return (
    <div className={styles.block}>
      <input type="text" placeholder="Знайти товар" className={styles.searchInput} />
      <button className={styles.searchBtn}>
        <img src={searchSvg} alt="search" className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchInput;
